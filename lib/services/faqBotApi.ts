import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Dakota: getFaqs is now a real network call to our Next route.
 * askAi remains a placeholder until we add /api/ask.
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
      query: () => "/api/faqs"
    }),
    askAi: builder.mutation<AskResponse, AskRequest>({
      async queryFn({ question }) {
        return { data: { answer: `Placeholder answer. You asked: "${question}"` } } as any;
      }
    })
  })
});

export const { useGetFaqsQuery, useAskAiMutation } = faqBotApi;
