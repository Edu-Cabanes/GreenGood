"use client";

import { Award, Briefcase, MapPin } from "lucide-react";

export default function Stats() {
  return (
    <section className="bg-brand-green py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <Briefcase className="w-12 h-12 mb-6 opacity-80" />
            <h3 className="text-5xl md:text-6xl font-black mb-2 tracking-tighter">18</h3>
            <p className="text-green-100 font-bold tracking-widest uppercase text-sm">Años de experiencia</p>
          </div>

          <div className="flex flex-col items-center pt-8 md:pt-0">
            <Award className="w-12 h-12 mb-6 opacity-80" />
            <h3 className="text-5xl md:text-6xl font-black mb-2 tracking-tighter">+1500</h3>
            <p className="text-green-100 font-bold tracking-widest uppercase text-sm">Proyectos acabados</p>
          </div>

          <div className="flex flex-col items-center pt-8 md:pt-0">
            <MapPin className="w-12 h-12 mb-6 opacity-80" />
            <h3 className="text-5xl md:text-6xl font-black mb-2 tracking-tighter">100%</h3>
            <p className="text-green-100 font-bold tracking-widest uppercase text-sm">Salamanca y Alrededores</p>
          </div>

        </div>
      </div>
    </section>
  );
}
