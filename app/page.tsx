import Image from "next/image";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Stats from "@/components/sections/Stats";

export const metadata = {
  title: "Césped Artificial en Salamanca | GreenGood",
  description: "Especialistas en césped artificial, mantenimiento integral y piscinas en Salamanca y alrededores. Llama ahora al 615 667 820 para tu presupuesto gratis.",
};

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
            src="/images/cesped-artificial-rollo.png"
            alt="Instalación premium de césped artificial"
            fill
            sizes="100vw"
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

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.05]">
              Instalación de Césped <span className="no-ligatures" style={{ letterSpacing: '0.08em' }}>Artificial</span> en <br />
              <span className="text-accent-green italic">Salamanca</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-10 font-light leading-relaxed">
              <strong className="text-white font-medium">Tu jardín en buenas manos.</strong> 18 años de experiencia instalando el mejor césped artificial y transformando exteriores. Presupuesto rápido y sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/34615667820?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20sin%20compromiso%20para%20mi%20jard%C3%ADn."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-green shadow-xl shadow-black/20 hover:shadow-2xl hover:bg-cream hover:-translate-y-1 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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

      </section>

      {/* ── Trust Bar ── */}
      <div className="bg-brand-green py-4 text-white text-center font-bold text-xs tracking-[0.25em] uppercase">
        +1.500 proyectos realizados · Salamanca y alrededores · Presupuestos rápidos
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

