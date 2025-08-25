import FAQList from "../components/FAQList";
import Chatbot from "../components/Chatbot";

/**
 * This is the wireframe of your app.
 * FAQs on the left; the chat area on the right.
 */
export default function HomePage() {
  return (
    <main>
      <h1 style={{ marginBottom: 8 }}>Wireframing the FAQ ChatBot UI</h1>
      <p className="small" style={{ marginTop: 0 }}>
        Goal for this step: land the structure and keyboard flow. Data comes
        later.
      </p>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 16 }}
      >
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
