import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proyectos de Jardinería y Césped Artificial en Salamanca",
  description: "Galería de trabajos realizados: césped artificial, mantenimiento de jardines y piscinas en Salamanca y alrededores. Más de 1.500 proyectos.",
};

const proyectos = [
  {
    title: "Césped Artificial en Chalet Alto Standing",
    category: "Césped Artificial",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Instalación de 120m2 con modelo premium 40mm y base drenante.",
  },
  {
    title: "Mantenimiento Perimetral Piscina",
    category: "Piscinas",
    image: "https://images.unsplash.com/photo-1576013551627-11971f3f8f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Puesta a punto estival, limpieza de piedra de coronación y desinfección de aguas.",
  },
  {
    title: "Poda en Altura de Pinos Centenarios",
    category: "Jardinería General",
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Saneamiento de ramas peligrosas mediante trepa profesional certificada.",
  },
  {
    title: "Diseño Paisajístico Residencial",
    category: "Urbanizaciones",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Creación de zonas de sombra con vegetación autóctona de bajo enraizamiento.",
  },
  {
    title: "Hidrolimpieza de Accesos",
    category: "Limpieza",
    image: "https://images.unsplash.com/photo-1598424260275-c5332fca25e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Recuperación del color original en adoquines tras años de acumulación de musgo.",
  },
  {
    title: "Jardinería Corporativa",
    category: "Comunidades",
    image: "https://images.unsplash.com/photo-1524247108137-732e005320c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Contrato anual de mantenimiento integral para edificio de oficinas.",
  },
];

export default function ProyectosPage() {
  return (
    <main className="bg-cream min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Nuestro Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-none mb-6">
            Proyectos <span className="text-brand-green">Destacados</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Imágenes de algunas de nuestras transformaciones más recientes en Salamanca y alrededores. Cada jardín es un reto único.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 bg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-brand-green/10">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={proyecto.image}
                  alt={proyecto.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-anthracite/90 via-anthracite/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-brand-green/90 backdrop-blur-sm px-4 py-1 rounded-full">
                  <span className="text-white text-xs font-bold tracking-widest uppercase">
                    {proyecto.category}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="relative p-6 bg-white transform transition-transform duration-300">
                <h3 className="text-xl font-bold text-anthracite mb-2 group-hover:text-brand-green transition-colors">
                  {proyecto.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {proyecto.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
