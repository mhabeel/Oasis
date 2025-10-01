import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Reem_Kufi, Cairo } from "next/font/google";

const SITE_NAME = "Oasis – Mediterranean Restaurant";
const SITE_URL = "https://www.example.com"; // TODO: change to your domain
const SITE_DESCRIPTION = "Authentic Mediterranean cuisine in Luxembourg: salads, tajin, and crafted drinks.";

export const viewport: Viewport = {
  themeColor: "#D4AF37", // amber-500
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Oasis",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Oasis",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Oasis",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Oasis dishes" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
const heading = Reem_Kufi({
  subsets: ["latin","latin-ext","arabic"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});

const body = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-white text-zinc-900 antialiased">{children}</body>
    </html>
  );
}
