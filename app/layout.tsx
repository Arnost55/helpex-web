import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://helpex.dev"),
  title: {
    default: "HelpeX — Your intelligence. Your infrastructure.",
    template: "%s — HelpeX",
  },
  description:
    "A permissioned personal AI agent platform in private alpha. Designed to understand, assist and act while keeping people in control.",
  applicationName: "HelpeX",
  openGraph: {
    title: "HelpeX — Your intelligence. Your infrastructure.",
    description:
      "Personal intelligence, built around permissioned tools and human control.",
    url: "https://helpex.dev",
    siteName: "HelpeX",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "HelpeX — Graphite and Sage" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HelpeX — Your intelligence. Your infrastructure.",
    description: "Personal intelligence, under your control.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e1211",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
