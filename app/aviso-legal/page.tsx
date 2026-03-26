import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | GreenGood",
  description: "Aviso legal de Jardinería GreenGood.",
};

export default function AvisoLegal() {
  return (
    <div className="py-28 px-4 max-w-4xl mx-auto bg-cream">
      <h1 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-none mb-12">
        Aviso <span className="text-brand-green">Legal</span>
      </h1>
      
      <div className="prose prose-slate max-w-none text-anthracite leading-relaxed space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Identificación y Titularidad</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, el Titular expone sus datos identificativos:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Titular:</strong> DAVID BARBERO CARDOSO.</li>
            <li><strong>NIF:</strong> 70901357Q</li>
            <li><strong>Domicilio:</strong> CALLE SOL, 37181 PELABRAVO SALAMANCA, – España.</li>
            <li><strong>Correo electrónico:</strong> barberocardosodavid@gmail.com</li>
            <li><strong>Sitio Web:</strong> <a href="https://jardineriagreengood.es">https://jardineriagreengood.es</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Condiciones de Uso</h2>
          <p>
            La utilización del Sitio Web le otorga la condición de Usuario, e implica la aceptación completa de todas las cláusulas y condiciones de uso incluidas en el Aviso Legal. Si no estuviera conforme con todas y cada una de estas cláusulas y condiciones absténgase de utilizar el Sitio Web.
          </p>
          <p>
            El acceso al Sitio Web no supone, en modo alguno, el inicio de una relación comercial con el Titular. A través del Sitio Web, el Titular le facilita el acceso y la utilización de diversos contenidos que el Titular y/o sus colaboradores han publicado por medio de Internet.
          </p>
          <p>
            A tal efecto, está obligado y comprometido a NO utilizar cualquiera de los contenidos del Sitio Web con fines o efectos ilícitos, prohibidos en este Aviso Legal o por la legislación vigente, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los contenidos, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático propios o contratados por el Titular, de otros usuarios o de cualquier usuario de Internet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Medidas de seguridad</h2>
          <p>
            Los datos personales que facilite al Titular pueden ser almacenados en bases de datos automatizadas o no, cuya titularidad corresponde en exclusiva al Titular, que asume todas las medidas de índole técnica, organizativa y de seguridad que garantizan la confidencialidad, integridad y calidad de la información contenida en las mismas de acuerdo con lo establecido en la normativa vigente en protección de datos.
          </p>
          <p>
            No obstante, debe ser consciente de que las medidas de seguridad de los sistemas informáticos en Internet no son enteramente fiables y que, por tanto el Titular no puede garantizar la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos (software y hardware) del Usuario o en sus documentos electrónicos y ficheros contenidos en los mismos aunque el Titular pone todos los medios necesarios y toma las medidas de seguridad oportunas para evitar la presencia de estos elementos dañinos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Contenidos</h2>
          <p>
            El Titular ha obtenido la información, el contenido multimedia y los materiales incluidos en el Sitio Web de fuentes que considera fiables, pero, si bien ha tomado todas las medidas razonables para asegurar que la información contenida es correcta, el Titular no garantiza que sea exacta, completa o actualizada. El Titular declina expresamente cualquier responsabilidad por error u omisión en la información contenida en las páginas del Sitio Web.
          </p>
          <p>
            Queda prohibido transmitir o enviar a través del Sitio Web cualquier contenido ilegal o ilícito, virus informáticos, o mensajes que, en general, afecten o violen derechos del Titular o de terceros.
          </p>
          <p>
            El Titular se reserva el derecho a modificar, suspender, cancelar o restringir el contenido del Sitio Web, los vínculos o la información obtenida a través del Sitio Web, sin necesidad de previo aviso. El Titular no es responsable de los daños y perjuicios que pudieran derivarse de la utilización de la información del Sitio Web.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Política de cookies</h2>
          <p>
            El Titular obtiene y conserva la siguiente información acerca de los visitantes del Sitio Web: El nombre de dominio del proveedor (PSI) y/o dirección IP, la fecha y hora de acceso, la dirección de Internet origen del enlace, y el número de visitantes diarios de cada sección. La información obtenida es totalmente anónima, y en ningún caso puede ser asociada a un Usuario concreto e identificado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Enlaces a otros sitios Web</h2>
          <p>
            El Titular puede proporcionarle acceso a sitios Web de terceros mediante enlaces con la finalidad exclusiva de informar sobre la existencia de otras fuentes de información en Internet. Estos enlaces no suponen en ningún caso una sugerencia o recomendación, que están fuera del control del Titular.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Propiedad intelectual e industrial</h2>
          <p>
            Todos los derechos están reservados. Todo acceso a este Sitio Web está sujeto a las siguientes condiciones: la reproducción, almacenaje permanente y la difusión de los contenidos o cualquier otro uso que tenga finalidad pública o comercial queda expresamente prohibida sin el consentimiento previo expreso y por escrito del Titular.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Limitación de responsabilidad</h2>
          <p>
            La información y servicios incluidos o disponibles a través del Sitio Web pueden incluir incorrecciones o errores tipográficos. El Titular no declara ni garantiza que los servicios o contenidos sean interrumpidos o que estén libres de errores.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Jurisdicción</h2>
          <p>
            Este Aviso Legal se rige íntegramente por la legislación española.
          </p>
        </section>
      </div>
    </div>
  );
}
