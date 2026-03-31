import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import type { Metadata } from "next";

const locationData = {
  "salamanca": {
    name: "Salamanca",
    title: "Instalación de Césped Artificial en Salamanca Capital",
    description: "Somos especialistas en la instalación de césped artificial en Salamanca ciudad. Convertimos tu patio, terraza o jardín en un espacio verde los 365 días del año sin mantenimiento.",
  },
  "santa-marta-de-tormes": {
    name: "Santa Marta de Tormes",
    title: "Instalación de Césped Artificial en Santa Marta de Tormes",
    description: "Servicio profesional de instalación de césped artificial en chalets y urbanizaciones de Santa Marta de Tormes. Pide tu presupuesto personalizado y gratuito sin compromiso.",
  },
  "carbajosa-de-la-sagrada": {
    name: "Carbajosa de la Sagrada",
    title: "Césped Artificial de Alta Gama en Carbajosa de la Sagrada",
    description: "Diseño e instalación de jardines con césped artificial en Carbajosa. Modelos premium con tacto natural, gran drenaje y alta resistencia al clima extremo.",
  },
  "villares-de-la-reina": {
    name: "Villares de la Reina",
    title: "Expertos en Césped Artificial en Villares de la Reina",
    description: "Disfruta del mejor césped artificial en tu hogar en Villares de la Reina. Ahorra agua y gana en tranquilidad con nuestra instalación profesional garantizada.",
  },
  "cabrerizos": {
    name: "Cabrerizos",
    title: "Césped Artificial y Paisajismo en Cabrerizos",
    description: "Soluciones de césped artificial premium en Cabrerizos. Opciones ideales para familias, piscinas y zonas de paso frecuente. Máxima suavidad y recuperación.",
  },
  "pelabravo": {
    name: "Pelabravo",
    title: "Césped Artificial Instalado en Pelabravo",
    description: "Empresa local de jardinería e instalación de césped artificial en Pelabravo. Cercanía, garantía y los mejores materiales del mercado para tu jardín.",
  },
  "aldeatejada": {
    name: "Aldeatejada",
    title: "Instaladores de Césped Artificial en Aldeatejada",
    description: "Transformamos tu parcela en Aldeatejada con césped artificial realista. Presupuestos sin compromiso y ejecución por expertos jardineros locales.",
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = locationData[slug as keyof typeof locationData];
  if (!data) return {};
  
  return {
    title: `${data.title} | GreenGood`,
    description: data.description,
  };
}

export default async function LocationLandingPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const data = locationData[slug as keyof typeof locationData];

  if (!data) {
    notFound();
  }

  return (
    <main className="bg-cream min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/zona-cobertura" className="inline-flex items-center gap-2 text-brand-green font-bold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Zonas
        </Link>

        {/* Hero Section */}
        <header className="mb-14">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Servicio Local en {data.name}
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-tight mb-8">
            {data.title}
          </h1>
          <div className="w-24 h-2 bg-brand-green rounded-full mb-10" />
          
          <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/instalador-cesped-artificial.png"
              alt={`Césped Artificial en ${data.name}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-anthracite/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white font-black text-xl lg:text-3xl drop-shadow-md max-w-lg">
              El verde perfecto en {data.name} los 365 días del año.
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-lg prose-slate max-w-none text-anthracite leading-relaxed mb-16">
          <p className="text-xl md:text-2xl font-medium text-slate-700 mb-8 border-l-4 border-brand-green pl-6">
            {data.description}
          </p>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-brand-green/10 mb-12">
            <h2 className="text-2xl font-black text-anthracite mb-4 tracking-tight">
              ¿Por qué instalar césped artificial en {data.name}?
            </h2>
            <p className="mb-4">
              El clima de la meseta, con contrastes de temperatura muy bruscos entre verano e invierno, dificulta en gran medida mantener una pradera de césped natural impecable. Además el consumo de agua supone un gasto notable que aumenta las cuotas de comunidades y domicilios particulares.
            </p>
            <p className="mb-4">
              En GreenGood trabajamos con <strong>pavimentos sintéticos de alta gama con gran memoria elástica</strong>, capaces de recuperar la verticalidad de sus fibras tras ser pisados y de evacuar enormes cantidades de agua de lluvia gracias a su backing microperforado de poliuretano.
            </p>
            <p>
              Y lo más importante, somos una empresa local. Conocemos las características del suelo de <strong>{data.name}</strong>, lo que nos permite preparar una base de drenaje óptima con los áridos adecuados (zahorras y gravillas) para que el césped se mantenga estable y sin charcos durante muchos años.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-anthracite text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold uppercase tracking-widest text-accent-green mb-4">Ventajas </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">✓ Cero gasto en riego</li>
                <li className="flex items-center gap-3">✓ Libre de siegas y podas</li>
                <li className="flex items-center gap-3">✓ No necesita abonos químicos</li>
                <li className="flex items-center gap-3">✓ Verde todo el año</li>
              </ul>
            </div>
            <div className="border border-brand-green/20 bg-cream p-8 rounded-3xl shadow-sm">
               <h3 className="text-xl font-bold uppercase tracking-widest text-brand-green mb-4">La instalación</h3>
               <ul className="space-y-3 font-medium text-slate-700">
                <li className="flex items-center gap-3">1. Vaciado y preparación del terreno</li>
                <li className="flex items-center gap-3">2. Base de áridos para drenaje</li>
                <li className="flex items-center gap-3">3. Malla antihierbas transpirable</li>
                <li className="flex items-center gap-3">4. Sellado de juntas invisible</li>
              </ul>
            </div>
          </div>
        </article>

        {/* CTA */}
        <div className="bg-brand-green rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter relative z-10">
            Pide Presupuesto en {data.name}
          </h3>
          <p className="text-green-100 mb-10 text-xl max-w-2xl mx-auto relative z-10">
            Nuestros técnicos se desplazarán a tu parcela en {data.name} sin coste para asesorarte y medir.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a
              href="https://wa.me/34615667820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-green font-black px-10 py-5 rounded-2xl hover:scale-105 transition-all uppercase tracking-widest shadow-xl"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
