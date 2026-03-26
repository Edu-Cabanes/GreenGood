import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | GreenGood",
  description: "Política de Cookies de Jardinería GreenGood.",
};

export default function PoliticaCookies() {
  return (
    <div className="py-28 px-4 max-w-4xl mx-auto bg-cream">
      <h1 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-none mb-12">
        Política de <span className="text-brand-green">Cookies</span>
      </h1>
      
      <div className="prose prose-slate max-w-none text-anthracite leading-relaxed space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">¿Qué son las cookies?</h2>
          <p>
            En inglés, el término "cookie" significa galleta, pero en el ámbito de la navegación web, una "cookie" es algo completamente distinto. Cuando accede a nuestro Sitio Web, en el navegador de su dispositivo se almacena una pequeña cantidad de texto que se denomina "cookie". Este texto contiene información variada sobre su navegación, hábitos, preferencias, personalizaciones de contenidos, etc…
          </p>
          <p>
            Existen otras tecnologías que funcionan de manera similar y que también se usan para recopilar datos sobre tu actividad de navegación. Llamaremos "cookies" a todas estas tecnologías en su conjunto.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">¿Para qué se utilizan las cookies en esta web?</h2>
          <p>
            Las cookies son una parte esencial de cómo funciona el Sitio Web. El objetivo principal de nuestras cookies es mejorar su experiencia en la navegación. Por ejemplo, para recordar sus preferencias (idioma, país, etc.) durante la navegación y en futuras visitas. La información recogida en las cookies nos permite además mejorar la web, adaptarla a sus intereses como usuario, acelerar las búsquedas que realice, etc..
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">¿Para qué NO se utilizan las cookies en esta web?</h2>
          <p>
            En las cookies que utilizamos no se almacena información sensible de identificación personal como su nombre, dirección, tu contraseña, etc…
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">¿Quién utiliza la información almacenada en las cookies?</h2>
          <p>
            La información almacenada en las cookies de nuestro Sitio Web es utilizada exclusivamente por nosotros, a excepción de aquellas identificadas más adelante como "cookie de terceros", que son utilizadas y gestionadas por entidades externas que nos proporcionan servicios que mejoran la experiencia del usuario. Por ejemplo las estadísticas que se recogen sobre el número de visitas, el contenido que más gusta, etc…
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">¿Qué tipos de cookies se utilizan en esta página web?</h2>
          <p>Cada página web utiliza sus propias cookies. En nuestra web utilizamos las que se indican a continuación:</p>
          <h3 className="text-lg font-bold mt-4 mb-2">Según la entidad que lo gestiona:</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Cookies propias:</strong> Son aquellas que se envían al equipo terminal del Usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el Usuario.</li>
            <li><strong>Cookies de terceros:</strong> Son aquellas que se envían al equipo terminal del Usuario desde un equipo o dominio que no es gestionado por el editor.</li>
          </ul>
          <h3 className="text-lg font-bold mt-4 mb-2">Según su finalidad:</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Cookies técnicas:</strong> Son aquellas necesarias para la navegación y el buen funcionamiento de nuestro Sitio Web.</li>
            <li><strong>Cookies de análisis:</strong> Permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico.</li>
            <li><strong>Cookies de preferencias o personalización:</strong> Son aquellas que permiten recordar información para que el Usuario acceda al servicio con determinadas características.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">¿Cómo deshabilito y elimino la utilización de cookies?</h2>
          <p>
            Para restringir, bloquear o borrar las cookies de este Sitio Web (y las usada por terceros) puede hacerlo, en cualquier momento, modificando la configuración de su navegador. Tenga en cuenta que esta configuración es diferente en cada navegador.
          </p>
        </section>
      </div>
    </div>
  );
}
