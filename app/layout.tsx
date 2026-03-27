import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreenGood | Paisajismo y Jardinería en Salamanca",
  description:
    "Tu jardín en buenas manos. Especialistas en césped artificial, mantenimiento integral y piscinas en Salamanca y Castilla y León. Presupuesto en 24h.",
  keywords: [
    "jardinería Salamanca",
    "césped artificial Salamanca",
    "mantenimiento jardines Castilla y León",
    "piscinas comunidades Salamanca",
  ],
  openGraph: {
    title: "GreenGood | Paisajismo y Jardinería en Salamanca",
    description:
      "Tu jardín en buenas manos. Especialistas en césped artificial, mantenimiento integral y piscinas en Salamanca y Castilla y León.",
    url: "https://greengood.es",
    siteName: "GreenGood",
    images: [
      {
        url: "/images/jardineria.png.webp",
        width: 800,
        height: 800,
        alt: "GreenGood - Paisajismo y Jardinería en Salamanca",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenGood | Paisajismo y Jardinería en Salamanca",
    description:
      "Tu jardín en buenas manos. Especialistas en césped artificial, mantenimiento integral y piscinas en Salamanca.",
    images: ["/images/jardineria.png.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-anthracite font-sans antialiased">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

