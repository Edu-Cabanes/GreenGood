import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accesibilidad | GreenGood",
  description: "Declaración de accesibilidad web de Jardinería GreenGood.",
};

export default function Accesibilidad() {
  return (
    <div className="py-28 px-4 max-w-4xl mx-auto bg-cream">
      <h1 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-none mb-12">
        Declaración de <span className="text-brand-green">Accesibilidad</span>
      </h1>
      
      <div className="prose prose-slate max-w-none text-anthracite leading-relaxed space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Compromiso</h2>
          <p>
            <strong>DAVID BARBERO CARDOSO</strong> se ha comprometido a hacer accesible su sitio web, de conformidad con el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público y las directrices WCAG 2.1 del W3C.
          </p>
          <p>
            La presente declaración de accesibilidad se aplica al sitio web <strong>https://jardineriagreengood.es</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Situación de Cumplimiento</h2>
          <p>
            Este sitio web es <strong>parcialmente conforme</strong> con el RD 1112/2018 y las directrices WCAG 2.1 en su nivel AA debido a las excepciones y a la falta de conformidad de los aspectos que se indican a continuación.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Contenido no accesible</h2>
          <p>El contenido que se recoge a continuación no es accesible por lo siguiente:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Falta de conformidad:</strong> Podrían existir algunos documentos en formato PDF que no cumplen íntegramente todos los requisitos de accesibilidad.</li>
            <li>Podría existir algún texto con contraste insuficiente, aunque se ha priorizado en su mayoría el alto contraste entre la tipografía <em>(Anthracite)</em> y el fondo <em>(Cream/White)</em>.</li>
            <li><strong>Carga desproporcionada:</strong> No aplica.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Preparación de la Declaración</h2>
          <p>
            La presente declaración fue preparada con el lanzamiento del rediseño tecnológico del prototipo corporativo. El método empleado para preparar la declaración ha sido una autoevaluación llevada a cabo por el desarrollador.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Comunicaciones, quejas y sugerencias</h2>
          <p>
            Puede realizar comunicaciones sobre requisitos de accesibilidad (artículo 10.2.a) del RD 1112/2018) como por ejemplo:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Informar sobre cualquier posible <strong>incumplimiento</strong> por parte de este sitio web.</li>
            <li>Transmitir otras <strong>dificultades de acceso</strong> al contenido.</li>
            <li>Formular cualquier otra <strong>consulta o sugerencia de mejora</strong> relativa a la accesibilidad del sitio web.</li>
          </ul>
          <p>
            A través de la dirección de correo electrónico <strong>barberocardosodavid@gmail.com</strong> o el teléfono <strong>+34 615 667 820</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
