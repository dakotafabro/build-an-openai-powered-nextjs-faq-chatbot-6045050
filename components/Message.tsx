/**
 * Dakota: Presentational message bubble.
 */
export default function Message({ role, content }: { role: "user" | "assistant"; content: string }) {
  const align = role === "user" ? "flex-end" : "flex-start";
  const bg = role === "user" ? "#1d2030" : "#12141c";
  const label = role === "user" ? "You" : "Assistant";
  return (
    <div style={{ display: "flex", justifyContent: align, marginBottom: 8 }}>
      <div className="panel" style={{ background: bg, maxWidth: 520 }}>
        <div className="small" style={{ opacity: 0.7, marginBottom: 4 }}>{label}</div>
        <div>{content}</div>
      </div>
    </div>
  );
}
