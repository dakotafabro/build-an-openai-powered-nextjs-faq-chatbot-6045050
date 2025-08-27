// Server-only utilities from Next.js App Router.
// NextResponse lets us return JSON/HTTP responses from route handlers.
import { NextResponse } from "next/server";

// Zod is a runtime schema validator. We use it to validate request bodies
// so our server only processes well-formed input (and we get nice errors).
import { z } from "zod";

/**
 * SCHEMA: Define exactly what a valid POST body looks like.
 *
 * - `question` is required and must be a non-empty string (min length 1).
 * - `history` is optional. If present, it must be an array of messages where:
 *      - `role` is either "user" or "assistant"
 *      - `content` is a string
 *
 * Why do this?
 * - Validating BEFORE doing any work prevents weird crashes later.
 * - Clear error messages help learners see what went wrong.
 */
const bodySchema = z.object({
  question: z.string().min(1, "Ask a real question."),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      })
    )
    .optional(),
});

/**
 * MODEL CALL: One function that knows how to talk to "the model".
 * Keeping this logic in one place makes it trivial to swap providers later.
 *
 * MOCK MODE:
 * - If MOCK_AI=1 OR there is no OPENAI_API_KEY set,
 *   we return a deterministic canned answer.
 * - This lets learners boot the app, click around, and see the full
 *   request/response flow without configuring real API keys on day one.
 *
 * Defensive programming:
 * - The function always returns a string. If anything goes sideways,
 *   we return a safe default so the UI doesn’t crash.
 */
async function callModel(
  question: string,
  history?: { role: "user" | "assistant"; content: string }[]
) {
  // Early escape: local dev, tests, Codespaces without secrets — all work.
  if (process.env.MOCK_AI === "1" || !process.env.OPENAI_API_KEY) {
    return `Here's a concise, course-aligned answer based on our mock mode. You asked: "${question}". In the course, we wire this to OpenAI for real responses.`;
  }

  // Dynamic import keeps the SDK out of the edge bundle unless needed
  // and avoids loading it during mock mode.
  const { OpenAI } = await import("openai");

  // Initialize the OpenAI client with your API key from environment variables.
  // Never hardcode secrets. Environment variables keep credentials out of git.
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  // Build a chat history the API understands.
  // Chat models expect an ordered array of messages with roles.
  const messages: Array<{
    role: "system" | "user" | "assistant";
    content: string;
  }> = [
    {
      // The system prompt sets behavior boundaries.
      // This keeps answers aligned to the course scope and prevents off-topic use.
      role: "system",
      content:
        "You are an AI FAQ assistant for a Next.js AI course. Be concise, accurate, and reference the project structure when useful. If a question is asked that doesn't relate to the benefits of taking the course, course material/topic, chatbots, or how to deploy the project, reject the question.",
    },
  ];

  // If the client sent prior turns, include them to preserve context.
  if (history?.length) {
    for (const m of history) messages.push(m);
  }

  // Finally, append the learner's new question as the latest "user" message.
  messages.push({
    role: "user",
    content: question,
  });

  // Call the Chat Completions API with a small, inexpensive model.
  // This returns a list of choices; we read the first one.
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
  });

  // Defensive read: reach into the nested response safely.
  // If anything is missing, reply with a friendly fallback.
  const answer =
    completion.choices?.[0]?.message?.content?.trim() ||
    "I couldn't generate a response.";
  return answer;
}

/**
 * ROUTE HANDLER: POST /api/... (depends on the file path in app/api)
 *
 * Flow:
 * 1) Parse JSON body from the request.
 * 2) Validate it against our Zod schema (throws if invalid).
 * 3) Call the model (mocked or real).
 * 4) Return a JSON response to the client.
 *
 * Errors:
 * - If validation fails or anything else throws, we return a 400
 *   with a helpful message. This keeps failure states predictable for the UI.
 */
export async function POST(req: Request) {
  try {
    // Step 1: Read the incoming JSON body.
    const json = await req.json();

    // Step 2: Validate + parse with Zod (throws on invalid input).
    const { question, history } = bodySchema.parse(json);

    // Step 3: Produce an answer (mock or real, but always a string).
    const answer = await callModel(question, history);

    // Step 4: Send the answer back to the browser as JSON.
    return NextResponse.json({ answer });
  } catch (err: any) {
    // Any error (validation, parsing, runtime) returns a clean 400.
    // The UI can check `error` to show a friendly message.
    return NextResponse.json(
      { error: err?.message ?? "Invalid request." },
      { status: 400 }
    );
  }
}
