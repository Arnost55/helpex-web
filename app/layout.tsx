import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/site-shell";

export const metadata: Metadata = { metadataBase: new URL("https://helpex.dev"), title: { default: "HelpeX — At your command.", template: "%s — HelpeX" }, description: "Private personal intelligence built around human control and permissioned tools.", applicationName: "HelpeX", openGraph: { title: "HelpeX — At your command.", description: "Private personal intelligence, ready to act.", url: "https://helpex.dev", siteName: "HelpeX", images: [{ url: "/og.svg", width: 1200, height: 630, alt: "HelpeX Graphite" }], type: "website" }, robots: { index: true, follow: true } };
export const viewport: Viewport = { themeColor: "#262626", colorScheme: "dark" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>; }
