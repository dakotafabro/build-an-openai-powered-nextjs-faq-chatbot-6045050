"use client";
import { useRef, useState } from "react";
import { useAskAiMutation } from "../lib/services/faqBotApi";
import LoadingDots from "./LoadingDots";
import Message from "./Message";

/**
 * Dakota: Chat still uses a placeholder mutation. We'll switch to /api/ask next.
 */
export default function Chatbot() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Ask me about the course, the stack, or deployment. I’ll keep it concise." }
  ]);
  const [question, setQuestion] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [askAi, { isLoading }] = useAskAiMutation();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = question.trim();
    if (!q) return;

    const next = [...messages, { role: "user" as const, content: q }];
    setMessages(next);
    setQuestion("");

    try {
      const res = await askAi({ question: q, history: next }).unwrap();
      setMessages([...next, { role: "assistant", content: res.answer }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "I had trouble answering that. Check your network or server logs." }]);
    } finally {
      inputRef.current?.focus();
    }
  }

  return (
    <div>
      <div aria-live="polite" aria-busy={isLoading} style={{ minHeight: 220, marginBottom: 12 }}>
        {messages.map((m, i) => <Message key={i} role={m.role} content={m.content} />)}
        {isLoading && <div className="small"><LoadingDots /> Thinking…</div>}
      </div>

      <form onSubmit={onSubmit} style={{ display: "flex", gap: 8 }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Ask a question…"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          aria-label="Ask the chatbot a question"
        />
        <button type="submit" aria-label="Send message" disabled={isLoading || question.trim().length === 0}>
          {isLoading ? "Sending…" : "Send"}
        </button>
      </form>
      <p className="small" style={{ marginTop: 8 }}>
        The real AI route comes in 04-02. For now, enjoy the stable list from /api/faqs.
      </p>
    </div>
  );
}
