import { MapPin, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";

const traits = [
  {
    icon: ShieldCheck,
    title: "18 años de experiencia",
    desc: "Llevamos casi dos décadas transformando jardines en Salamanca y alrededores.",
  },
  {
    icon: MapPin,
    title: "Salamanca y alrededores",
    desc: "Nos desplazamos por toda Salamanca y alrededores.",
  },
  {
    icon: Clock,
    title: "Presupuesto sin compromiso",
    desc: "Realizamos una valoración detallada de tu proyecto de forma ágil y profesional.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-anthracite text-white px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-accent-green font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Quiénes somos
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6 md:mb-8">
            Cercanía y{" "}
            <span className="text-accent-green">profesionalidad</span> en cada
            proyecto
          </h2>
          <p className="text-slate-200 leading-relaxed mb-8 md:mb-12 text-base md:text-lg">
            Somos un equipo local comprometido con la calidad. Cada jardín que
            tocamos es un proyecto personal: escuchamos, proponemos y
            ejecutamos con materiales de alto rendimiento. No somos una
            franquicia — somos tus vecinos de Salamanca.
          </p>

          <div className="flex flex-col gap-6 md:gap-8">
            {traits.map((trait, idx) => {
              const Icon = trait.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-accent-green/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-accent-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{trait.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {trait.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stat — solo visible en mobile, inline en el flujo */}
          <div className="md:hidden mt-10 bg-brand-green rounded-2xl p-5 inline-flex flex-col shadow-xl">
            <div className="text-4xl font-black text-white">+1.500</div>
            <div className="text-green-100 text-xs font-bold uppercase tracking-widest mt-1">
              Proyectos realizados
            </div>
          </div>

          {/* Imagen en tarjeta visible solo en mobile */}
          <div className="md:hidden mt-8 relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/servicios-comunidades.png"
              alt="Equipo GreenGood en Salamanca"
              fill
              className="object-cover"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-linear-to-t from-anthracite/90 via-transparent to-transparent opacity-80" />

            {/* Logo oficial superpuesto en la imagen (Mobile) */}
            <div className="absolute bottom-4 right-4 z-10 w-40 h-14">
              <Image
                src="/images/jardineria.png.webp"
                alt="GreenGood Jardinería Logo Oficial"
                fill
                className="object-contain filter brightness-0 invert drop-shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Image with stat overlay — solo en desktop */}
        <div className="relative hidden md:block pb-6">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/servicios-comunidades.png"
              alt="Equipo GreenGood en Salamanca"
              fill
              className="object-cover"
            />
            {/* Gradientes para asentar el logo */}
            <div className="absolute inset-0 bg-linear-to-tr from-anthracite/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-anthracite/90 via-transparent to-transparent opacity-80" />

            {/* Logo oficial superpuesto en la imagen */}
            <div className="absolute bottom-8 right-8 z-10 w-48 h-16">
              <Image
                src="/images/jardineria.png.webp"
                alt="GreenGood Jardinería Logo Oficial"
                fill
                className="object-contain filter brightness-0 invert drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Stats card flotante — desktop only */}
          <div className="absolute -bottom-6 -left-6 bg-brand-green rounded-2xl p-6 shadow-2xl">
            <div className="text-4xl font-black text-white">+1.500</div>
            <div className="text-green-100 text-xs font-bold uppercase tracking-widest mt-1">
              Proyectos realizados
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

