import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Dakota: Placeholders today; real Next API routes tomorrow.
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
        return {
          data: {
            faqs: [
              { id: "intro-1", question: "What are we building in this course?", answer: "An OpenAI-powered FAQ chatbot with Next.js." },
              { id: "setup-1", question: "Why RTK Query?", answer: "It removes fetch boilerplate and gives us caching, deduping, and hooks." },
              { id: "deploy-1", question: "How do I deploy?", answer: "Use Vercel. We’ll add notes under /docs before deploy." }
            ]
          }
        } as any;
      }
    }),
    askAi: builder.mutation<AskResponse, AskRequest>({
      async queryFn({ question }) {
        return { data: { answer: `Placeholder answer. You asked: "${question}"` } } as any;
      }
    })
  })
});

export const { useGetFaqsQuery, useAskAiMutation } = faqBotApi;
