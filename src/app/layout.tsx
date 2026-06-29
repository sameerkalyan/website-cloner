import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMIIT CyberAI — AI Governance & Infrastructure Consultancy",
  description:
    "SMIIT CyberAI is a London-based specialist consulting firm for AI Governance & Infrastructure in regulated industries. EU AI Act compliance, cloud architecture, and forward-deployed engineers.",
  keywords: ["AI Governance", "EU AI Act", "NIST AI RMF", "ISO 42001", "Cloud Infrastructure", "AI Agents", "Cybersecurity", "London"],
  authors: [{ name: "SMIIT CyberAI" }],
  openGraph: {
    title: "SMIIT CyberAI — AI Governance & Infrastructure",
    description:
      "Specialist AI governance and infrastructure consultancy for regulated industries. London, UK.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMIIT CyberAI",
    description: "AI Governance & Infrastructure Consultancy for regulated enterprise.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2440E0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans selection:bg-[rgba(36,64,224,0.16)] selection:text-[var(--ink)]">
        {children}
      </body>
    </html>
  );
}
