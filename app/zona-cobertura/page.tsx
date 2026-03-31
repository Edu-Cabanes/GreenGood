import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import React from "react";

export const metadata: Metadata = {
  title: "Zona de Cobertura Jardinería en Salamanca | GreenGood",
  description: "Servicios de jardinería, césped artificial y piscinas en Salamanca capital, Santa Marta, Carbajosa, Villares, Cabrerizos y Pelabravo.",
};

const municipalities = [
  {
    name: "Salamanca Capital",
    desc: "Servicio integral de jardinería, mantenimientos y diseño de exteriores en todos los barrios y zonas residenciales de Salamanca ciudad.",
  },
  {
    name: "Santa Marta de Tormes",
    desc: "Instalación de césped artificial y mantenimiento continuo para chalets y comunidades de propietarios en Santa Marta y urbanizaciones colindantes.",
  },
  {
    name: "Carbajosa de la Sagrada",
    desc: "Especialistas en control de plagas, poda de setos perimetrales y limpieza de piscinas en las zonas residenciales de Carbajosa.",
  },
  {
    name: "Villares de la Reina",
    desc: "Mantenimiento paisajístico a gran escala, desbroce de parcelas y cuidado de zonas comunes en Villares de la Reina.",
  },
  {
    name: "Cabrerizos",
    desc: "Diseño de jardines adaptados al entorno, sistemas de riego automático eficientes y tratamientos preventivos estacionales en Cabrerizos.",
  },
  {
    name: "Pelabravo y Aldeatejada",
    desc: "Intervenciones rápidas, puestas a punto de jardines abandonados e invernaje de piscinas en toda la zona sur y este del área metropolitana.",
  },
];

export default function ZonaCoberturaPage() {
  return (
    <main className="bg-cream min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-green font-bold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Inicio
        </Link>

        {/* Header */}
        <header className="mb-14 text-center md:text-left">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center justify-center md:justify-start gap-2">
            <MapPin className="w-5 h-5" />
            Dónde trabajamos
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-anthracite uppercase tracking-tighter leading-none mb-6">
            Zona de <span className="text-brand-green">Cobertura</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
             Nos desplazamos por toda la provincia de Salamanca para ofrecerte un servicio de jardinería cercano, rápido y profesional. Sin costes ocultos por desplazamiento en el área metropolitana.
          </p>
          <div className="w-24 h-2 bg-brand-green rounded-full mt-10 mx-auto md:mx-0" />
        </header>

        {/* Grid de Municipios */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {municipalities.map((mun, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-green/10 hover:shadow-xl transition-all duration-300 group">
              <h2 className="text-2xl font-black text-anthracite mb-3 group-hover:text-brand-green transition-colors">
                {mun.name}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {mun.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA General */}
        <div className="bg-auth-gradient-bg bg-anthracite rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter relative z-10">
            ¿Tu municipio no está en la lista?
          </h3>
          <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto relative z-10">
            Tranquilo. También realizamos obras e instalaciones de césped artificial en localidades más alejadas de la provincia bajo presupuesto. Consúltanos.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-3 bg-brand-green text-white font-black px-10 py-5 rounded-2xl hover:bg-green-500 hover:scale-105 transition-all duration-300 text-sm uppercase tracking-widest shadow-xl relative z-10"
          >
            Consultar disponibilidad
          </Link>
        </div>
      </div>
    </main>
  );
}
