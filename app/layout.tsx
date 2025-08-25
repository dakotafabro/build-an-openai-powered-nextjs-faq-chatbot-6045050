import "./globals.css";
import { Providers } from "../lib/providers";

/**
 * Dakota: 03-02 introduces the Redux Provider so RTK Query is available anywhere.
 */
export const metadata = {
  title: "AI FAQ ChatBot — Setting up Next.js",
  description: "Scaffold + Provider + RTK Query slice (placeholder)"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="container">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
