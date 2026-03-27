import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const serviciosData = {
  "jardineria-general": {
    title: "Jardinería General en Salamanca",
    tagline: "Mantenimiento integral experto",
    image: "/images/plantar.jpg",
    content: "Ofrecemos un servicio de jardinería general adaptado al clima de Castilla y León. Desde abonado estacional hasta podas de limpieza y control de plagas, gestionamos cada aspecto de tu pradera para asegurar un crecimiento sano todo el año.",
    bulletPoints: ["Podas formativas y de limpieza", "Control fitosanitario integral", "Diseño de sistemas de riego eficientes", "Abonado y resiembra estacional"],
  },
  "cesped-artificial": {
    title: "Instalador Especializado Césped Artificial",
    tagline: "El verde perfecto los 365 días",
    image: "/images/cesped-artificial.png",
    content: "Olvídate de las malas hierbas y el gasto excesivo de agua. Instalamos césped artificial de primera calidad con garantías mecánicas de más de 8 años. Un producto resiliente al duro sol del verano salmantino y a las heladas invernales.",
    bulletPoints: ["Césped realista con tecnología de recuperación", "Instalación profesional certificada", "Ahorro de hasta un 80% en factura de agua", "Seguro para mascotas y niños"],
  },
  "limpieza-comunes": {
    title: "Limpieza de Zonas Comunes",
    tagline: "Entornos impecables para los tuyos",
    image: "/images/Carretilla.jpg",
    content: "Realizamos limpiezas periódicas y profundas para garajes, pasos de carruajes, piscinas infantiles y recintos comunes de urbanizaciones cerradas. Empleamos maquinaria hidro-limpiadora para liberar de moho y suciedad todos los pavimentos exteriores.",
    bulletPoints: ["Hidrolimpieza de pavimentos y adoquines", "Vaciado y limpieza de arquetas", "Eliminación de manchas difíciles", "Mantenimiento preventivo mensual"],
  },
  "piscinas": {
    title: "Mantenimiento Integral de Piscinas",
    tagline: "Aguas cristalinas, 100% legales",
    image: "/images/piscinas.png",
    content: "Llevamos un control exhaustivo del PH, cloro y salinidad de su piscina comunitaria o privada. Apertura, revisión de maquinaria, cambio de arenas o cristal, rejuntado e invernaje. Todo acorde a la normativa vigente de Sanidad en Castilla y León.",
    bulletPoints: ["Análisis diario de la calidad del agua", "Rejuntado y limpieza del vaso", "Mantenimiento del cuarto de máquinas", "Servicio integral de invernaje"],
  },
  "servicios-comunidades": {
    title: "Servicios Integrados para Comunidades",
    tagline: "Un solo proveedor para toda tu finca",
    image: "/images/pala.jpg",
    content: "Simplificamos la gestión de las comunidades de vecinos integrando bajo un solo contrato la jardinería, la conserjería básica (limpiezas perimetrales) y el cuidado de la piscina. Transparencia, reportes mensuales y actuación urgente asegurada.",
    bulletPoints: ["Paquetes con tarifa plana anual", "Contacto directo con el administrador", "Sustituciones en bajas o vacaciones 100% garantizadas", "Servicio urgente 24h para averías de riego"],
  },
  "urbanizaciones": {
    title: "Proyectos en Urbanizaciones y Residencias",
    tagline: "Cuidado paisajístico a gran escala",
    image: "/images/despues-jardin-cesped-artificial.jpg",
    content: "Contamos con la maquinaria pesada, plataformas elevadoras y tractores para enfrentarnos a grandes extensiones de terreno, fincas rústicas o recintos residenciales exclusivos. Desbroces masivos, talas controladas y planes de viabilidad a largo plazo.",
    bulletPoints: ["Desbroces mecanizados de fincas", "Mantenimiento de perimetrales y cortafuegos", "Talas excepcionales y gestión de residuos verdes", "Asesoramiento paisajístico profesional"],
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};


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
      </div>
    </main>
  );
}
