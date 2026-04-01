import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Zona de Cobertura Jardinería en Salamanca | GreenGood",
  description: "Servicios de jardinería, césped artificial y piscinas en Salamanca capital, Santa Marta, Carbajosa, Villares, Cabrerizos, Pelabravo y más.",
};

const municipalities = [
  {
    name: "Salamanca Capital",
    slug: "salamanca",
    desc: "Servicio integral de jardinería, mantenimientos y diseño de exteriores en todos los barrios y zonas residenciales de Salamanca ciudad.",
  },
  {
    name: "Santa Marta de Tormes",
    slug: "santa-marta-de-tormes",
    desc: "Instalación de césped artificial y mantenimiento continuo para chalets y comunidades de propietarios en Santa Marta y urbanizaciones colindantes.",
  },
  {
    name: "Carbajosa de la Sagrada",
    slug: "carbajosa-de-la-sagrada",
    desc: "Especialistas en control de plagas, poda de setos perimetrales y limpieza de piscinas en las zonas residenciales de Carbajosa.",
  },
  {
    name: "Villares de la Reina",
    slug: "villares-de-la-reina",
    desc: "Mantenimiento paisajístico a gran escala, desbroce de parcelas y cuidado de zonas comunes en Villares de la Reina.",
  },
  {
    name: "Cabrerizos",
    slug: "cabrerizos",
    desc: "Diseño de jardines adaptados al entorno, sistemas de riego automático eficientes y tratamientos preventivos estacionales en Cabrerizos.",
  },
  {
    name: "Pelabravo",
    slug: "pelabravo",
    desc: "Nuestra sede. Intervenciones rápidas, puestas a punto de jardines e invernaje de piscinas con la cercanía de ser tus vecinos.",
  },
  {
    name: "Aldeatejada",
    slug: "aldeatejada",
    desc: "Parcelas amplias de nueva construcción transformadas con césped artificial de alta gama y protección UV reforzada.",
  },
  {
    name: "Calvarrasa de Abajo",
    slug: "calvarrasa-de-abajo",
    desc: "Fincas rústicas y parcelas con diseños mixtos de césped artificial y grava decorativa para optimizar presupuesto y resultados.",
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
             Nos desplazamos por toda la provincia de Salamanca para ofrecerte un servicio de jardinería cercano, rápido y profesional.
          </p>
          <div className="w-24 h-2 bg-brand-green rounded-full mt-10 mx-auto md:mx-0" />
        </header>

        {/* Grid de Municipios */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {municipalities.map((mun) => (
            <Link
              key={mun.slug}
              href={`/cesped-artificial-en/${mun.slug}`}
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-green/10 hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 group block"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-anthracite mb-3 group-hover:text-brand-green transition-colors">
                    {mun.name}
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    {mun.desc}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors text-slate-400 mt-1">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA General */}
        <div className="bg-anthracite rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter relative z-10">
            ¿Tu municipio no está en la lista?
          </h3>
          <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto relative z-10">
            Tranquilo. También realizamos obras e instalaciones de césped artificial en localidades más alejadas de la provincia bajo presupuesto. Consúltanos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a
              href="https://wa.me/34615667820?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20disponibilidad%20para%20mi%20zona."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-brand-green font-black px-10 py-5 rounded-2xl hover:bg-cream hover:scale-105 transition-all duration-300 text-sm uppercase tracking-widest shadow-xl"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar
            </a>
            <a
              href="tel:+34615667820"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-transparent border-2 border-white text-white font-black px-10 py-5 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300 text-sm uppercase tracking-widest"
            >
              615 667 820
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
