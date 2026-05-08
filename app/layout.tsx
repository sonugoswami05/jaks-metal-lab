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

export const metadata: Metadata = {
  title: {
    default: "JAKS Metal Lab LLP | Premium Chemical Metal Testing Laboratory",
    template: "%s | JAKS Metal Lab LLP",
  },
  description:
    "JAKS Metal Lab LLP — ISO/IEC 17025 accredited chemical metal testing laboratory. Spectrometric analysis, wet chemical testing, carbon & sulphur analysis. Trusted by leading manufacturers across India.",
  keywords: [
    "metal testing lab",
    "chemical testing",
    "spectrometer analysis",
    "JAKS Metal Lab",
    "NABL accredited lab",
    "metal composition testing",
    "alloy testing India",
    "OES testing",
    "wet chemical analysis",
    "carbon sulphur analysis",
  ],
  authors: [{ name: "JAKS Metal Lab LLP" }],
  creator: "JAKS Metal Lab LLP",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "JAKS Metal Lab LLP | Premium Chemical Metal Testing",
    description:
      "ISO/IEC 17025 accredited metal testing laboratory delivering precise chemical analysis with cutting-edge spectrometric technology.",
    siteName: "JAKS Metal Lab LLP",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/logo.jpeg" type="image/jpeg" />
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
