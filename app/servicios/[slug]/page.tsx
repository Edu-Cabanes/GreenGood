import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

const serviciosData = {
  "jardineria-general": {
    title: "Jardinería General en Salamanca",
    tagline: "Cuidamos tu jardín para que tú solo lo disfrutes",
    image: "/images/jardinero-plantando-salamanca.jpg",
    content: "Damos un servicio de jardinería profesional pensado para el clima de Salamanca. Nos encargamos de todo el mantenimiento para que tu jardín esté sano y con buen aspecto durante todo el año.",
    longContent: [
      {
        heading: "El clima de Salamanca y tu jardín",
        body: "El clima de aquí, con veranos muy secos e inviernos de heladas fuertes, es un reto para las zonas verdes. No sirve cualquier planta ni cualquier abono. Conocemos las especies que mejor aguantan en la meseta y los momentos exactos para podar o sembrar."
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
      { q: "¿Cada cuánto tiempo debéis venir a mantener el jardín?", a: "Depende directamente del diseño, las especies elegidas y la temporada del año. Lo mejor es que nos preguntes y estudiaremos tu caso para resolver cualquier duda." },
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
        heading: "Césped perfecto para el clima de aquí",
        body: "Con los veranos tan secos que tenemos en Salamanca, el césped artificial es la opción más práctica. Los modelos actuales no tienen nada que ver con las alfombras plásticas de antes. Ahora trabajamos con materiales que imitan muy bien la textura y el color de la hierba real, aguantan el uso y tienen un aspecto muy natural."
      },
      {
        heading: "Ahorro real en agua y tiempo",
        body: "Lo mejor es que te olvidas de regar a diario y de pasar el cortacésped los fines de semana. La factura del agua baja mucho y amortizas la instalación en poco tiempo. Es la solución ideal para chalets, terrazas o para el borde de la piscina."
      },
      {
        heading: "Nuestro proceso de instalación paso a paso",
        body: "Una mala instalación arruina el césped más caro. Nosotros prestamos especial atención a la preparación previa del terreno: vaciado, colocación de malla antihierbas profesional de alto gramaje, extendido de áridos y compactación perfecta para asegurar un drenaje óptimo aunque llueva torrencialmente. Por último, realizamos un sellado de juntas invisible y un lastrado con arena de sílice (si el modelo lo requiere) para que las fibras se mantengan erguidas durante años."
      }
    ],
    bulletPoints: ["Césped de última generación y máxima naturalidad", "Preparación técnica del terreno y drenaje experto", "Sellado de juntas completamente invisible", "Superficie 100% segura para niños y mascotas"],
    faqs: [
      { q: "¿Se calienta mucho en verano?", a: "Es cierto que retiene más calor que la hierba natural cuando le da el sol directo a 40 grados. Si quieres refrescarlo, basta con darle un manguerazo rápido. El agua se evapora y baja la temperatura de golpe para que puedas pisarlo descalzo." },
      { q: "¿Es necesario algún tipo de mantenimiento?", a: "El mantenimiento es mínimo. Basta con cepillarlo a contrapelo un par de veces al año para levantar las fibras en las zonas de más pisada, y mojarlo si quieres limpiarlo de polvo. Nosotros también ofrecemos servicios de puesta a punto si prefieres despreocuparte." },
      { q: "¿Drena bien si llueve mucho?", a: "Sí, todos nuestros modelos cuentan con orificios de drenaje en el backing (la base), capaces de evacuar grandes cantidades de agua. Además, la capa de grava y arena que preparamos debajo actúa como sumidero natural." }
    ]
  },
  "limpieza-comunes": {
    title: "Limpieza de Zonas Comunes y Accesos",
    tagline: "Entornos impecables, vecinos contentos",
    image: "/images/limpieza-zonas-comunes-greengood.jpg",
    content: "Realizamos servicios de limpieza profunda en áreas comunes de urbanizaciones y comunidades de vecinos. Nos encargamos de mantener pasos de carruajes, accesos y recintos exteriores libres de suciedad acumulada empleando métodos eficaces de limpieza.",
    longContent: [
      {
        heading: "Limpieza profesional de accesos",
        body: "Las rampas de garaje, portales y caminos exteriores son lo primero que se ve de una comunidad. Con el tiempo acumulan polvo y manchas que no salen barriendo. Usamos máquinas a presión para dejar los suelos limpios y sin rastro de suciedad o moho."
      },
      {
        heading: "Rápido y sin molestias",
        body: "Trabajamos con maquinaria profesional para eliminar manchas en pavimentos porosos. Lo hacemos de forma rápida para molestar lo mínimo a los vecinos."
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
    content: "Nos encargamos de que tu piscina esté siempre lista para el baño. Realizamos el control de parámetros y la puesta a punto necesaria para cumplir con los estándares de higiene.",
    longContent: [
      {
        heading: "Puesta a punto al empezar la temporada",
        body: "Abrir la piscina después del invierno en Salamanca requiere su proceso. Limpiamos las lonas, desinfectamos el vaso, revisamos filtros y bombas, y hacemos el tratamiento inicial para que el agua esté perfecta desde el primer día."
      },
      {
        heading: "Agua siempre limpia",
        body: "Mantener el agua equilibrada es clave para evitar problemas en la piel o que se ponga turbia. Hacemos mediciones constantes de pH y cloro, ajustando los niveles en cada visita."
      },
      {
        heading: "Invernaje para ahorrar",
        body: "Cuando termina el verano, dejamos todo listo para que la instalación no sufra con las heladas. No hace falta vaciar la piscina cada año si se hace un buen invernaje, lo que ahorra mucho dinero."
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
    content: "Simplificamos la gestión de tu comunidad unificando la jardinería y el cuidado de la piscina. Un servicio profesional que ahorra costes y asegura el buen estado de las zonas comunes.",
    longContent: [
      {
        heading: "Un solo contacto para todo",
        body: "A veces las comunidades tienen una empresa para la piscina, otra para los setos y otra para la limpieza. Eso suele dar líos de coordinación. Nosotros nos encargamos de todo el exterior para que el administrador y el presidente no tengan que preocuparse de nada."
      },
      {
        heading: "Equipo de confianza",
        body: "Asignamos al mismo equipo a la comunidad para que los vecinos ya los conozcan. Revisamos todo en cada visita: si vemos un aspersor que riega fuera o que falta agua en la piscina, lo arreglamos sobre la marcha."
      },
      {
        heading: "Presupuestos claros",
        body: "Estamos en contacto con el administrador para informar de todo lo que se hace. Al llevar nosotros todo el mantenimiento, podemos ajustar más el precio que si se contratan los servicios por separado."
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
    image: "/images/urbanizaciones-maquinaria.png",
    content: "Tenemos la maquinaria y el equipo necesarios para encargarnos de grandes extensiones, recintos residenciales y fincas rústicas. Hacemos desbroces, limpieza y mejora del paisaje con resultados profesionales.",
    longContent: [
      {
        heading: "Limpieza de parcelas y fincas",
        body: "Mantener una urbanización o una finca grande en los alrededores de Salamanca exige tiempo y maquinaria. Nos encargamos de las zonas comunes, avenidas y parcelas privadas para controlar el crecimiento de la hierba y que todo esté en orden."
      },
      {
        heading: "Desbroces de seguridad",
        body: "En primavera la hierba crece muy rápido en las parcelas vacías. Cuando llega el calor, ese pasto seco es un peligro por el riesgo de incendio. Hacemos desbroces con maquinaria profesional para dejar las zonas limpias y cumplir con la normativa municipal."
      },
      {
        heading: "Gestión de restos vegetales",
        body: "Al limpiar zonas tan grandes sale mucho matorral y restos de poda. Nosotros nos ocupamos de todo el volumen de residuos. Los procesamos o los llevamos directamente a la planta de tratamiento correspondiente."
      }
    ],
    bulletPoints: ["Desbroces preventivos de seguridad en grandes parcelas", "Cuidado de paseos peatonales y áreas de esparcimiento", "Maquinaria de gran rendimiento para agilizar el trabajo", "Carga, porte y gestión responsable de residuos orgánicos"],
    faqs: [
      { q: "¿Realizáis intervenciones de choque en parcelas abandonadas?", a: "Sí. Tenemos desbrozadoras profesionales y motosierras para recuperar terrenos o casas de campo que llevan años sin mantenimiento." },
      { q: "¿Retiráis vosotros los restos vegetales después del desbroce?", a: "Sí, nuestros presupuestos ya incluyen la retirada de toda la maleza y restos generados para llevarlos al punto limpio o planta de tratamiento." }
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
    metaDescription: "Instaladores especializados en césped artificial en Salamanca. Presupuesto rápido y sin compromiso. Llámanos: 615 667 820.",
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
      {data.faqs && data.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: data.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      )}
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
            {data.title}
          </h1>
          <div className="w-24 h-2 bg-brand-green rounded-full mb-10" />
          
          <div className="relative w-full h-112 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={data.image}
              alt={data.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
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
          <div className="bg-anthracite rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative mb-16">
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
            Presupuesto rápido y personalizado. Envíanos un WhatsApp o llámanos hoy mismo sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a
              href={`https://wa.me/34615667820?text=Hola!%20Me%20interesa%20el%20servicio%20de%20${encodeURIComponent(data.title)}.%20%C2%BFMe%20pod%C3%A9is%20dar%20m%C3%A1s%20informaci%C3%B3n?`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-brand-green font-black px-10 py-5 rounded-2xl hover:bg-cream hover:scale-105 transition-all duration-300 text-sm uppercase tracking-widest shadow-xl"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
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
