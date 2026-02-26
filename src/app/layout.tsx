import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hyunwoo Kim — Senior Director, Business Development at MOLOCO",
  description:
    "20+ years driving growth at the intersection of advertising, technology, and product innovation.",
  openGraph: {
    title: "Hyunwoo Kim — Senior Director, Business Development at MOLOCO",
    description:
      "20+ years driving growth at the intersection of advertising, technology, and product innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
