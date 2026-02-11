import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.scss";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { CartProvider } from "@/contexts/CartContext";
import { BackToTop } from "@/components/ui/back-to-top";
import ContactSidebar from "@/components/ui/contact-sidebar";
import { siteConfig } from "@/config/site.config";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/* ------------------ FONTS ------------------ */
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

/* ------------------ VIEWPORT ------------------ */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
};

/* ------------------ METADATA ------------------ */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  applicationName: siteConfig.name,

  keywords: [
    "automotive electrical parts",
    "fuse box manufacturer",
    "jcb connectors",
    "wiring harness manufacturer",
    "glass fuse box",
    "square fuse box",
    "automotive wiring harness",
    "brass terminals",
    "battery cables",
    "relays and fuses",
    "Saroop Industries",
  ],

  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },

  /* -------- FAVICONS & APP ICONS (CORRECT WAY) -------- */
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  manifest: "/site.webmanifest",
  category: "Automotive Parts",
};

/* ------------------ ROOT LAYOUT ------------------ */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${outfit.variable} font-sans antialiased`}
      >
        <CartProvider>
          <Header />
          <main className="min-h-screen relative z-0" role="main">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <BackToTop />
          <ContactSidebar />
        </CartProvider>

        {/* Vercel Analytics */}
        <Analytics />
        
        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
