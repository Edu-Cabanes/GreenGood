import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const blogData = {
  "mantenimiento-cesped-artificial-guia-completa": {
    title: "Mantenimiento del césped artificial: trucos para que dure impecable 15 años",
    category: "Césped Artificial",
    image: "/images/Instalador Especializado Césped Artificial.png",
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
    image: "/images/rollo de césped artificial.png",
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
    image: "/images/Jardieria general.png",
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
            Presupuesto personalizado en menos de 24 horas. Sin compromiso.
          </p>
          <Link
            href={post.cta.href}
            className="inline-flex items-center gap-2 bg-white text-brand-green font-bold px-8 py-4 rounded-xl hover:bg-accent-green transition-colors duration-300 text-sm uppercase tracking-widest"
          >
            {post.cta.text}
          </Link>
        </div>
      </div>
    </main>
  );
}
