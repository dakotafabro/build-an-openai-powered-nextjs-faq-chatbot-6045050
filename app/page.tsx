import FAQList from "../components/FAQList";
import Chatbot from "../components/Chatbot";

/**
 * Dakota: With Provider in place, we can start calling RTK Query hooks.
 * Endpoints are placeholders for now; the UI still renders real loading states.
 */
export default function HomePage() {
  return (
    <main>
      <h1 style={{ marginBottom: 8 }}>Setting up Next.js + RTK Query</h1>
      <p className="small" style={{ marginTop: 0 }}>
        This step wires the Redux Provider and a small RTK Query slice so our components can fetch data consistently.
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
