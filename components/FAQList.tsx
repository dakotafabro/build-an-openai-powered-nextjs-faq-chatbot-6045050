"use client";
import { useMemo, useState, useId } from "react";
const STUBS = [
  {
    id: "s1",
    q: "Where do responses come from?",
    a: "From your /api/ask route later in the course.",
  },
  {
    id: "s2",
    q: "How do I deploy?",
    a: "Vercel is the easiest path for Next.js.",
  },
  {
    id: "s3",
    q: "Does the project have tests?",
    a: "Yes, you add Jest and Playwright to the project.",
  },
];
export default function FAQList() {
  const [query, setQuery] = useState("");
  const id = useId();
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return STUBS;
    return STUBS.filter(
      (i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)
    );
  }, [query]);
  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <label htmlFor={id} className="small" style={{ minWidth: 60 }}>
          Search
        </label>
        <input
          id={id}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search FAQs…"
          aria-label="Search FAQs"
        />
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
        {filtered.map((f) => (
          <li key={f.id} style={{ padding: "8px 0" }}>
            <details>
              <summary style={{ cursor: "pointer" }}>{f.q}</summary>
              <p className="small" style={{ marginTop: 6 }}>
                {f.a}
              </p>
            </details>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="small">No matches. Try a different search.</li>
        )}
      </ul>
    </div>
  );
}
