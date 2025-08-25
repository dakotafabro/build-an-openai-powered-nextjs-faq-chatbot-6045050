"use client";

import { useId } from "react";

/**
 * Dakota: Controlled input with an explicit label for accessibility.
 */
export default function SearchBar({ value, onChange, placeholder = "Search FAQs…" }: { value: string; onChange: (v:string)=>void; placeholder?: string; }) {
  const id = useId();
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <label htmlFor={id} className="small" style={{ minWidth: 60 }}>Search</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search FAQs"
      />
    </div>
  );
}
