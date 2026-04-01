import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import type { Metadata } from "next";

const locationData: Record<string, {
  name: string;
  title: string;
  metaDescription: string;
  intro: string;
  image: string;
  whyHere: { heading: string; paragraphs: string[] };
  advantages: string[];
  steps: string[];
  ctaText: string;
}> = {
  "salamanca": {
    name: "Salamanca",
    title: "Instalación de Césped Artificial en Salamanca Capital",
    metaDescription: "Expertos en instalar césped artificial en Salamanca ciudad. Patios, terrazas y jardines verdes todo el año. Presupuesto gratis: 615 667 820.",
    intro: "Somos especialistas en instalar césped artificial en Salamanca. Convertimos tu patio, terraza o jardín en un espacio verde que no necesita riego ni segar.",
    image: "/images/cesped-artificial-rollo.png",
    whyHere: {
      heading: "¿Por qué poner césped artificial en Salamanca capital?",
      paragraphs: [
        "En los chalets del Zurguén, los adosados de Pizarrales o las terrazas del centro, el césped natural suele dar muchos problemas. El clima de Salamanca es duro: veranos de mucho calor que secan la hierba y heladas constantes en invierno que la dejan fea durante meses.",
        "Llevamos más de 18 años trabajando en la capital y conocemos bien el terreno. No es lo mismo el suelo de las urbanizaciones nuevas del norte que los patios del casco antiguo. Sabemos qué preparación necesita cada suelo para que el drenaje funcione y el césped aguante impecable.",
        "Al final, ahorras en agua y en tiempo. Te olvidas de pasar el cortacésped los domingos y tienes un jardín que siempre se ve bien."
      ]
    },
    advantages: ["Ahorro real de agua en cada factura", "Sin segar ni abonar en todo el año", "Seguro para que jueguen niños y mascotas", "Colores que aguantan bien el sol de aquí"],
    steps: ["Medición y visita técnica gratuita", "Nivelación y limpieza del terreno", "Base de grava para un drenaje perfecto", "Instalación con juntas invisibles"],
    ctaText: "Vamos a cualquier barrio de Salamanca para ver tu espacio y darte presupuesto."
  },
  "santa-marta-de-tormes": {
    name: "Santa Marta de Tormes",
    title: "Césped Artificial en Santa Marta de Tormes",
    metaDescription: "Instalación profesional de césped artificial en Santa Marta de Tormes. Chalets, urbanizaciones y jardines. Presupuesto gratis: 615 667 820.",
    intro: "Instalación de césped artificial en chalets y urbanizaciones de Santa Marta de Tormes. Pide tu presupuesto personalizado sin compromiso.",
    image: "/images/instalador-cesped-artificial.png",
    whyHere: {
      heading: "Césped artificial para los jardines de Santa Marta",
      paragraphs: [
        "Santa Marta tiene muchísimas viviendas unifamiliares. En urbanizaciones como Los Cipreses o El Encinar, los jardines son el corazón de la casa, pero mantenerlos verdes cuesta mucho tiempo y dinero.",
        "Como estamos cerca del río Tormes, el suelo suele retener bastante humedad y pueden aparecer charcos en invierno. Por eso, en Santa Marta nos fijamos mucho en el drenaje. Preparamos una buena base de áridos para que el agua se vaya rápido y el césped no sufra.",
        "Al estar aquí al lado, nos desplazamos rápido para ver el jardín y empezar la obra cuando mejor te venga."
      ]
    },
    advantages: ["Base reforzada para evitar charcos", "Servicio rápido por proximidad", "Expertos en grandes urbanizaciones", "Césped resistente al uso diario"],
    steps: ["Estudio del drenaje actual", "Retirada del césped viejo si lo hay", "Capa de grava y zahorra compactada", "Colocación profesional"],
    ctaText: "Estamos muy cerca de Santa Marta. Llámanos para que vayamos a ver tu jardín."
  },
  "carbajosa-de-la-sagrada": {
    name: "Carbajosa de la Sagrada",
    title: "Césped Artificial en Carbajosa de la Sagrada",
    metaDescription: "Instaladores de césped artificial en Carbajosa de la Sagrada. Jardines, terrazas y piscinas. Presupuesto gratis: 615 667 820.",
    intro: "Diseño e instalación de jardines con césped artificial en Carbajosa. Modelos de alta gama con tacto natural y muy resistentes al sol y las heladas.",
    image: "/images/cesped-artificial-rollo.png",
    whyHere: {
      heading: "Césped artificial para Carbajosa de la Sagrada",
      paragraphs: [
        "Carbajosa ha crecido mucho con chalets y adosados nuevos. Muchas de estas parcelas tienen entre 100 y 300 metros, un tamaño ideal para poner césped artificial y olvidarse de las complicaciones del natural.",
        "El terreno en Carbajosa suele ser seco y con piedra, lo que viene muy bien para que el agua drene rápido. Aprovechamos esta ventaja para que la instalación sea más sencilla y eficiente.",
        "Es la opción favorita para los que tienen piscina. El jardín se mantiene limpio, sin barro ni restos de hierba que ensucien el agua."
      ]
    },
    advantages: ["Terreno ideal para un buen drenaje", "Perfecto para bordes de piscina", "No resbala y se limpia fácil", "La parcela se ve siempre ordenada"],
    steps: ["Medición y diseño del jardín", "Compactación del terreno", "Malla para que no salgan hierbas", "Sellado de juntas y acabado"],
    ctaText: "Hemos hecho muchas obras en Carbajosa. Contacta con nosotros para ver la tuya."
  },
  "villares-de-la-reina": {
    name: "Villares de la Reina",
    title: "Césped Artificial en Villares de la Reina",
    metaDescription: "Expertos en césped artificial en Villares de la Reina. Instalación profesional para chalets y parcelas. Presupuesto sin compromiso: 615 667 820.",
    intro: "Disfruta de un jardín verde en Villares de la Reina sin esfuerzo. Ahorra agua y gana tiempo con nuestra instalación profesional.",
    image: "/images/instalador-cesped-artificial.png",
    whyHere: {
      heading: "Césped artificial en los jardines de Villares",
      paragraphs: [
        "En Villares de la Reina hay parcelas bastante grandes. Mantener 200 metros de césped natural supone gastar mucha agua y pasar muchas horas cortando y cuidando la hierba.",
        "Poner césped artificial en jardines amplios sale muy a cuenta. El precio por metro se ajusta más y en un par de veranos has ahorrado tanto en agua y mantenimiento que la inversión está pagada.",
        "Además, si tienes perros, es la mejor solución. El césped aguanta bien las carreras, no se deforma y se limpia con un manguerazo. Es un material seguro y muy resistente."
      ]
    },
    advantages: ["Mejor precio en jardines grandes", "Seguro y resistente para perros", "Aguanta el trote diario sin problemas", "Fácil de limpiar con agua"],
    steps: ["Visita y valoración de la parcela", "Limpieza de raíces y malas hierbas", "Base de zahorra bien nivelada", "Instalación y ajuste perimetral"],
    ctaText: "Podemos ir a Villares cualquier día para ver tu parcela y darte presupuesto."
  },
  "cabrerizos": {
    name: "Cabrerizos",
    title: "Césped Artificial y Paisajismo en Cabrerizos",
    metaDescription: "Instalación de césped artificial en Cabrerizos. Soluciones para familias, piscinas y jardines de bajo mantenimiento. Llama: 615 667 820.",
    intro: "Césped artificial de gama alta en Cabrerizos. Ideal para familias con niños y piscinas. Un jardín suave y que recupera la forma al pisarlo.",
    image: "/images/cesped-artificial-rollo.png",
    whyHere: {
      heading: "Un jardín impecable en Cabrerizos",
      paragraphs: [
        "Cabrerizos es una zona de urbanizaciones donde muchas familias buscan disfrutar del aire libre. Nadie quiere que el jardín se convierta en un trabajo extra los fines de semana.",
        "En esta zona nos encontramos a veces con problemas de topos o malas hierbas que destrozan la pradera natural. Al poner césped artificial, instalamos debajo una malla profesional muy fuerte que frena estos problemas de raíz.",
        "Usamos modelos de césped con 'memoria'. Si pones una piscina hinchable encima o los niños juegan mucho, las fibras vuelven a su sitio con facilidad. Además, es muy suave al tacto para andar descalzo."
      ]
    },
    advantages: ["Olvídate de los topos y malas hierbas", "Césped que recupera la forma al pisarlo", "Tacto muy suave para ir descalzo", "Malla antihierbas de alta resistencia"],
    steps: ["Análisis del terreno y de problemas previos", "Tratamiento si hay mucha mala hierba", "Colocación de la malla protectora", "Ajuste del césped y acabado"],
    ctaText: "Tenemos clientes en todo Cabrerizos. Pídenos presupuesto para tu casa."
  },
  "pelabravo": {
    name: "Pelabravo",
    title: "Césped Artificial Instalado en Pelabravo",
    metaDescription: "Empresa local de césped artificial en Pelabravo. Cercanía, profesionalidad y los mejores materiales. Presupuesto sin compromiso: 615 667 820.",
    intro: "Empresa de jardinería instalada en la zona de Pelabravo. Servicio cercano y materiales de máxima calidad para tu jardín.",
    image: "/images/instalador-cesped-artificial.png",
    whyHere: {
      heading: "Césped artificial con un vecino de Pelabravo",
      paragraphs: [
        "Nuestra base está muy cerca de Pelabravo, así que somos prácticamente vecinos. Esto nos permite dar un servicio rápido y estar muy pendientes de cualquier detalle en la obra.",
        "Conocemos cada rincón del pueblo. Sabemos que el suelo cambia según la zona de la urbanización y adaptamos la preparación para que el césped quede bien asentado y no se mueva con el tiempo.",
        "Al ser locales, nuestra mejor publicidad es el boca a boca. Por eso nos esmeramos al máximo en cada jardín que hacemos en el pueblo."
      ]
    },
    advantages: ["Servicio de confianza y cercanía", "Atención rápida si nos necesitas", "Trabajo bien hecho para nuestros vecinos", "Conocemos el terreno de la zona"],
    steps: ["Valoración técnica en tu casa", "Preparación de la base según tu suelo", "Instalación profesional del césped", "Revisión final contigo"],
    ctaText: "Al estar aquí al lado, podemos pasarnos en cualquier momento a ver tu parcela."
  },
  "aldeatejada": {
    name: "Aldeatejada",
    title: "Instaladores de Césped Artificial en Aldeatejada",
    metaDescription: "Césped artificial en Aldeatejada con instalación profesional. Parcelas y jardines transformados. Presupuesto gratis: 615 667 820.",
    intro: "Transformamos tu jardín en Aldeatejada con césped artificial muy natural. Presupuestos sin compromiso hechos por jardineros con 18 años de experiencia.",
    image: "/images/cesped-artificial-rollo.png",
    whyHere: {
      heading: "Jardines que aguantan el sol en Aldeatejada",
      paragraphs: [
        "Aldeatejada es una zona con parcelas muy buenas para disfrutar, pero a veces el sol y el viento castigan mucho al césped natural. Mantenerlo verde en agosto es una pelea constante contra el clima.",
        "Los modelos que instalamos tienen una protección solar muy fuerte. No pierden el color ni se estropean aunque les dé el sol todo el día. El jardín se ve igual de bien en enero que en julio.",
        "Trabajamos con una logística organizada para que la obra en Aldeatejada sea rápida y limpia, molestando lo menos posible en el día a día de tu casa."
      ]
    },
    advantages: ["Color que no se apaga con el sol", "Instalación rápida y muy limpia", "Mantenimiento casi inexistente", "Ideal para casas de obra nueva"],
    steps: ["Medición y presupuesto cerrado", "Movimiento de tierras y nivelación", "Compactado y drenaje técnico", "Instalación final del césped"],
    ctaText: "Consúltanos y vamos a ver tu jardín en Aldeatejada cuando tú puedas."
  },
  "calvarrasa-de-abajo": {
    name: "Calvarrasa de Abajo",
    title: "Césped Artificial en Calvarrasa de Abajo",
    metaDescription: "Instalación de césped artificial en Calvarrasa de Abajo. Jardines y fincas transformadas sin mantenimiento. Llama: 615 667 820.",
    intro: "Instalamos césped artificial de calidad en Calvarrasa de Abajo. Fincas y jardines con un acabado profesional que dura años sin mantenimiento.",
    image: "/images/instalador-cesped-artificial.png",
    whyHere: {
      heading: "Césped resistente para las fincas de Calvarrasa",
      paragraphs: [
        "En Calvarrasa de Abajo las parcelas suelen ser grandes. A veces no hace falta poner césped en toda la finca, sino crear una zona verde bonita cerca de la casa donde poder estar cómodos.",
        "El césped artificial es muy práctico para estas fincas. Puedes combinarlo con grava decorativa o piedra en el resto de la parcela. Así reduces el coste y el mantenimiento al mínimo, pero tienes una zona de recreo perfecta.",
        "Si tienes animales, es la mejor opción. No se manchan de barro, no hay agujeros y el césped se limpia muy fácil. Es resistente y seguro para ellos."
      ]
    },
    advantages: ["Combinamos césped y grava para ahorrar", "Resistente si tienes animales sueltos", "Perfecto para grandes fincas rústicas", "Ahorro total de agua en el jardín"],
    steps: ["Estudio de la parcela y las zonas", "Preparación del suelo principal", "Instalación del césped elegido", "Remates y limpieza de la finca"],
    ctaText: "Trabajamos a diario por Calvarrasa. Llámanos y te damos presupuesto sin compromiso."
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(locationData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = locationData[slug];
  if (!data) return {};
  
  return {
    title: `${data.title} | GreenGood`,
    description: data.metaDescription,
  };
}

export default async function LocationLandingPage({ params }: Props) {
  const { slug } = await params;
  const data = locationData[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="bg-cream min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/zona-cobertura" className="inline-flex items-center gap-2 text-brand-green font-bold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Zonas
        </Link>

        {/* Hero Section */}
        <header className="mb-14">
          <p className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Servicio Local en {data.name}
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-tight mb-8">
            {data.title}
          </h1>
          <div className="w-24 h-2 bg-brand-green rounded-full mb-10" />
          
          <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={data.image}
              alt={`Césped Artificial en ${data.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-anthracite/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white font-black text-xl lg:text-3xl drop-shadow-md max-w-lg">
              El verde perfecto en {data.name} los 365 días del año.
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-lg prose-slate max-w-none text-anthracite leading-relaxed mb-16">
          <p className="text-xl md:text-2xl font-medium text-slate-700 mb-8 border-l-4 border-brand-green pl-6">
            {data.intro}
          </p>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-brand-green/10 mb-12">
            <h2 className="text-2xl font-black text-anthracite mb-4 tracking-tight">
              {data.whyHere.heading}
            </h2>
            {data.whyHere.paragraphs.map((p, idx) => (
              <p key={idx} className="mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-anthracite text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold uppercase tracking-widest text-accent-green mb-4">Ventajas</h3>
              <ul className="space-y-3">
                {data.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent-green shrink-0 mt-0.5">✓</span>
                    {adv}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-brand-green/20 bg-cream p-8 rounded-3xl shadow-sm">
               <h3 className="text-xl font-bold uppercase tracking-widest text-brand-green mb-4">La instalación</h3>
               <ul className="space-y-3 font-medium text-slate-700">
                {data.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-brand-green font-black shrink-0">{idx + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* CTA */}
        <div className="bg-brand-green rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter relative z-10">
            Pide Presupuesto en {data.name}
          </h3>
          <p className="text-green-100 mb-10 text-xl max-w-2xl mx-auto relative z-10">
            {data.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a
              href={`https://wa.me/34615667820?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20para%20instalaci%C3%B3n%20de%20c%C3%A9sped%20artificial%20en%20${data.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-brand-green font-black px-10 py-5 rounded-2xl hover:bg-cream hover:scale-105 transition-all duration-300 text-sm uppercase tracking-widest shadow-xl"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar
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
