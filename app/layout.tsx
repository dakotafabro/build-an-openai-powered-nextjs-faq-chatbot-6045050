import "./globals.css";
import { Providers } from "../lib/providers";

/**
 * Dakota: Provider is in place so RTK Query hooks work anywhere in the tree.
 * I also keep the skip link around to make keyboard nav predictable.
 */
export const metadata = {
  title: "AI FAQ ChatBot — Building the FAQ Bot UI",
  description: "Full UI wired to RTK Query placeholders"
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
