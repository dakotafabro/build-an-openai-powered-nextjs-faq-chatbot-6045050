import FAQList from "../components/FAQList";
import Chatbot from "../components/Chatbot";

/**
 * Dakota: getFaqs now hits our real Next route backed by data/faqs.json.
 * The chat still returns a canned answer for now.
 */
export default function HomePage() {
  return (
    <main id="main" role="main" aria-labelledby="page-title">
      <h1 id="page-title" style={{ marginBottom: 8 }}>Add /api/faqs with mock data</h1>
      <p className="small" style={{ marginTop: 0 }}>
        The FAQ list is now reading from a stable API route. This keeps the UI identical while we swap in real data plumbing.
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
