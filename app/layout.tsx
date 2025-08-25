import "./globals.css";
import { Providers } from "../lib/providers";

/**
 * Dakota: Provider stays in place so getFaqs can read from the shared cache.
 */
export const metadata = {
  title: "AI FAQ ChatBot — /api/faqs",
  description: "Serving mock data from a JSON file"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Providers>
          <div className="container" role="document">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
