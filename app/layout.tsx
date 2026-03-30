import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreenGood | Paisajismo y Jardinería en Salamanca",
  description:
    "Tu jardín en buenas manos. Especialistas en césped artificial, mantenimiento integral y piscinas en Salamanca y alrededores.",
  keywords: [
    "jardinería Salamanca",
    "césped artificial Salamanca",
    "mantenimiento jardines Salamanca",
    "piscinas comunidades Salamanca",
  ],
  openGraph: {
    title: "GreenGood | Paisajismo y Jardinería en Salamanca",
    description:
      "Tu jardín en buenas manos. Especialistas en césped artificial, mantenimiento integral y piscinas en Salamanca y alrededores.",
    url: "https://greengood.es",
    siteName: "GreenGood",
    images: [
      {
        url: "/images/share.PNG",
        width: 1200,
        height: 630,
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
    images: ["/images/share.PNG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-anthracite font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

