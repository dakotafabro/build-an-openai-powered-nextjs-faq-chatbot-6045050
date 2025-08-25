import "./globals.css";
export const metadata = { title: "AI FAQ ChatBot — UX pass", description: "Enhancing user flow & accessibility" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><a href="#main" className="skip-link">Skip to main content</a><div className="container" role="document">{children}</div></body></html>);
}
