import Image from "next/image";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section
        id="inicio"
        className="relative h-[90vh] flex items-center justify-center bg-anthracite overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/rollo de césped artificial.png"
            alt="Instalación premium de césped artificial"
            fill
            className="object-cover animate-subtle-zoom"
            priority
          />
          {/* Sofisticado gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-emerald-950/80 via-emerald-950/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex items-center h-full">
          <div className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-4xl shadow-2xl">
            <div className="inline-flex items-center gap-3 mb-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              <p className="text-white font-bold text-xs tracking-widest uppercase">
                Jardinería en Salamanca
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.05] tracking-tight">
              Tu jardín en <br />
              <span className="text-accent-green italic">buenas manos</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-10 font-light leading-relaxed">
              18 años de experiencia instalando el mejor césped artificial y transformando exteriores. Presupuesto sin compromiso en 24h.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contacto"
                className="bg-white text-brand-green shadow-xl shadow-black/20 hover:shadow-2xl hover:bg-cream hover:-translate-y-1 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300"
              >
                Solicitar Presupuesto
              </a>
              <a
                href="/#servicios"
                className="bg-transparent border border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center"
              >
                Ver Servicios
              </a>
            </div>
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
        +1.500 proyectos realizados · Salamanca y alrededores · Presupuesto en &lt;24h
      </div>

      {/* ── Estadísticas ── */}
      <Stats />

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

