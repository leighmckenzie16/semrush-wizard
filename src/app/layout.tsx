import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Semrush Wizard — Find the Right Setup for Your Business",
  description:
    "Answer a few questions to discover whether Semrush One or Semrush Enterprise is the right fit for your visibility challenge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
