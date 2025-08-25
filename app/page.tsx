import FAQList from "../components/FAQList";
import Chatbot from "../components/Chatbot";

/**
 * Dakota: App remains the same — we’re just adding a Playwright test harness.
 */
export default function HomePage() {
  return (
    <main id="main" role="main" aria-labelledby="page-title">
      <h1 id="page-title" style={{ marginBottom: 8 }}>Playwright test harness</h1>
      <p className="small" style={{ marginTop: 0 }}>
        This branch adds Playwright configuration and scripts. Tests land in the next step.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 16 }}>
        <section className="panel" aria-labelledby="faq-heading">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <FAQList />
        </section>

        <section className="panel" aria-labelledby="chatbot-heading">
          <h2 id="chatbot-heading">Ask the Chatbot</h2>
          <Chatbot />
        </section>
      </div>
    </main>
  );
}
