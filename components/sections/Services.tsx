"use client";

import { ArrowRight, Leaf, Trees, Waves, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Leaf,
    slug: "cesped-artificial",
    title: "Césped Artificial",
    desc: "Venta e instalación con materiales de alta gama certificados. Diseñamos espacios duraderos, suaves al tacto y siempre perfectos, sin necesidad de riego ni siega.",
    benefit: "Sin mantenimiento diario",
    image: "/images/cesped-artificial-rollo.png",
  },
  {
    icon: Trees,
    slug: "jardineria-general",
    title: "Jardinería General",
    desc: "Mantenimiento integral de praderas, podas especializadas, control de plagas, abonado profesional y diseño paisajístico.",
    benefit: "Jardines siempre impecables",
    image: "/images/jardineria-general.png",
  },
  {
    icon: Waves,
    slug: "piscinas",
    title: "Mantenimiento de Piscinas",
    desc: "Limpieza profunda, análisis de aguas biológico y puesta a punto integral de instalaciones para disfrutar sin preocupaciones.",
    benefit: "Aguas cristalinas óptimas",
    image: "/images/mantenimiento-piscina.png",
  },
  {
    icon: Users,
    slug: "servicios-comunidades",
    title: "Servicios a Comunidades",
    desc: "Conservación de grandes áreas. Unificamos cuidado de jardines, piscinas y limpieza viaria en un solo servicio unificado y fiable.",
    benefit: "Comodidad sin intermediarios",
    image: "/images/servicios-grandes-areas.png",
  },
];

export default function Services() {
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section id="servicios" className="py-24 bg-cream px-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Especialidades
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-anthracite tracking-tight leading-none">
            Nuestros <span className="text-brand-green italic">Servicios</span>
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mt-6" />
        </div>

        {/* Servicio Estrella - Layout Premium */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl bg-white flex flex-col md:flex-row group border border-slate-100">
          <div className="w-full md:w-1/2 h-80 md:h-auto relative overflow-hidden">
            <Image
              src={featured.image}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-800 ease-out"
              alt={featured.title}
            />
            <div className="absolute inset-0 bg-linear-to-r from-emerald-950/40 to-transparent mix-blend-multiply" />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-brand-green text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-md">
              Servicio Estrella
            </div>
          </div>

          <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-16 flex flex-col justify-center bg-emerald-950 text-white">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
              <featured.icon className="w-8 h-8 text-accent-green" />
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
              {featured.title}
            </h3>
            <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed font-light">
              {featured.desc}
            </p>

            <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href={`/servicios/${featured.slug}`}
                className="bg-white text-emerald-950 font-bold shadow-xl shadow-black/20 hover:shadow-2xl hover:bg-cream hover:-translate-y-1 px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                Más información <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3 text-sm font-bold text-white/90 uppercase tracking-widest">
                <div className="w-8 h-px bg-white/50" />
                {featured.benefit}
              </div>
            </div>
          </div>
        </div>

        {/* Resto de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rest.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Link
                key={idx}
                href={`/servicios/${service.slug}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:border-brand-green/30 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={service.image}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-800 ease-out"
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-emerald-950/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-serif text-white font-bold">{service.title}</h3>
                  </div>
                </div>

                <div className="p-8 grow flex flex-col">
                  <p className="text-slate-600 leading-relaxed text-sm mb-8">
                    {service.desc}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-bold text-brand-green tracking-widest uppercase">
                      {service.benefit}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-colors text-slate-400">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
