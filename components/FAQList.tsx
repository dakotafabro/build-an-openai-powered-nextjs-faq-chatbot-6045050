"use client";

import { useMemo, useState } from "react";
import { useGetFaqsQuery } from "../lib/services/faqBotApi";
import SearchBar from "./SearchBar";

/**
 * Dakota: Real rendering path for the FAQ list. It reads from RTK Query's cache
 * and filters on the client for now.
 */
export default function FAQList() {
  const { data, isLoading, isError, refetch, isFetching } = useGetFaqsQuery();
  const [query, setQuery] = useState("");

  const faqs = data?.faqs ?? [];
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q));
  }, [faqs, query]);

  if (isLoading) return <div>Loading FAQs…</div>;
  if (isError) return <div>Failed to load FAQs.</div>;

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <SearchBar value={query} onChange={setQuery} />
        <button onClick={() => refetch()} aria-label="Refresh FAQs" disabled={isFetching}>
          {isFetching ? "Refreshing…" : "Refresh"}
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
        {filtered.map((f) => (
          <li key={f.id} style={{ padding: "8px 0" }}>
            <details>
              <summary style={{ cursor: "pointer" }}>{f.question}</summary>
              <p className="small" style={{ marginTop: 6 }}>{f.answer}</p>
            </details>
          </li>
        ))}
        {filtered.length === 0 && <li className="small">No matches. Try a different search.</li>}
      </ul>
    </div>
  );
}
