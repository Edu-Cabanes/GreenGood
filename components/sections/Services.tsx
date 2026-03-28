"use client";

import { Leaf, Wrench, Waves, Building2, Trees, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Leaf,
    slug: "cesped-artificial",
    title: "Césped Artificial",
    desc: "Venta e instalación con materiales de alta gama certificados. El verde perfecto durante todo el año sin necesidad de riego ni siega constante.",
    benefit: "Sin mantenimiento diario",
  },
  {
    icon: Trees,
    slug: "jardineria-general",
    title: "Jardinería General",
    desc: "Mantenimiento integral de praderas, podas especializadas, control de plagas, abonado profesional y diseño de sistemas de riego eficientes.",
    benefit: "Jardines siempre impecables",
  },
  {
    icon: Trash2,
    slug: "limpieza-comunes",
    title: "Limpieza de Zonas Comunes",
    desc: "Servicio de limpieza profesional para garajes, portales, accesos y zonas exteriores en urbanizaciones y edificios residenciales.",
    benefit: "Espacios seguros y limpios",
  },
  {
    icon: Waves,
    slug: "piscinas",
    title: "Mantenimiento de Piscinas",
    desc: "Limpieza profunda, rejuntado, análisis de aguas y puesta a punto integral de piscinas. Gestión técnica durante la temporada de baño.",
    benefit: "Aguas cristalinas GARANTIZADAS",
  },
  {
    icon: Wrench,
    slug: "servicios-comunidades",
    title: "Servicios a Comunidades",
    desc: "Soluciones completas para comunidades de propietarios. Unificamos cuidado de jardines, piscinas y limpiezas en un solo servicio de confianza.",
    benefit: "Comodidad sin intermediarios",
  },
  {
    icon: Building2,
    slug: "urbanizaciones",
    title: "Urbanizaciones y Residencias",
    desc: "Planes a gran escala para urbanizaciones completas y residencias. Mantenimiento del paisaje y vialidad con maquinaria especializada.",
    benefit: "Cobertura total 360º",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 bg-cream px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Lo que hacemos
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-none">
            Servicios <span className="text-brand-green">Integrales</span>
          </h2>
          <div className="w-16 h-1 bg-brand-green mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isFeatured = idx === 0;

            return (
              <Link
                key={idx}
                href={`/servicios/${service.slug}`}
                className={`group relative p-10 bg-white rounded-2xl transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer ${
                  isFeatured 
                    ? "md:col-span-2 shadow-xl border-2 border-brand-green hover:-translate-y-1" 
                    : "shadow-sm border border-transparent hover:border-brand-green/20 hover:shadow-2xl hover:-translate-y-1"
                }`}
              >
                {/* Background decorator */}
                <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full transition-colors duration-300 ${
                  isFeatured ? 'bg-brand-green/10 group-hover:bg-brand-green/20' : 'bg-brand-green/5 group-hover:bg-brand-green/10'
                }`} />

                {isFeatured && (
                  <div className="absolute top-6 right-6 bg-brand-green text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    Servicio Estrella
                  </div>
                )}

                <div className="relative z-10 grow">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                    isFeatured ? 'bg-brand-green text-white' : 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green/20'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className={`text-xl font-black mb-3 text-anthracite uppercase tracking-tight transition-colors ${
                    !isFeatured && 'group-hover:text-brand-green'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-6 max-w-md">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-widest">
                      <div className="w-4 h-0.5 bg-brand-green rounded-full" />
                      {service.benefit}
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
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
