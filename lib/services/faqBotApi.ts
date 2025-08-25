import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Dakota: Placeholder endpoints so the UI compiles before real APIs exist.
 * We'll point these to /api routes in the next chapters.
 */

type FAQ = { id: string; question: string; answer: string };
type FaqsResponse = { faqs: FAQ[] };
type AskRequest = { question: string; history?: { role: "user" | "assistant"; content: string }[] };
type AskResponse = { answer: string };

export const faqBotApi = createApi({
  reducerPath: "faqBotApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getFaqs: builder.query<FaqsResponse, void>({
      async queryFn() {
        // Dakota: return a tiny stub so UI and tests can render without a backend.
        return {
          data: {
            faqs: [
              { id: "intro-1", question: "What are we building?", answer: "A Next.js FAQ chatbot with an AI endpoint." },
              { id: "flow-1",  question: "Why RTK Query here?",  answer: "It centralizes fetching and caching with minimal code." }
            ]
          }
        } as any;
      }
    }),
    askAi: builder.mutation<AskResponse, AskRequest>({
      async queryFn({ question }) {
        // Dakota: early-stage canned reply. Real model integration comes later.
        return { data: { answer: `Placeholder answer for: "${question}"` } } as any;
      }
    })
  })
});

export const { useGetFaqsQuery, useAskAiMutation } = faqBotApi;
