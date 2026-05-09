import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import FloatingContact from "@/components/ui/FloatingContact";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JsonLd from "@/components/ui/JsonLd";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a2744",
};

const BASE_URL = "https://jaksmetallab.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "JAKS Metal Lab LLP | Metal Testing Laboratory in Ahmedabad, Gujarat",
    template: "%s | JAKS Metal Lab LLP – Ahmedabad",
  },

  description:
    "JAKS Metal Lab LLP — Ahmedabad's trusted chemical metal testing laboratory. OES spectrometric analysis, wet chemical testing, carbon & sulphur analysis, material grade identification. ISO/IEC 17025 aligned. Call +91 81281 23881.",

  keywords: [
    "metal testing lab Ahmedabad",
    "chemical testing laboratory Ahmedabad",
    "spectrometric analysis Ahmedabad",
    "OES testing Gujarat",
    "optical emission spectrometry India",
    "steel testing laboratory Ahmedabad",
    "alloy testing Gujarat",
    "metal composition testing",
    "wet chemical analysis Ahmedabad",
    "carbon sulphur analysis Gujarat",
    "material grade identification",
    "NABL accredited lab Ahmedabad",
    "ISO 17025 metal testing lab",
    "ferrous metal testing Gujarat",
    "non-ferrous metal testing",
    "foundry testing laboratory Ahmedabad",
    "JAKS Metal Lab",
    "jaksmetallab",
    "metal lab Kathwada Ahmedabad",
    "Fortune Industrial Park testing lab",
    "stainless steel testing Gujarat",
    "aluminium alloy testing Ahmedabad",
    "brass copper testing lab",
    "cast iron testing Gujarat",
    "raw material testing India",
    "incoming material inspection Gujarat",
  ],

  authors: [{ name: "JAKS Metal Lab LLP", url: BASE_URL }],
  creator: "JAKS Metal Lab LLP",
  publisher: "JAKS Metal Lab LLP",

  alternates: {
    canonical: BASE_URL,
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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "JAKS Metal Lab LLP",
    title: "JAKS Metal Lab LLP | Metal Testing Laboratory in Ahmedabad",
    description:
      "ISO/IEC 17025 aligned chemical metal testing lab in Ahmedabad. OES spectrometric analysis, wet chemical testing, carbon & sulphur analysis. Trusted by 500+ manufacturers across Gujarat & India. Call +91 81281 23881.",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "JAKS Metal Lab LLP – Chemical Metal Testing Laboratory in Ahmedabad, Gujarat",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "JAKS Metal Lab LLP | Metal Testing Lab Ahmedabad",
    description:
      "Ahmedabad's trusted chemical metal testing laboratory. OES spectrometric analysis, carbon & sulphur testing. ISO/IEC 17025 aligned. Call +91 81281 23881.",
    images: ["/logo.jpeg"],
  },

  category: "Laboratory Services",

  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad, Gujarat",
    "geo.position": "23.043;72.661",
    "ICBM": "23.043, 72.661",
    "og:phone_number": "+918128123881",
    "og:email": "jacksmetallab@gmail.com",
    "og:street-address": "14, Fortune Industrial Park, Kathwada-Singarva Rd",
    "og:locality": "Ahmedabad",
    "og:region": "Gujarat",
    "og:postal-code": "382430",
    "og:country-name": "India",
    "business:contact_data:phone_number": "+918128123881",
    "business:contact_data:email": "jacksmetallab@gmail.com",
    "business:contact_data:website": BASE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/logo.jpeg" type="image/jpeg" />
        <link rel="canonical" href={BASE_URL} />
        <meta name="theme-color" content="#1a2744" />
        <JsonLd />
      </head>
      <body style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}>
        <ThemeProvider>
          <LoadingScreen />
          <ParticleCanvas />
          <Navbar />
          {children}
          <Footer />
          <FloatingContact />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
