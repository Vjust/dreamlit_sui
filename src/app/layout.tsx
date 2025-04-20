import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DreamLit Apps | Innovative Software Solutions",
  description: "DreamLit Apps creates innovative software solutions that transform your ideas into reality. We build elegant, powerful applications for businesses of all sizes.",
  keywords: ["data engineering", "crypto app development", "custom applications", "web development", "mobile apps", "software solutions"],
  authors: [{ name: "DreamLit Apps" }],
  creator: "DreamLit Apps",
  publisher: "DreamLit Apps",
  openGraph: {
    title: "DreamLit Apps | Innovative Software Solutions",
    description: "Transform your ideas into powerful software solutions",
    url: "https://dreamlit.io",
    siteName: "DreamLit Apps",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamLit Apps | Innovative Software Solutions",
    description: "Transform your ideas into powerful software solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://dreamlit.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-black dark:text-gray-100`}
      >
        {children}
        <Analytics />        
      </body>
    </html>
  );
}
