import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abigail Ekemhe (Oches) — UX Designer · Civic Tech · Atlantic Canada",
  description:
    "Abigail Ekemhe is a strategic, human-centred UX designer based in Moncton, New Brunswick — specialising in civic tech, social impact, and digital systems that serve real people.",
  openGraph: {
    title: "Abigail Ekemhe (Oches) — UX Designer",
    description: "Strategic UX design for civic tech and social impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
