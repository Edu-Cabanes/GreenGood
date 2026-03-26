"use client";

import { Leaf, Wrench, Waves, Building2, Trees, Trash2 } from "lucide-react";

const services = [
  {
    icon: Trees,
    title: "Jardinería General",
    desc: "Mantenimiento integral de praderas, podas especializadas, control de plagas, abonado profesional y diseño de sistemas de riego eficientes.",
    benefit: "Jardines siempre impecables",
  },
  {
    icon: Leaf,
    title: "Césped Artificial",
    desc: "Venta e instalación con materiales de alta gama certificados. El verde perfecto durante todo el año sin necesidad de riego ni siega constante.",
    benefit: "Sin mantenimiento diario",
  },
  {
    icon: Trash2,
    title: "Limpieza de Zonas Comunes",
    desc: "Servicio de limpieza profesional para garajes, portales, accesos y zonas exteriores en urbanizaciones y edificios residenciales.",
    benefit: "Espacios seguros y limpios",
  },
  {
    icon: Waves,
    title: "Mantenimiento de Piscinas",
    desc: "Limpieza profunda, rejuntado, análisis de aguas y puesta a punto integral de piscinas. Gestión técnica durante la temporada de baño.",
    benefit: "Aguas cristalinas GARANTIZADAS",
  },
  {
    icon: Wrench,
    title: "Servicios a Comunidades",
    desc: "Soluciones completas para comunidades de propietarios. Unificamos cuidado de jardines, piscinas y limpiezas en un solo servicio de confianza.",
    benefit: "Comodidad sin intermediarios",
  },
  {
    icon: Building2,
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
            return (
              <div
                key={idx}
                className="group relative p-10 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-brand-green/5 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background decorator */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-green/5 rounded-full group-hover:bg-brand-green/10 transition-colors duration-300" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors">
                    <Icon className="w-7 h-7 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-black mb-3 text-anthracite uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-6">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-widest">
                    <div className="w-4 h-0.5 bg-brand-green rounded-full" />
                    {service.benefit}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
