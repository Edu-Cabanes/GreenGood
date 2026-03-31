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
  metadataBase: new URL("https://greengood-nu.vercel.app"),
  title: {
    default: "GreenGood | Paisajismo y Jardinería en Salamanca",
    template: "%s | GreenGood",
  },
  description:
    "Especialistas en césped artificial, mantenimiento integral y piscinas en Salamanca y alrededores. Contacta al 615 667 820.",
  keywords: [
    "jardinería Salamanca",
    "césped artificial Salamanca",
    "mantenimiento jardines Salamanca",
    "piscinas comunidades Salamanca",
  ],
  openGraph: {
    title: "GreenGood | Paisajismo y Jardinería en Salamanca",
    description:
      "Especialistas en césped artificial, mantenimiento integral y piscinas. Contacta al 615 667 820 para tu presupuesto.",
    url: "https://greengood-nu.vercel.app",
    siteName: "GreenGood",
    images: [
      {
        url: "https://greengood-nu.vercel.app/images/share.PNG",
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
      "Especialistas en césped artificial, mantenimiento integral y piscinas en Salamanca.",
    images: ["https://greengood-nu.vercel.app/images/share.PNG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LandscapingBusiness',
    name: 'GreenGood',
    image: 'https://jardineriagreengood.es/images/share.PNG',
    '@id': 'https://jardineriagreengood.es',
    url: 'https://jardineriagreengood.es',
    telephone: '+34615667820',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'CALLE SOL',
      addressLocality: 'PELABRAVO',
      addressRegion: 'SALAMANCA',
      postalCode: '37181',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.9442,
      longitude: -5.5801,
    },
    areaServed: [
      { '@type': 'City', name: 'Salamanca' },
      { '@type': 'City', name: 'Santa Marta de Tormes' },
      { '@type': 'City', name: 'Carbajosa de la Sagrada' },
      { '@type': 'City', name: 'Villares de la Reina' },
      { '@type': 'City', name: 'Cabrerizos' },
      { '@type': 'City', name: 'Pelabravo' },
      { '@type': 'City', name: 'Aldeatejada' },
    ],
    sameAs: ['https://jardineriagreengood.es'],
  };
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-anthracite font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

