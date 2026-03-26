import Image from "next/image";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section
        id="inicio"
        className="relative h-[90vh] flex items-center justify-center bg-anthracite overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/despues-jardin-cesped-artificial.jpg"
            alt="Jardín espectacular GreenGood"
            fill
            className="object-cover scale-105 animate-subtle-zoom"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-brand-green font-bold text-sm tracking-[0.25em] uppercase mb-5">
            Paisajismo y Jardinería · Salamanca
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
            Tu jardín en{" "}
            <span className="text-brand-green">buenas manos</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/80 mb-10 font-light max-w-2xl mx-auto">
            Profesionalidad y cercanía en Salamanca. Presupuesto sin compromiso
            en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="bg-brand-green hover:bg-opacity-90 text-white px-10 py-5 rounded-xl font-extrabold text-sm tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
            >
              SOLICITAR PRESUPUESTO
            </a>
            <a
              href="#galeria"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-anthracite px-10 py-5 rounded-xl font-extrabold text-sm tracking-widest transition-all"
            >
              VER PROYECTOS
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs uppercase tracking-widest animate-bounce">
          <span>Scroll</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <div className="bg-brand-green py-4 text-white text-center font-bold text-xs tracking-[0.25em] uppercase">
        +1.800 proyectos realizados · Salamanca y Castilla y León · Presupuesto en &lt;24h
      </div>

      {/* ── Galería Antes/Después ── */}
      <section id="galeria" className="py-28 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Nuestros proyectos
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-none mb-4">
            Resultados que <span className="text-brand-green">convencen</span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto italic">
            De un solar vacío a un oasis verde en tiempo récord.{" "}
            <strong className="text-anthracite not-italic">Desliza la imagen</strong> para ver el antes
            y el después.
          </p>
          <BeforeAfter
            beforeImage="/images/antes-jardin-cesped-artificial.jpg"
            afterImage="/images/despues-jardin-cesped-artificial.jpg"
          />
        </div>
      </section>

      {/* ── Servicios ── */}
      <Services />

      {/* ── Sobre Nosotros ── */}
      <About />

      {/* ── Testimonios ── */}
      <Testimonials />

      {/* ── Blog (Novedad SEO) ── */}
      <BlogPreview />

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── Contacto ── */}
      <Contact />
    </div>
  );
}

