export default function DocsPage() {
  return (
    <main className="panel">
      <h1>04-01 Notes — /api/faqs</h1>
      <ul>
        <li><code>data/faqs.json</code> as the single source of truth</li>
        <li><code>GET /api/faqs</code> returns that JSON</li>
        <li>RTK Query's <code>getFaqs</code> now points to the route</li>
      </ul>
    </main>
  );
}
