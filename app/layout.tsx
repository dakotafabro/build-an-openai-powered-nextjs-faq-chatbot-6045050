import "./globals.css";
import { Providers } from "../lib/providers";

/**
 * Dakota: Provider ensures RTK Query works during E2E runs too.
 */
export const metadata = {
  title: "AI FAQ ChatBot — Playwright setup",
  description: "Adding a Playwright testing suite"
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
