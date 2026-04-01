import Link from "next/link";
import Image from "next/image";

const mainLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Blog", href: "/#blog" },
  { label: "Zonas de Cobertura", href: "/zona-cobertura" },
];

const legalLinks = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Política de Privacidad", href: "/politica-privacidad" },
  { label: "Política de Cookies", href: "/cookies" },
  { label: "Accesibilidad", href: "/accesibilidad" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-anthracite text-slate-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="GreenGood Logo"
                  fill
                  sizes="40px"
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                GREEN<span className="text-accent-green">GOOD</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4 text-slate-400">
              Especialistas en <span className="text-white font-medium">jardinería profesional</span> en Salamanca y alrededores con más de 18 años de experiencia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Navegación
            </h3>
            <ul className="flex flex-col gap-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-accent-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                     href={link.href}
                     className="text-sm hover:text-accent-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Contacto
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://maps.google.com/?cid=10520740929451458510"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-green transition-colors"
              >
                Salamanca y alrededores
              </a>
              <p>Lunes a Viernes: 9:00 - 19:00</p>
              <a
                href="https://wa.me/34615667820?text=Hola!%20Vengo%20de%20la%20web%20y%20me%20gustar%C3%ADa%20haceros%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-accent-green transition-colors font-bold mt-2"
              >
                WhatsApp directo →
              </a>
              <a
                href="https://www.instagram.com/jardineriagreengood?igsh=MTEybmY1MWx6ZGwzcQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-accent-green transition-colors font-bold mt-2"
              >
                Síguenos en Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © {year} GreenGood — Todos los derechos reservados.
          </p>
          <p className="text-slate-600">
            Diseño Profesional
          </p>
        </div>
      </div>
    </footer>
  );
}
