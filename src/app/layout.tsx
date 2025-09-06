import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Stalker - Smart Contact Management",
  description:
    "Stay connected with your professional network through intelligent interaction suggestions",
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
