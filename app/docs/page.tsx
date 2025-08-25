export default function DocsPage() {
  return (
    <main className="panel">
      <h1>05-01 Notes — Playwright setup</h1>
      <ul>
        <li>Added <code>@playwright/test</code> and <code>playwright.config.ts</code></li>
        <li>Scripts: <code>npm run test:e2e</code> and <code>npm run test:e2e:headed</code></li>
        <li>Web server uses <code>MOCK_AI=1 next dev</code> to keep answers deterministic later</li>
      </ul>
    </main>
  );
}
