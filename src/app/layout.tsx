import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@mysten/dapp-kit/dist/index.css";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from 'sonner'
import DevConsole from '@/components/DevConsole'
import ErrorBoundary from '@/components/ErrorBoundary'
import NetworkBanner from '@/components/NetworkBanner'
// import { ThemeProvider } from '@/lib/contexts/ThemeContext'
import DreamLitWalletProvider from '@/providers/WalletProvider'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dreamlit | Get Productive Onchain - Sui/Move Development Specialists",
  description: "Software consulting specializing in Sui/Move development. Building decentralized productivity tools (Waltodo, WalSheetz, Tundra) powered by Walrus storage for SMBs.",
  keywords: ["Sui blockchain", "Move development", "Walrus storage", "decentralized productivity", "onchain spreadsheets", "Web3 consulting", "blockchain task management", "ETL services", "Waltodo", "WalSheetz", "Tundra", "Dreamlit"],
  authors: [{ name: "Dreamlit" }],
  creator: "Dreamlit",
  publisher: "Dreamlit",
  openGraph: {
    title: "Dreamlit | Get Productive Onchain",
    description: "Sui/Move development specialists building decentralized productivity tools for SMBs",
    url: "https://dreamlit.io",
    siteName: "Dreamlit",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dreamlit.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dreamlit - Get Productive Onchain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamlit | Get Productive Onchain",
    description: "Sui/Move development specialists building decentralized productivity tools for SMBs",
    images: ["https://dreamlit.io/og-image.png"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <DreamLitWalletProvider>
            <NetworkBanner />
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
            <Analytics />
            <DevConsole />
            <Toaster 
              richColors 
              position="bottom-right"
              toastOptions={{
                className: 'font-sans',
              }}
            />
        </DreamLitWalletProvider>       
      </body>
    </html>
  );
}
