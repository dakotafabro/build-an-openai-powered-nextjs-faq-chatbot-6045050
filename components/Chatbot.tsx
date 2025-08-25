"use client";

import { useState } from "react";

/**
 * Chat UI stub — lightweight form so we can validate flow and a11y.
 * Later, this will call your API and render a message list.
 */
export default function Chatbot() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Ask about the course, the stack, or deployment. I’ll keep it concise.",
    },
  ]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = question.trim();
    if (!q) return;
    // For now, echo back a stubbed response.
    setMessages((m) => [
      ...m,
      { role: "user", content: q },
      {
        role: "assistant",
        content:
          "Stubbed reply for the wireframe. We’ll connect the backend later.",
      },
    ]);
    setQuestion("");
  }

  return (
    <div>
      <div style={{ minHeight: 160, marginBottom: 12 }} aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className="small">
            {m.role === "user" ? "You: " : "Assistant: "}
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit} style={{ display: "flex", gap: 8 }}>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          aria-label="Ask the chatbot a question"
          placeholder="Ask a question…"
        />
        <button type="submit" aria-label="Send message">
          Send
        </button>
      </form>

      <p className="small" style={{ marginTop: 8 }}>
        I’m intentionally not streaming or calling APIs yet—just validating the
        interface.
      </p>
    </div>
  );
}
