"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-brand-green/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-9 h-9">
            <Image
              src="/images/logo.png"
              alt="GreenGood Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-anthracite">
            GREEN<span className="text-brand-green">GOOD</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-anthracite">
          <Link href="/#servicios" className="hover:text-brand-green transition-colors">Servicios</Link>
          <Link href="/#nosotros" className="hover:text-brand-green transition-colors">Nosotros</Link>
          <Link 
            href="/#contacto" 
            className="bg-brand-green text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition-all"
          >
            Presupuesto
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-brand-green/10 p-4 flex flex-col gap-4 text-center font-bold uppercase">
          <Link href="/#servicios" onClick={() => setIsOpen(false)}>Servicios</Link>
          <Link href="/#nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link>
          <Link 
            href="/#contacto" 
            className="bg-brand-green text-white py-3 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            SOLICITAR PRESUPUESTO
          </Link>
        </div>
      )}
    </nav>
  );
}
