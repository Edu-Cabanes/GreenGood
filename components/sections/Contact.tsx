"use client";

export default function Contact() {
  const message = "Hola! Me gustaría solicitar un presupuesto sin compromiso para mi jardín.";
  const whatsappHref = `https://wa.me/34615667820?text=${encodeURIComponent(message)}`;

  return (
    <section
      id="contacto"
      className="py-28 bg-brand-green px-4 text-white relative overflow-hidden"
    >
      {/* Background decorators */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <p className="text-green-200 font-bold text-sm tracking-[0.2em] uppercase mb-4">
            ¿Listo para transformar tu jardín?
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
            Hablemos hoy <br /> mismo
          </h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Sin esperas ni formularios. Escríbenos directamente o llámanos para contarnos qué necesitas y prepararemos tu presupuesto al instante.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-brand-green font-black text-lg uppercase tracking-widest px-10 py-5 rounded-2xl hover:bg-green-50 transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>

          <a
            href="tel:+34615667820"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white font-black text-lg uppercase tracking-widest px-10 py-5 rounded-2xl hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            615 667 820
          </a>

          <a
            href="https://www.instagram.com/jardineriagreengood?igsh=MTEybmY1MWx6ZGwzcQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white font-black text-lg uppercase tracking-widest px-10 py-5 rounded-2xl hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </a>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          <iframe
            src="https://maps.google.com/maps?q=Jardineria%20Greengood,%20Salamanca&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full grayscale contrast-125 opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
