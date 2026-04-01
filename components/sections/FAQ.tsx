"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Dáis servicio en toda la provincia de Salamanca?",
    a: "Damos servicio en Salamanca capital y en toda su área metropolitana, incluyendo el cinturón de pueblos y urbanizaciones colindantes. Para otras zonas de la provincia, consúltanos disponibilidad.",
  },
  {
    q: "¿Qué garantía tienen vuestras instalaciones?",
    a: "Trabajamos con materiales de primera calidad que cuentan con sus correspondientes garantías de fabricante. Todas nuestras instalaciones y servicios cumplen estrictamente con la normativa de garantía vigente.",
  },
  {
    q: "¿Cuánto tarda una instalación de césped artificial?",
    a: "El tiempo de ejecución depende directamente de los metros cuadrados y de la preparación previa que necesite el terreno. Siempre planificamos el trabajo para ser lo más ágiles posible y minimizar las molestias.",
  },
  {
    q: "¿Cómo puedo obtener un presupuesto para mi jardín?",
    a: "Solo tienes que contactar con nosotros. Realizamos una valoración de tus necesidades específicas, y te entregamos un presupuesto personalizado sin compromiso.",
  },
  {
    q: "¿Ofrecéis servicios de mantenimiento para comunidades?",
    a: "Sí. Tenemos amplia experiencia en el cuidado de zonas verdes, piscinas y áreas comunes para comunidades de propietarios de Salamanca, adaptándonos a lo que cada finca necesite.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-16 md:py-28 bg-cream px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
                  className={`w-5 h-5 shrink-0 text-brand-green transition-transform duration-300 ${open === idx ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${open === idx ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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
