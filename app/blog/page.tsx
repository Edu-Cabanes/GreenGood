import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Consejos de Jardinería en Salamanca | GreenGood",
  description: "Guías prácticas y consejos de nuestros especialistas en césped artificial y jardinería en Salamanca. Descubre cómo mantener tu jardín perfecto.",
};

const blogPosts = [
  {
    slug: "mantenimiento-cesped-artificial-guia-completa",
    title: "Mantenimiento del césped artificial: trucos para que dure impecable 15 años",
    category: "Césped Artificial",
    image: "/images/instalador-cesped-artificial.png",
    excerpt: "Mucha gente cree que no necesita cuidados, pero unos pequeños trucos de profesional harán que tu jardín luzca como el primer día durante mucho más tiempo.",
  },
  {
    slug: "cesped-artificial-vs-natural-verano-salmantino",
    title: "Césped artificial vs césped natural: cuál aguanta mejor el verano salmantino",
    category: "Césped Artificial",
    image: "/images/cesped-artificial-rollo.png",
    excerpt: "Las temperaturas extremas de la meseta castigan cualquier pradera. Analizamos durabilidad, consumo de agua y mantenimiento real de ambas opciones para que decidas con datos.",
  },
  {
    slug: "poda-setos-arbustos-primavera-errores",
    title: "Poda de setos y arbustos en primavera: errores que destrozan tus plantas",
    category: "Jardinería",
    image: "/images/jardineria-general.png",
    excerpt: "El corte en el momento equivocado puede matar un arbusto en semanas. Te contamos cuándo podar, qué herramientas usar y cómo dejar cada especie con su forma perfecta.",
  }
];

export default function BlogPage() {
  return (
    <main className="bg-cream min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-brand-green font-bold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a inicio
          </Link>
        </div>

        <div className="text-center mb-16">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Nuestro Blog
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-anthracite uppercase tracking-tighter leading-none mb-4">
            Consejos de <span className="text-brand-green">Jardinería</span>
          </h1>
          <p className="text-slate-500 text-lg mt-4 max-w-xl mx-auto">
            Guías prácticas y consejos de nuestros especialistas en Salamanca
          </p>
          <div className="w-16 h-1 bg-brand-green rounded-full mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Link
              key={idx}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-brand-green/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
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
                <h2 className="text-xl font-black text-anthracite mb-3 leading-tight group-hover:text-brand-green transition-colors">
                  {post.title}
                </h2>

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
    </main>
  );
}
