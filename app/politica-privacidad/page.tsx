import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | GreenGood",
  description: "Política de Privacidad de Jardinería GreenGood.",
};

export default function PoliticaPrivacidad() {
  return (
    <div className="py-28 px-4 max-w-4xl mx-auto bg-cream">
      <h1 className="text-4xl md:text-5xl font-black text-anthracite uppercase tracking-tighter leading-none mb-12">
        Política de <span className="text-brand-green">Privacidad</span>
      </h1>
      
      <div className="prose prose-slate max-w-none text-anthracite leading-relaxed space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Identidad del Responsable</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Responsable:</strong> DAVID BARBERO CARDOSO.</li>
            <li><strong>NIF:</strong> 70901357Q</li>
            <li><strong>Domicilio:</strong> CALLE SOL, 37181 PELABRAVO SALAMANCA, – España.</li>
            <li><strong>Correo electrónico:</strong> barberocardosodavid@gmail.com</li>
            <li><strong>Sitio Web:</strong> <a href="https://jardineriagreengood.es">https://jardineriagreengood.es</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Principios aplicados en el tratamiento de datos</h2>
          <p>En el tratamiento de sus datos personales, el Titular aplicará los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos (RGPD):</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Principio de licitud, lealtad y transparencia:</strong> El Titular siempre requerirá el consentimiento para el tratamiento de los datos personales que puede ser para uno o varios fines específicos sobre los que el Titular informará al Usuario previamente con absoluta transparencia.</li>
            <li><strong>Principio de minimización de datos:</strong> El Titular solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.</li>
            <li><strong>Principio de limitación del plazo de conservación:</strong> El Titular mantendrá los datos personales recabados durante el tiempo estrictamente necesario.</li>
            <li><strong>Principio de integridad y confidencialidad:</strong> Los datos personales recabados serán tratados de tal manera que su seguridad, confidencialidad e integridad está garantizada.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Obtención de datos personales</h2>
          <p>
            Para navegar por el sitio Web no es necesario que facilite ningún dato personal.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Derechos</h2>
          <p>El Titular le informa que sobre sus datos personales tiene derecho a:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Solicitar el acceso a los datos almacenados.</li>
            <li>Solicitar una rectificación o la supresión.</li>
            <li>Solicitar la limitación de su tratamiento.</li>
            <li>Oponerse al tratamiento.</li>
          </ul>
          <p>
            El ejercicio de estos derechos es personal y por tanto debe ser ejercido directamente por el interesado, solicitándolo directamente al Titular mediante fotocopia del Documento Nacional de Identidad o equivalente a la dirección de correo electrónico: barberocardosodavid@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Finalidad del tratamiento de datos personales</h2>
          <p>
            Cuando usted se conecta al Sitio Web para mandar un correo al Titular, se suscribe a su boletín está facilitando información de carácter personal de la que el responsable es el Titular. Esta información puede incluir datos de carácter personal como pueden ser su dirección IP, nombre y apellidos, dirección física, dirección de correo electrónico, número de teléfono, y otra información. Al facilitar esta información, da su consentimiento para que su información sea recopilada, utilizada, gestionada y almacenada por — DAVID BARBERO CARDOSO —
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Seguridad de los datos personales</h2>
          <p>
            Para proteger sus datos personales, el Titular toma todas las precauciones razonables y sigue las mejores prácticas de la industria para evitar su pérdida, mal uso, acceso indebido, divulgación, alteración o destrucción de los mismos. El Titular informa al Usuario de que sus datos personales no serán cedidos a terceras organizaciones, con la salvedad de que dicha cesión de datos esté amparada en una obligación legal.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 uppercase tracking-widest text-brand-green">Navegación Web</h2>
          <p>
            Al navegar por el Sitio Web se pueden recoger datos no identificativos, que pueden incluir, la dirección IP, geolocalización, un registro de cómo se utilizan los servicios y sitios, hábitos de navegación y otros datos que no pueden ser utilizados para identificarle.
          </p>
        </section>
      </div>
    </div>
  );
}
