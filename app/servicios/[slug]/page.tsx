import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

const serviciosData = {
  "jardineria-general": {
    title: "Jardinería General en Salamanca",
    tagline: "Mantenimiento integral experto para tu hogar",
    image: "/images/plantar.jpg",
    content: "Ofrecemos un servicio de jardinería profesional adaptado específicamente al clima de la zona de Salamanca. Gestionamos de forma integral el cuidado de tu jardín para asegurar un crecimiento sano y una estética impecable durante todas las estaciones del año.",
    longContent: [
      {
        heading: "El reto de la jardinería en Salamanca",
        body: "El clima continental de Salamanca, con sus veranos secos y calurosos, y sus inviernos con fuertes heladas, supone un auténtico desafío para cualquier zona verde. No vale cualquier planta ni cualquier tipo de abono. Nuestro equipo conoce a la perfección las especies que mejor se adaptan a la meseta y los tiempos exactos para podar, sembrar y abonar."
      },
      {
        heading: "Mantenimiento a medida",
        body: "Realizamos visitas periódicas adaptadas a las necesidades reales de tu jardín. Desde el perfilado de setos y arbustos hasta la escarificación y aireado del césped natural en primavera. Nos aseguramos de que los sistemas de riego por goteo o aspersión funcionen sin fugas, optimizando cada gota de agua durante el verano."
      },
      {
        heading: "Prevención frente a plagas",
        body: "Las subidas bruscas de temperatura en primavera suelen traer pulgón, hongos y otras plagas. Aplicamos tratamientos fitosanitarios preventivos, siempre respetuosos con el medio ambiente y los animales de compañía, para cortar el problema de raíz antes de que afecte a la salud de tus plantas."
      }
    ],
    bulletPoints: ["Podas especializadas y de formación", "Mantenimiento de praderas y arbustos", "Gestión de sistemas de riego", "Tratamientos preventivos estacionales"],
    faqs: [
      { q: "¿Cada cuánto tiempo debéis venir a mantener el jardín?", a: "Depende del diseño y las especies. Para un jardín estándar con césped natural, recomendamos visitas semanales o quincenales en verano, y visitas mensuales de mantenimiento en invierno." },
      { q: "¿Usáis productos perjudiciales para mis mascotas?", a: "No. Empleamos productos fitosanitarios homologados y siempre que es posible optamos por soluciones ecológicas completamente seguras para perros y gatos." }
    ]
  },
  "cesped-artificial": {
    title: "Instalación de Césped Artificial en Salamanca",
    tagline: "El verde perfecto los 365 días del año",
    image: "/images/instalador-cesped-artificial.png",
    content: "Disfruta de un jardín verde sin las complicaciones del mantenimiento tradicional. Instalamos modelos de césped artificial de alta gama, diseñados para resistir tanto el sol intenso del verano salmantino como las heladas del invierno.",
    longContent: [
      {
        heading: "La solución definitiva para tu jardín o terraza",
        body: "El cambio climático y las sequías recurrentes han convertido al césped artificial en la opción más inteligente para Salamanca. Atrás quedaron las alfombras plásticas y ásperas; hoy trabajamos con monofilamentos avanzados que imitan a la perfección la textura, el color y la resiliencia del césped natural, con hilos rizados en la base que le dan volumen y naturalidad."
      },
      {
        heading: "Ahorro drástico en agua y mantenimiento",
        body: "Una de las ventajas más tangibles es el ahorro económico a medio plazo. Olvídate de programar el riego diario, encender el cortacésped el domingo por la mañana o comprar abonos. La factura del agua se reduce drásticamente, amortizando la inversión original en apenas unos años. Es una solución ideal tanto para chalets unifamiliares como para azoteas, áticos o los bordes de la piscina."
      },
      {
        heading: "Nuestro proceso de instalación paso a paso",
        body: "Una mala instalación arruina el césped más caro. Nosotros prestamos especial atención a la preparación previa del terreno: vaciado, colocación de malla antihierbas profesional de alto gramaje, extendido de áridos y compactación perfecta para asegurar un drenaje óptimo aunque llueva torrencialmente. Por último, realizamos un sellado de juntas invisible y un lastrado con arena de sílice (si el modelo lo requiere) para que las fibras se mantengan erguidas durante años."
      }
    ],
    bulletPoints: ["Césped de última generación y máxima naturalidad", "Preparación técnica del terreno y drenaje experto", "Sellado de juntas completamente invisible", "Superficie 100% segura para niños y mascotas"],
    faqs: [
      { q: "¿Se calienta mucho en los días de verano?", a: "Es cierto que retiene más temperatura que la hierba natural cuando le da el sol directo a 40 grados. La mejor forma de solucionarlo en las horas centrales del calor salmantino es darle un manguerazo muy breve; el agua evapora y refresca de golpe toda la zona para poder pisarlo descalzo." },
      { q: "¿Es necesario algún tipo de mantenimiento?", a: "El mantenimiento es mínimo. Basta con cepillarlo a contrapelo un par de veces al año para levantar las fibras en las zonas de más pisada, y mojarlo si quieres limpiarlo de polvo. Nosotros también ofrecemos servicios de puesta a punto si prefieres despreocuparte." },
      { q: "¿Drena bien si llueve mucho?", a: "Sí, todos nuestros modelos cuentan con orificios de drenaje en el backing (la base), capaces de evacuar hasta 60 litros por metro cuadrado al minuto. Además, la capa de grava y arena que preparamos debajo actúa como sumidero natural." }
    ]
  },
  "limpieza-comunes": {
    title: "Limpieza de Zonas Comunes y Accesos",
    tagline: "Entornos impecables, vecinos contentos",
    image: "/images/carretilla.jpg",
    content: "Realizamos servicios de limpieza profunda en áreas comunes de urbanizaciones y comunidades de vecinos. Nos encargamos de mantener pasos de carruajes, accesos y recintos exteriores libres de suciedad acumulada empleando métodos eficaces de limpieza.",
    longContent: [
      {
        heading: "La primera impresión cuenta",
        body: "Los accesos peatonales, rampas de garaje, portales exteriores y caminos adoquinados son la carta de presentación de cualquier comunidad. Sin embargo, con el polvo en suspensión, las lluvias escasas y el paso constante, acumulan mucha suciedad y manchas difíciles que una simple escoba no puede solucionar."
      },
      {
        heading: "Intervenciones técnicas y eficaces",
        body: "Empleamos hidrolimpiadoras industriales y maquinaria específica para arrancar musgo, incrustaciones y manchas orgánicas en pavimentos porosos. Trabajamos de forma rápida y con las mínimas molestias para el tránsito diario de los propietarios."
      },
      {
        heading: "Planes a tu medida",
        body: "Ofrecemos desde limpiezas de choque puntuales (ideales tras obras, calimas, o al empezar la primavera) hasta programas de mantenimiento periódico adaptados al presupuesto y necesidades de cada comunidad o administrador de fincas."
      }
    ],
    bulletPoints: ["Hidrolimpiezas con agua a alta presión", "Limpieza técnica de pavimentos y adoquines", "Cuidado de perímetros y cerramientos exteriores", "Planes de mantenimiento ajustados a tu presupuesto"],
    faqs: [
      { q: "¿Elimináis el musgo de los suelos en invierno?", a: "Sí, aplicamos limpieza a presión y tratamientos específicos que no solo eliminan el musgo y liquen existente, sino que retardan su aparición futura, evitando además posibles resbalones indeseados en los meses más fríos y húmedos." }
    ]
  },
  "piscinas": {
    title: "Mantenimiento Integral de Piscinas",
    tagline: "Aguas cristalinas, baños seguros",
    image: "/images/limpiar-piscina.png",
    content: "Nos encargamos de que tu piscina esté siempre lista para el baño. Realizamos el control de los parámetros del agua y la puesta a punto necesaria para cumplir con los estándares de higiene y seguridad exigidos por normativa.",
    longContent: [
      {
        heading: "Puesta a punto pre-temporada",
        body: "La apertura de la piscina tras los largos inviernos de Salamanca requiere precisión técnica. Retiramos y limpiamos las lonas de invernaje, desinfectamos exhaustivamente el vaso (paredes y fondo), revisamos el estado de los filtros (cambios de arena de sílice o vidrio), las bombas y válvulas, y realizamos el tratamiento de choque inicial para que el agua recupere su pureza original."
      },
      {
        heading: "Control riguroso en temporada",
        body: "Una piscina es mucho más que agua clorada. El equilibrio químico es vital para evitar irritaciones en los ojos, piel seca, y prevenir aguas turbias o problemas de algas. Realizamos mediciones constantes de pH, cloro libre, turbidez y alcalinidad, ajustando los niveles de forma analítica en cada visita programada."
      },
      {
        heading: "Invernaje y reducción de costes",
        body: "Cuando llega el frío, preparamos tu instalación para que sobreviva el invierno sin daños estructurales por congelación en las tuberías y para que no tengas que vaciar todos los litros de agua cada año. El invernaje es la decisión técnica más ecológica y la que más dinero te ahorrará a largo plazo."
      }
    ],
    bulletPoints: ["Revisión técnica de la sala de máquinas", "Tratamientos de choque y recuperación de aguas turbias", "Controles químicos semanales en temporada", "Operaciones técnicas de invernaje"],
    faqs: [
      { q: "¿Cuándo es el mejor momento para destapar y preparar la piscina?", a: "Lo ideal es empezar la puesta a punto a mediados de mayo. De esta forma, si detectamos que hay que cambiar la arena del filtro o reparar alguna microfuga, hay margen de tiempo de sobra antes de que apriete el calor." },
      { q: "¿Es necesario vaciar la piscina cada año?", a: "En absoluto. Salvo indicación técnica expresa (exceso extremo de estabilizante isocianúrico o reparaciones en el vaso), un buen programa de invernaje nos permite conservar el agua en perfectas condiciones de un año para otro." }
    ]
  },
  "servicios-comunidades": {
    title: "Servicios Integrados para Comunidades",
    tagline: "Un único proveedor, tranquilidad total",
    image: "/images/servicios-comunidades.png",
    content: "Simplificamos la conservación de las comunidades de vecinos integrando la jardinería y el cuidado de la piscina bajo una misma gestión unificada. Un servicio profesional que reduce costes y garantiza el buen estado constante de las zonas comunes.",
    longContent: [
      {
        heading: "El problema de tener múltiples empresas",
        body: "A menudo, las grandes comunidades contratan a una empresa para mantener la piscina, a otra para recortar los setos y a otra para limpiar accesos. Esto genera problemas constantes de coordinación, solapamientos de tareas y demasiados dolores de cabeza para presidentes y administradores de fincas. Nosotros solucionamos esto asumiendo el control de todo el exterior."
      },
      {
        heading: "Equipos multidisciplinares de confianza",
        body: "Al asignar un equipo fijo a tu comunidad o mancomunidad, los vecinos siempre saben quién entra por la puerta. Nuestro personal realiza rutas de supervisión exhaustivas: si mientras limpian perciben que un difusor de riego tira agua fuera, lo corrigen en el acto; si ven el nivel del agua de la piscina bajo, lo regulan."
      },
      {
        heading: "Reportes claros y ahorros reales",
        body: "Mantenemos un contacto directo y fluido con los gestores de la finca, informando proactivamente de las labores realizadas. Al agrupar servicios, podemos ofrecer presupuestos anuales mucho más ajustados y competitivos que contratando los mismos servicios de forma individualizada."
      }
    ],
    bulletPoints: ["Gestión centralizada de piscina, limpieza y jardines", "Personal operativo fijo asignado a tu comunidad", "Ahorro al contratar un pack de servicios unificado", "Reportes regulares al administrador de fincas"],
    faqs: [
      { q: "¿Trabajáis con Administradores de Fincas de Salamanca?", a: "Sí, estamos plenamente habituados a coordinarnos de forma técnica y administrativa con despachos y gestores profesionales, facilitándoles presupuestos transparentes, partes de trabajo y cumplimiento estricto de la normativa de prevención." }
    ]
  },
  "urbanizaciones": {
    title: "Proyectos en Urbanizaciones y Fincas",
    tagline: "Capacidad operativa para grandes superficies",
    image: "/images/despues-jardin-cesped-artificial.jpg",
    content: "Disponemos de la capacidad técnica necesaria para gestionar grandes extensiones de terreno, amplios recintos residenciales y fincas rústicas. Realizamos labores de desbroce, limpieza y mejora paisajística a gran escala con resultados profesionales.",
    longContent: [
      {
        heading: "Mantenimiento de grandes extensiones",
        body: "Mantener una urbanización extensa en los alrededores de Salamanca, con sus largas avenidas, paseos interiores y rotondas, exige mucho más que un cortacésped. Abordamos la gestión de espacios que van más allá del jardín privado, controlando el crecimiento descontrolado de la hierba y manteniendo expeditas las arterias principales de la comunidad."
      },
      {
        heading: "Desbroce perimetral y cortafuegos",
        body: "Durante la corta pero intensa primavera, las parcelas vacías y los linderos de las urbanizaciones crecen desproporcionadamente. Cuando este pasto se seca en verano, supone un inmenso riesgo de incendio. Realizamos desbroces de seguridad con maquinaria pesada y manual, eliminando pasto y zarzas para garantizar zonas limpias que cumplan con las ordenanzas de los ayuntamientos de la provincia."
      },
      {
        heading: "Gestión ambiental de residuos vegetales",
        body: "En estas áreas tan grandes la generación de matorral, poda y biomasa es enorme. Nosotros nos ocupamos de procesar ese volumen: realizamos astillados in situ o gestionamos directamente la carga y traslado de todos los residuos vegetales generados hacia los puntos limpios y plantas de tratamiento homologadas."
      }
    ],
    bulletPoints: ["Desbroces preventivos de seguridad en grandes parcelas", "Cuidado de paseos peatonales y áreas de esparcimiento", "Maquinaria de gran rendimiento para agilizar el trabajo", "Carga, porte y gestión responsable de residuos orgánicos"],
    faqs: [
      { q: "¿Realizáis intervenciones de choque en parcelas abandonadas?", a: "Absolutamente sí. Disponemos de cuadrillas equipadas con desbrozadoras profesionales y motosierras para recuperar y adecentar terrenos o casas de campo que llevan años sin recibir mantenimiento." },
      { q: "¿Retiráis vosotros los restos vegetales después del desbroce?", a: "Sí, todos nuestros presupuestos de intervención incluyen la retirada de las toneladas de biomasa generadas y su posterior depósito en vertederos especiales." }
    ]
  },
};

const serviciosMeta: Record<string, { metaTitle: string; metaDescription: string }> = {
  "jardineria-general": {
    metaTitle: "Jardinería General en Salamanca",
    metaDescription: "Servicio profesional de jardinería y mantenimiento de jardines en Salamanca. Podas, riego y tratamientos. Llama al 615 667 820.",
  },
  "cesped-artificial": {
    metaTitle: "Instalación Césped Artificial Salamanca",
    metaDescription: "Instaladores especializados en césped artificial en Salamanca. Presupuesto sin compromiso en 24h. Llámanos: 615 667 820.",
  },
  "limpieza-comunes": {
    metaTitle: "Limpieza Zonas Comunes Salamanca",
    metaDescription: "Limpieza profesional de zonas comunes en urbanizaciones y comunidades en Salamanca. Planes de mantenimiento periódico.",
  },
  "piscinas": {
    metaTitle: "Mantenimiento de Piscinas en Salamanca",
    metaDescription: "Mantenimiento integral de piscinas en Salamanca: control de agua, limpieza técnica e invernaje. Presupuesto gratis.",
  },
  "servicios-comunidades": {
    metaTitle: "Servicios para Comunidades en Salamanca",
    metaDescription: "Gestión integral de jardinería y piscinas para comunidades de vecinos en Salamanca. Contacta al 615 667 820.",
  },
  "urbanizaciones": {
    metaTitle: "Jardinería para Urbanizaciones en Salamanca",
    metaDescription: "Mantenimiento paisajístico a gran escala para urbanizaciones y residencias en Salamanca y alrededores.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = serviciosMeta[slug];
  if (!meta) return {};
  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
  };
}

export default async function ServicioPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const data = serviciosData[slug as keyof typeof serviciosData];

  if (!data) {
    notFound();
  }

  return (
    <main className="bg-cream min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/#servicios" className="inline-flex items-center gap-2 text-brand-green font-bold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Servicios
        </Link>

        {/* Header Hero */}
        <header className="mb-14">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-4">
            {data.tagline}
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-anthracite uppercase tracking-tighter leading-none mb-8">
            {data.title.split(' ').map((word, i) => (
              i % 2 !== 0 ? <span key={i} className="text-brand-green"> {word} </span> : <span key={i}>{word} </span>
            ))}
          </h1>
          <div className="w-24 h-2 bg-brand-green rounded-full mb-10" />
          
          <div className="relative w-full h-112 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-anthracite/70 via-transparent to-transparent" />
          </div>
        </header>

        <article className="prose prose-lg prose-slate max-w-none text-anthracite leading-relaxed mb-16">
          {/* Main Intro */}
          <p className="text-xl md:text-2xl font-medium text-slate-700 mb-12 border-l-4 border-brand-green pl-6">
            {data.content}
          </p>

          {/* Long Content Sections */}
          <div className="space-y-12 mb-16">
            {data.longContent.map((section, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-brand-green/10">
                <h2 className="text-2xl font-black text-anthracite mb-4 tracking-tight drop-shadow-sm">
                  {section.heading}
                </h2>
                <p className="text-slate-600 leading-relaxed text-[1.1rem]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Features / Bullet Points */}
          <div className="bg-auth-gradient-bg bg-anthracite rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative mb-16">
            <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-8 relative z-10">
              ¿Qué incluimos?
            </h3>
            <ul className="grid md:grid-cols-2 gap-6 relative z-10">
              {data.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 font-semibold text-slate-200 text-lg">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 mt-1 rounded-full bg-accent-green/20 text-accent-green">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Section */}
          {data.faqs && data.faqs.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-black text-brand-green uppercase tracking-widest mb-6">
                Preguntas Frecuentes
              </h3>
              <div className="space-y-6">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border-l-4 border-accent-green shadow-md">
                    <h4 className="font-bold text-anthracite text-xl mb-2">{faq.q}</h4>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* CTA Section */}
        <div className="bg-brand-green rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 border-8 border-white rounded-full" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 border-8 border-white rounded-full" />
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter relative z-10">
            ¿Hablamos sobre tu parcela?
          </h3>
          <p className="text-green-100 mb-10 text-xl max-w-2xl mx-auto relative z-10">
            Presupuesto personalizado en menos de 24 horas. Envíanos un WhatsApp o llámanos hoy mismo sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a
              href="https://wa.me/34615667820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-brand-green font-black px-10 py-5 rounded-2xl hover:bg-cream hover:scale-105 transition-all duration-300 text-sm uppercase tracking-widest shadow-xl"
            >
              Pedir Presupuesto
            </a>
            <a
              href="tel:+34615667820"
               className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-transparent border-2 border-white text-white font-black px-10 py-5 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300 text-sm uppercase tracking-widest"
            >
              615 667 820
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
