"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Instaláis en toda la provincia de Salamanca?",
    a: "Sí. Cubrimos toda la provincia de Salamanca sin recargo por desplazamiento, incluyendo pueblos y urbanizaciones. También operamos en zonas de Castilla y León limítrofes como Zamora, Ávila y Valladolid.",
  },
  {
    q: "¿Qué garantía tiene el césped artificial que instaláis?",
    a: "Trabajamos con materiales certificados de alta gama con garantías de fabricante de hasta 8 años. Además, ofrecemos garantía propia de instalación de 2 años.",
  },
  {
    q: "¿Cuánto tarda una instalación de césped artificial?",
    a: "Un jardín residencial normal (50-100 m²) se instala en 1-2 días de trabajo. Proyectos más grandes se presupuestan con planificación de fases para minimizar molestias.",
  },
  {
    q: "¿Hacéis presupuestos sin compromiso?",
    a: "Absolutamente. Visitamos tu jardín, tomamos medidas y te enviamos el presupuesto detallado en menos de 24 horas, sin ningún coste ni obligación de contratar.",
  },
  {
    q: "¿Trabajáis con comunidades de propietarios?",
    a: "Sí. Gestionamos comunidades de cualquier tamaño: piscinas comunitarias, zonas verdes, jardines y riego automático. Disponemos de contratos de mantenimiento adaptados.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 bg-cream px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Resolvemos tus dudas
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-none">
            Preguntas <span className="text-brand-green">frecuentes</span>
          </h2>
          <div className="w-16 h-1 bg-brand-green mx-auto rounded-full mt-6" />
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-brand-green/10 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-anthracite hover:text-brand-green transition-colors group"
                aria-expanded={open === idx}
              >
                <span className="pr-4 text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-brand-green transition-transform duration-300 ${
                    open === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open === idx ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-brand-green/5 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
