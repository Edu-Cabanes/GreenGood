import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    slug: "mantenimiento-cesped-artificial-guia-completa",
    title: "Mantenimiento del césped artificial: trucos para que dure impecable 15 años",
    category: "Césped Artificial",
    image: "/images/Instalador Especializado Césped Artificial.png",
    excerpt: "Mucha gente cree que no necesita cuidados, pero unos pequeños trucos de profesional harán que tu jardín luzca como el primer día durante mucho más tiempo.",
  },
  {
    slug: "cesped-artificial-vs-natural-verano-salmantino",
    title: "Césped artificial vs césped natural: cual aguanta mejor el verano salmantino",
    category: "Césped Artificial",
    image: "/images/rollo de césped artificial.png",
    excerpt: "Las temperaturas extremas de la meseta castigan cualquier pradera. Analizamos durabilidad, consumo de agua y mantenimiento real de ambas opciones para que decidas con datos.",
  },
  {
    slug: "poda-setos-arbustos-primavera-errores",
    title: "Poda de setos y arbustos en primavera: errores que destrozan tus plantas",
    category: "Jardinería",
    image: "/images/Jardieria general.png",
    excerpt: "El corte en el momento equivocado puede matar un arbusto en semanas. Te contamos cuándo podar, qué herramientas usar y cómo dejar cada especie con su forma perfecta.",
  }
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-28 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-3">
              Nuestro Blog
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-none mb-4">
              Consejos de <span className="text-brand-green">Jardinería</span>
            </h2>
            <div className="w-16 h-1 bg-brand-green rounded-full mt-6" />
          </div>

          <Link
            href="/blog"
            className="self-start md:self-end text-brand-green font-bold uppercase tracking-widest text-sm hover:text-green-700 transition-colors flex items-center gap-2 group"
          >
            Ver todos los artículos
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Link
              key={idx}
              href={`/blog/${post.slug}`}
              className="group bg-cream rounded-3xl overflow-hidden border border-brand-green/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
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

              <div className="p-8 flex flex-col grow">
                <h3 className="text-xl font-black text-anthracite mb-3 leading-tight group-hover:text-brand-green transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-brand-green font-bold text-sm tracking-widest uppercase">
                  Leer artículo
                  <div className="w-6 h-[2px] bg-brand-green group-hover:w-10 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
