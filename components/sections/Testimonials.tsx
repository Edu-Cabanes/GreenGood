import Image from "next/image";

const testimonials = [
  {
    name: "Jesus Marcos",
    initial: "J",
    color: "bg-emerald-600",
    location: "Google Reseñas",
    stars: 5,
    text: "El mejor de todos los que han trabajado en mi jardín, honesto, detallista y un gran profesional estoy muy satisfecho con su trabajo. Muy recomendable.",
    service: "Jardinería",
  },
  {
    name: "Felipe Caminero",
    initial: "F",
    color: "bg-slate-800",
    location: "Google Reseñas",
    stars: 5,
    text: "Super atento y rápido. Un trabajo muy bien hecho, en una mañana, todo quedó perfecto. Es muy perfeccionista en lo que hace y cumple lo que promete. Muy recomendable",
    service: "Césped Artificial",
  },
  {
    name: "Angel Mazas",
    initial: "A",
    color: "bg-brand-green",
    location: "Google Reseñas",
    stars: 5,
    text: "Muchas gracias Contacté con esta empresa por recomendación y la verdad es que fue un gran acierto Muy buenos profesionales, honrados rápidos y eficientes Muy recomendable",
    service: "Proyecto Integral",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-28 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Lo que dicen nuestros clientes
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-none">
            Ellos ya <span className="text-brand-green">confían en nosotros</span>
          </h2>
          <div className="w-16 h-1 bg-brand-green mx-auto rounded-full mt-6" />

          {/* Google Reviews Badge */}
          <div className="mt-8 inline-flex items-center gap-3 bg-cream px-6 py-3 rounded-full border border-brand-green/10">
            <svg viewBox="0 0 48 48" className="w-6 h-6" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold text-anthracite">5.0 en Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-cream rounded-2xl p-8 border border-brand-green/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Header with avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-black text-lg shrink-0`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-anthracite text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.location}</div>
                </div>
              </div>


              <StarRating count={t.stars} />
              <p className="text-anthracite leading-relaxed text-sm italic grow">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
