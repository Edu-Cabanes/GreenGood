import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

const serviciosData = {
  "jardineria-general": {
    title: "Jardinería General en Salamanca",
    tagline: "Mantenimiento integral experto",
    image: "/images/plantar.jpg",
    content: "Ofrecemos un servicio de jardinería profesional adaptado específicamente al clima de la zona de Salamanca. Gestionamos de forma integral el cuidado de tu jardín para asegurar un crecimiento sano y una estética impecable durante todas las estaciones del año.",
    bulletPoints: ["Podas especializadas y de formación", "Mantenimiento de praderas y arbustos", "Gestión de sistemas de riego", "Tratamientos preventivos estacionales"],
  },
  "cesped-artificial": {
    title: "Instalador Especializado Césped Artificial",
    tagline: "El verde perfecto los 365 días",
    image: "/images/instalador-cesped-artificial.png",
    content: "Disfruta de un jardín verde sin las complicaciones del mantenimiento tradicional. Instalamos modelos de césped artificial de alta gama, diseñados para resistir tanto el sol intenso del verano salmantino como las heladas del invierno.",
    bulletPoints: ["Césped realista con alta capacidad de recuperación", "Instalación profesional y detallista", "Importante eficiencia en el consumo de agua", "Superficie segura y limpia para toda la familia"],
  },
  "limpieza-comunes": {
    title: "Limpieza de Zonas Comunes",
    tagline: "Entornos impecables para los tuyos",
    image: "/images/carretilla.jpg",
    content: "Realizamos servicios de limpieza profunda en áreas comunes de urbanizaciones y comunidades de vecinos. Nos encargamos de mantener pasos de carruajes, accesos y recintos exteriores libres de suciedad acumulada empleando métodos eficaces de limpieza.",
    bulletPoints: ["Limpieza técnica de pavimentos y adoquines", "Cuidado de perímetros y cerramientos", "Eliminación de suciedad difícil", "Planes de mantenimiento periódico"],
  },
  "piscinas": {
    title: "Mantenimiento Integral de Piscinas",
    tagline: "Aguas cristalinas y seguras",
    image: "/images/limpiar-piscina.png",
    content: "Nos encargamos de que tu piscina esté siempre lista para el baño. Realizamos el control de los parámetros del agua y la puesta a punto necesaria para cumplir con los estándares de higiene y seguridad exigidos.",
    bulletPoints: ["Control y ajuste de los parámetros del agua", "Puesta a punto y revisión pre-temporada", "Limpieza técnica e invernaje", "Mantenimiento preventivo de instalaciones"],
  },
  "servicios-comunidades": {
    title: "Servicios Integrados para Comunidades",
    tagline: "Gestión centralizada para tu finca",
    image: "/images/servicios-comunidades.png",
    content: "Simplificamos la conservación de las comunidades de vecinos integrando la jardinería y el cuidado de la piscina bajo una misma gestión. Un servicio profesional que garantiza el buen estado constante de todas las zonas verdes y comunes.",
    bulletPoints: ["Gestión unificada de zonas exteriores", "Comunicación fluida con la administración", "Planes de actuación eficientes", "Mantenimiento profesional continuo"],
  },
  "urbanizaciones": {
    title: "Proyectos en Urbanizaciones y Residencias",
    tagline: "Cuidado paisajístico a gran escala",
    image: "/images/despues-jardin-cesped-artificial.jpg",
    content: "Disponemos de la capacidad técnica necesaria para gestionar grandes extensiones de terreno, recintos residenciales y fincas de gran tamaño. Realizamos labores de desbroce, limpieza y mejora paisajística con resultados profesionales.",
    bulletPoints: ["Control de vegetación en grandes áreas", "Mantenimiento de zonas perimetrales", "Gestión técnica de residuos vegetales", "Asesoramiento paisajístico a medida"],
  },
};

const serviciosMeta: Record<string, { metaTitle: string; metaDescription: string }> = {
  "jardineria-general": {
    metaTitle: "Jardinería General en Salamanca",
    metaDescription: "Servicio profesional de jardinería y mantenimiento de jardines en Salamanca. Podas, riego y tratamientos. Llama al 615 667 820.",
  },
  "cesped-artificial": {
    metaTitle: "Instalación Césped Artificial Salamanca",
    metaDescription: "Instaladores especializados en césped artificial en Salamanca. Presupuesto sin compromiso en 24h. Llámanos: 615 667 820.",
  },
  "limpieza-comunes": {
    metaTitle: "Limpieza Zonas Comunes Salamanca",
    metaDescription: "Limpieza profesional de zonas comunes en urbanizaciones y comunidades en Salamanca. Planes de mantenimiento periódico.",
  },
  "piscinas": {
    metaTitle: "Mantenimiento de Piscinas en Salamanca",
    metaDescription: "Mantenimiento integral de piscinas en Salamanca: control de agua, limpieza técnica e invernaje. Presupuesto gratis.",
  },
  "servicios-comunidades": {
    metaTitle: "Servicios para Comunidades en Salamanca",
    metaDescription: "Gestión integral de jardinería y piscinas para comunidades de vecinos en Salamanca. Contacta al 615 667 820.",
  },
  "urbanizaciones": {
    metaTitle: "Jardinería para Urbanizaciones en Salamanca",
    metaDescription: "Mantenimiento paisajístico a gran escala para urbanizaciones y residencias en Salamanca y alrededores.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = serviciosMeta[slug];
  if (!meta) return {};
  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
  };
}

// Next.js 15: params se debe resolver antes de usar si se espera de forma asíncrona, 
// o bien manejar como sync pero en App Router params es devuelto como Promise en layouts/pages dinámicas en ciertas versiones o contextos.
export default async function ServicioPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const data = serviciosData[slug as keyof typeof serviciosData];

  if (!data) {
    notFound();
  }

  return (
    <main className="bg-cream min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/#servicios" className="inline-flex items-center gap-2 text-brand-green font-bold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Servicios
        </Link>

        <header className="mb-12">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-4">
            {data.tagline}
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-anthracite uppercase tracking-tighter leading-none mb-8">
            {data.title.split(' ').map((word, i) => (
              i % 2 !== 0 ? <span key={i} className="text-brand-green"> {word} </span> : <span key={i}>{word} </span>
            ))}
          </h1>
          <div className="w-24 h-2 bg-brand-green rounded-full mb-10" />
          {/* Imagen hero del servicio */}
          <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-anthracite/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 bg-brand-green text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              {data.tagline}
            </div>
          </div>
        </header>

        <article className="prose prose-lg prose-slate max-w-none text-anthracite leading-relaxed mb-16">
          <p className="text-xl md:text-2xl font-medium text-slate-600 mb-8">
            {data.content}
          </p>

          <div className="bg-white rounded-3xl p-8 border border-brand-green/10 shadow-xl overflow-hidden relative">
            {/* Decals geométricos para dar aire técnico */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-bl-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-anthracite/5 rounded-tr-[80px] pointer-events-none" />

            <h3 className="text-xl font-black text-brand-green uppercase tracking-widest mb-6 relative z-10">
              ¿Qué incluye este servicio?
            </h3>
            <ul className="space-y-4 relative z-10">
              {data.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3 font-semibold">
                  <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand-green/10 text-brand-green text-sm">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* CTA Section */}
        <div className="mt-16 bg-brand-green rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Decoración sutil */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 border-8 border-white rounded-full" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 border-8 border-white rounded-full" />
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter relative z-10">
            ¿Listo para dar el paso?
          </h3>
          <p className="text-green-100 mb-10 text-lg font-medium max-w-xl mx-auto relative z-10">
            Presupuesto personalizado en menos de 24 horas. Sin compromiso.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-3 bg-white text-brand-green font-black px-10 py-5 rounded-2xl hover:bg-cream hover:scale-105 transition-all duration-300 text-sm uppercase tracking-widest shadow-xl relative z-10"
          >
            Preguntar por nuestro servicio de puesta a punto
          </Link>
        </div>
      </div>
    </main>
  );
}
