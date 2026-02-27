import type { Metadata } from "next";
import { Montserrat, Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abouthyunwookim.com"),
  title: {
    default: "Hyunwoo Kim — Senior Director, Business Development at MOLOCO",
    template: "%s | Hyunwoo Kim",
  },
  description:
    "20+ years driving growth at the intersection of advertising, technology, and product innovation. AI-powered Commerce Media leader.",
  keywords: [
    "Hyunwoo Kim", "MOLOCO", "Commerce Media", "Retail Media", "AdTech",
    "Business Development", "Product Management", "AI Advertising",
    "DSP", "Digital Marketing", "김현우",
  ],
  authors: [{ name: "Hyunwoo Kim" }],
  creator: "Hyunwoo Kim",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://www.abouthyunwookim.com",
  },
  openGraph: {
    title: "Hyunwoo Kim — Senior Director, Business Development at MOLOCO",
    description:
      "20+ years driving growth at the intersection of advertising, technology, and product innovation. AI-powered Commerce Media leader.",
    url: "https://www.abouthyunwookim.com",
    siteName: "Hyunwoo Kim Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hyunwoo Kim — Senior Director, Business Development at MOLOCO",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyunwoo Kim — Senior Director, Business Development at MOLOCO",
    description:
      "20+ years driving growth at the intersection of advertising, technology, and product innovation.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${notoSansKR.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1H8RNYVFE9"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1H8RNYVFE9');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
