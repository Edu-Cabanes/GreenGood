import { MapPin, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";

const traits = [
  {
    icon: ShieldCheck,
    title: "Más de 20 años de experiencia",
    desc: "Llevamos décadas transformando jardines en Salamanca y toda Castilla y León.",
  },
  {
    icon: MapPin,
    title: "Cobertura provincial completa",
    desc: "Nos desplazamos a toda la provincia de Salamanca y comunidades limítrofes sin recargo.",
  },
  {
    icon: Clock,
    title: "Presupuesto en 24 horas",
    desc: "Te garantizamos respuesta rápida. Sin esperas, sin excusas.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-anthracite text-white px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Quiénes somos
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6 md:mb-8">
            Cercanía y{" "}
            <span className="text-brand-green">profesionalidad</span> en cada
            proyecto
          </h2>
          <p className="text-slate-300 leading-relaxed mb-8 md:mb-12 text-base md:text-lg">
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
                  <div className="w-11 h-11 bg-brand-green/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{trait.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {trait.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stat — solo visible en mobile, inline en el flujo */}
          <div className="md:hidden mt-10 bg-brand-green rounded-2xl p-5 inline-flex flex-col shadow-xl">
            <div className="text-4xl font-black text-white">+1.800</div>
            <div className="text-green-100 text-xs font-bold uppercase tracking-widest mt-1">
              Proyectos realizados
            </div>
          </div>
        </div>

        {/* Image with stat overlay — solo en desktop */}
        <div className="relative hidden md:block pb-6">
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <Image
              src="/images/despues-jardin-cesped-artificial.jpg"
              alt="Equipo GreenGood trabajando en Salamanca"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-anthracite/60 via-transparent to-transparent" />
          </div>

          {/* Stats card flotante — desktop only */}
          <div className="absolute -bottom-6 -left-6 bg-brand-green rounded-2xl p-6 shadow-2xl">
            <div className="text-4xl font-black text-white">+1.800</div>
            <div className="text-green-100 text-xs font-bold uppercase tracking-widest mt-1">
              Proyectos realizados
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

