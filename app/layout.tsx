import "./globals.css";

/**
 * Keep layout lean so the focus is on wireframing the UI.
 * We'll introduce Redux/RTK Query later when we wire data.
 */
export const metadata = {
  title: "AI FAQ ChatBot — Wireframing",
  description: "Wireframing & designing the UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
