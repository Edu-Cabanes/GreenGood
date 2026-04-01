import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

const blogData = {
  "mantenimiento-cesped-artificial-guia-completa": {
    title: "Mantenimiento del césped artificial: trucos para que dure impecable 15 años",
    category: "Césped Artificial",
    image: "/images/instalador-cesped-artificial.png",
    intro: "El césped artificial es famoso por su bajo mantenimiento, pero 'bajo' no significa 'cero'. Si quieres que las fibras mantengan su brillo, suavidad y capacidad de recuperación como el primer día, hay una serie de cuidados básicos que debes conocer. Aquí tienes nuestra guía de experto para jardines en Salamanca.",
    sections: [
      {
        heading: "El cepillado: El secreto del volumen",
        body: "Con el tránsito y el paso del tiempo, las fibras del césped tienden a chafarse. El cepillado es la tarea más importante. Debes usar un cepillo de cerdas duras (que no sean metálicas) y cepillar siempre a <strong>contrapelo</strong>. Esto levanta las fibras y redistribuye la arena de sílice, devolviendo ese aspecto frondoso y natural que tenía el primer día.",
      },
      {
        heading: "Limpieza periódica y refrescado",
        body: "A diferencia del natural, aquí no regamos para que crezca, sino para limpiar. Un manguerazo ocasional elimina el polvo, el polen y cualquier suciedad superficial. En los veranos calurosos de Salamanca, mojar el césped durante un minuto no solo lo limpia, sino que baja drásticamente la temperatura de la superficie, haciendo que sea mucho más agradable pisarlo descalzo.",
      },
      {
        heading: "La importancia de la arena de sílice",
        body: "La arena de sílice es el 'relleno' que estabiliza el césped. Con el tiempo y las lluvias fuertes, puede desplazarse o compactarse. Una revisión anual para ver si falta arena en algunas zonas es vital. La arena no solo mantiene las fibras erguidas, sino que ayuda a conservar la humedad tras un riego rápido, manteniendo el jardín fresco por más tiempo.",
      },
      {
        heading: "Control de malas hierbas en los bordes",
        body: "Aunque instalamos mallas antihierbas profesionales, a veces pueden aparecer pequeños brotes en los bordes o juntas si se acumula algo de tierra orgánica encima. No te preocupes: se eliminan fácilmente a mano o con un herbicida muy suave diluido en agua. No dañará tu césped y mantendrá el perímetro impecable.",
      },
    ],
    cta: {
      text: "Preguntar por nuestro servicio de puesta a punto",
      href: "/#contacto",
    },
  },

  "cesped-artificial-vs-natural-verano-salmantino": {
    title: "Césped artificial vs césped natural: cuál aguanta mejor el verano salmantino",
    category: "Césped Artificial",
    image: "/images/cesped-artificial-rollo.png",
    intro: "Salamanca tiene uno de los veranos más duros de la meseta. Semanas con más de 35°C secan cualquier pradera. ¿Qué aguanta mejor: un césped natural o uno artificial? Aquí tienes la respuesta con datos reales de la provincia.",
    sections: [
      {
        heading: "El problema del natural en verano",
        body: "Una pradera natural en Salamanca exige riego constante en julio y agosto. Necesitas al menos <strong>20-30 litros por metro cuadrado a la semana</strong>, siegas semanales al atardecer y abonado específico para que no amarillee. Esto supone un gasto económico en agua muy elevado y estar pendiente del programador de riego continuamente.",
      },
      {
        heading: "¿Cómo resiste el artificial el calor?",
        body: "Están fabricados con polímeros resistentes a los rayos UV, por lo que <strong>no pierden color</strong>. Eso sí, el césped artificial retiene más temperatura que la hierba natural cuando el sol incide directo. La solución técnica es esparcir arena de sílice en la base (que retiene humedad de la noche) o darle un manguerazo rápido de 1 minuto antes de salir a jugar en las horas centrales del día para bajarle 10 grados de golpe.",
      },
      {
        heading: "Ahorro real de recursos",
        body: "Mientras el natural consume recursos constantes (agua, abono, gasolina/electricidad del cortacésped), el artificial reduce el consumo de agua un 98% (solo para refrescar o limpiar) y el tiempo empleado a cero. El aspecto visual en pleno agosto es imbatible: siempre verde.",
      },
      {
        heading: "¿Cuándo seguir con césped natural?",
        body: "El natural tiene sentido si tienes abundante sombra, si valoras el olor a hierba cortada por encima del mantenimiento, o si no te importa el gasto en agua. Para zonas de terraza, alrededores de piscina o jardines a pleno sol en Salamanca, el artificial de alta gama es hoy por hoy la opción más práctica.",
      },
    ],
    cta: {
      text: "Hablar con un especialista en césped",
      href: "/#contacto",
    },
  },

  "poda-setos-arbustos-primavera-errores": {
    title: "Poda de setos y arbustos en primavera: errores que destrozan tus plantas",
    category: "Jardinería",
    image: "/images/jardineria-general.png",
    intro: "La poda es una de las tareas peor ejecutadas en jardinería doméstica. Un mal corte puede costarle la vida a un arbusto o dejarlo sin flores toda la temporada. Resumimos los errores clásicos en nuestra zona y cómo evitarlos.",
    sections: [
      {
        heading: "Error 1: Podar en el momento equivocado",
        body: "<strong>Arbustos de flor primaveral</strong> (lilas, forsitia): Se podan DESPUÉS de florecer. Si los podas a finales de invierno, cortarás las yemas de flor.<br/><strong>Arbustos de floración estival</strong>: Se podan a finales de invierno para fomentar brotes nuevos.<br/><strong>Setos perennes</strong> (arizónicas, laurel): Admiten recorte formativo desde primavera hasta otoño, evitando las semanas de calor extremo en Salamanca.",
      },
      {
        heading: "Error 2: Tijeras sin afilar o sin desinfectar",
        body: "Un corte mordido o aplastado es una puerta de entrada para hongos. El cortasetos y las tijeras deben afilarse cada temporada. Además, si has podado una planta enferma, desinfecta las cuchillas con alcohol antes de podar el siguiente ejemplar sano en el jardín.",
      },
      {
        heading: "Error 3: 'Pelar' el interior de las coníferas",
        body: "Arizónicas y cipreses (muy comunes en cerramientos de parcelas salmantinas) no rebrotan de la madera vieja. Si te pasas podando y llegas a la zona marrón sin hojas del interior, se quedará un agujero permanente. El recorte debe ser superficial y frecuente.",
      },
      {
        heading: "¿Cuándo llamar a un profesional?",
        body: "Para un mantenimiento básico, basta con precaución. Pero si tienes setos de más de 2 metros de altura, ejemplares enfermos o arbustos que llevan años sin controlarse y necesitan una poda de rejuvenecimiento severa, la experiencia es vital. Si estás en Salamanca, llámanos.",
      },
    ],
    cta: {
      text: "Solicitar mantenimiento de jardín",
      href: "/#contacto",
    },
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug as keyof typeof blogData];
  if (!post) return {};
  return {
    title: `${post.title} | GreenGood`,
    description: post.intro.slice(0, 155) + "…",
  };
}

export default async function BlogPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = blogData[slug as keyof typeof blogData];

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-cream min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-brand-green font-bold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-green text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-anthracite tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="w-20 h-1.5 bg-brand-green rounded-full mb-8" />

          {/* Hero image */}
          <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-anthracite/40 via-transparent to-transparent" />
          </div>
        </header>

        {/* Intro */}
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 font-medium border-l-4 border-brand-green pl-6">
          {post.intro}
        </p>

        {/* Sections */}
        <article className="space-y-10">
          {post.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl md:text-2xl font-black text-anthracite mb-4 tracking-tight">
                {section.heading}
              </h2>
              <div 
                className="text-slate-600 leading-relaxed text-base"
                dangerouslySetInnerHTML={{ __html: section.body }} 
              />
            </div>
          ))}
        </article>

        {/* CTA */}
        <div className="mt-16 bg-brand-green rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">
            ¿Listo para dar el paso?
          </h3>
          <p className="text-green-100 mb-8 text-base">
            Estudiamos tu caso y te damos presupuesto personalizado sin compromiso.
          </p>
          <a
            href={`https://wa.me/34615667820?text=Hola!%20He%20le%C3%ADdo%20vuestro%20art%C3%ADculo%20sobre%20${encodeURIComponent(post.title)}%20y%20me%20gustar%C3%ADa%20haceros%20una%20consulta.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-brand-green font-black px-10 py-5 rounded-2xl hover:scale-105 transition-all duration-300 text-sm uppercase tracking-widest shadow-xl"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
