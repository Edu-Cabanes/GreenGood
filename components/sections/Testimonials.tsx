const testimonials = [
  {
    name: "Carlos R.",
    location: "Salamanca capital",
    stars: 5,
    text: "Instalaron el césped artificial en nuestro jardín en dos días. La calidad es excelente y la limpieza después del trabajo fue impecable. Llevamos ya un año sin preocuparnos del mantenimiento.",
    service: "Césped Artificial",
  },
  {
    name: "María T.",
    location: "Urbanización Santa Marta",
    stars: 5,
    text: "Gestionan el mantenimiento de toda la comunidad y no podríamos estar más satisfechos. Puntuales, profesionales y siempre disponibles. Los precios son súper competitivos.",
    service: "Mantenimiento Comunidad",
  },
  {
    name: "José A.",
    location: "Peñaranda de Bracamonte",
    stars: 5,
    text: "Nos abrieron la piscina para el verano en perfectas condiciones y a tiempo. Muy buena comunicación desde el primer contacto. Totalmente recomendables.",
    service: "Piscinas",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-amber-400 text-amber-400"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-28 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Lo que dicen nuestros clientes
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-none">
            Ellos ya <span className="text-brand-green">confían en nosotros</span>
          </h2>
          <div className="w-16 h-1 bg-brand-green mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-cream rounded-2xl p-8 border border-brand-green/5 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote mark */}
              <div className="text-brand-green text-5xl font-serif leading-none mb-2 opacity-40 select-none">
                "
              </div>
              <StarRating count={t.stars} />
              <p className="text-anthracite leading-relaxed text-sm mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between border-t border-brand-green/10 pt-4">
                <div>
                  <div className="font-bold text-anthracite text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.location}</div>
                </div>
                <span className="bg-brand-green/10 text-brand-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
