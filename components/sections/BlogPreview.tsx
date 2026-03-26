import Image from "next/image";

const blogPosts = [
  {
    title: "Cómo preparar tu jardín para la primavera en Salamanca",
    category: "Mantenimiento",
    readTime: "4 min",
    image: "/images/antes-jardin-cesped-artificial.jpg", // placeholder related to landscape
    excerpt: "Con los cambios de temperatura en la meseta, adelantarse a la primavera es vital. Descubre los pasos clave para revitalizar tu pradera y podar correctamente.",
    date: "15 Mar"
  },
  {
    title: "Ventajas del césped artificial frente al natural: Guía 2026",
    category: "Césped Artificial",
    readTime: "5 min",
    image: "/images/despues-jardin-cesped-artificial.jpg",
    excerpt: "Analizamos el ahorro de agua, la durabilidad de los nuevos materiales y por qué cada vez más hogares en Castilla y León apuestan por esta solución.",
    date: "28 Feb"
  },
  {
    title: "Puesta a punto de piscinas comunitarias: Lo que la ley exige",
    category: "Piscinas",
    readTime: "3 min",
    image: "/images/antes-jardin-cesped-artificial.jpg", // placeholder
    excerpt: "Evita sanciones este verano. Repasamos la normativa vigente sobre control de aguas y limpieza de los vasos antes de abrir la piscina de tu urbanización.",
    date: "10 Feb"
  }
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-28 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Nuestro Blog VIVO
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-none mb-4">
              Consejos de <span className="text-brand-green">Jardinería</span>
            </h2>
            <div className="w-16 h-1 bg-brand-green rounded-full mt-6" />
          </div>
          
          <button className="self-start md:self-end text-brand-green font-bold uppercase tracking-widest text-sm hover:text-green-700 transition-colors flex items-center gap-2 group">
            Ver todos los artículos
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <article key={idx} className="group bg-cream rounded-3xl overflow-hidden border border-brand-green/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-10 shadow-lg">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{post.readTime} lect.</span>
                </div>
                
                <h3 className="text-xl font-black text-anthracite mb-3 leading-tight group-hover:text-brand-green transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-brand-green font-bold text-sm tracking-widest uppercase">
                  Leer artículo
                  <div className="w-6 h-[2px] bg-brand-green group-hover:w-10 transition-all duration-300" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
