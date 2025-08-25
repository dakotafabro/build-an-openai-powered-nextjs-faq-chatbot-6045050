import FAQList from "../components/FAQList";
import Chatbot from "../components/Chatbot";
export default function HomePage(){
  return(<main id="main" role="main" aria-labelledby="page-title"><h1 id="page-title" style={{marginBottom:8}}>FAQ ChatBot — UX & a11y pass</h1><p className="small" style={{marginTop:0}}>Goal for this step: predictable keyboard flow, clear labels, and helpful defaults. Try <kbd>Tab</kbd> through interactive elements, then use <kbd>Enter</kbd> to submit.</p><div style={{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:16}}><section className="panel" aria-labelledby="faq-heading"><h2 id="faq-heading">Frequently Asked Questions</h2><FAQList/></section><section className="panel" aria-labelledby="chatbot-heading"><h2 id="chatbot-heading">Ask the Chatbot</h2><Chatbot/></section></div></main>);
}
