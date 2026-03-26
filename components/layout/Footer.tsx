import Link from "next/link";
import Image from "next/image";

const mainLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#galeria" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Blog", href: "/#blog" },
];

const legalLinks = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Política de Privacidad", href: "/politica-privacidad" },
  { label: "Política de Cookies", href: "/cookies" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-anthracite text-slate-400 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/jardineria.png.webp"
                  alt="GreenGood Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                GREEN<span className="text-brand-green">GOOD</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Especialistas en paisajismo y jardinería en Salamanca y Castilla y León desde hace más de 20 años.
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
                    className="text-sm hover:text-brand-green transition-colors"
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
                    className="text-sm hover:text-brand-green transition-colors"
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
              <p>Salamanca, Castilla y León</p>
              <p>Lunes a Viernes: 9:00 - 19:00</p>
              <a href="mailto:info@greengood.es" className="hover:text-white transition-colors">info@greengood.es</a>
              <a
                href="https://wa.me/34635687837"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-green hover:text-green-400 transition-colors font-bold mt-2"
              >
                WhatsApp directo →
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
