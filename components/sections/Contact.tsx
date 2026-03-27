"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { sendContactEmail } from "@/app/actions/email";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const message = "Hola! Me gustaría solicitar un presupuesto sin compromiso para mi jardín.";
  const whatsappHref = `https://wa.me/34615667820?text=${encodeURIComponent(message)}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    setIsLoading(false);

    if (result.success) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 8000);
    } else {
      setError(result.error || "Ocurrió un error al enviar el mensaje.");
    }
  };

  return (
    <section
      id="contacto"
      className="py-28 bg-brand-green px-4 text-white relative overflow-hidden"
    >
      {/* Background decorators */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green-200 font-bold text-sm tracking-[0.2em] uppercase mb-4">
            ¿Listo para transformar tu jardín?
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            Hablemos hoy <br /> mismo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          
          {/* Formulario Nativo */}
          <div>
            <h3 className="text-2xl font-black mb-6 uppercase tracking-widest">
              Solicita Presupuesto
            </h3>
            {isSubmitted ? (
              <div className="bg-white/20 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300 border border-green-300/30">
                <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-300" />
                <h4 className="text-xl font-bold mb-2">¡Recibido! 🌿</h4>
                <p className="text-green-100">Te contactaremos en menos de 24 horas a tu teléfono.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 flex items-center gap-3 text-sm animate-in slide-in-from-top-2">
                    <AlertCircle className="w-5 h-5 text-red-300" />
                    {error}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-green-100 mb-1 uppercase tracking-wider">Nombre</label>
                  <input required id="name" name="name" type="text" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all" placeholder="Ej. Comunidad Los Olivos" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-green-100 mb-1 uppercase tracking-wider">Teléfono</label>
                  <input required id="phone" name="phone" type="tel" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all" placeholder="600 000 000" />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-bold text-green-100 mb-1 uppercase tracking-wider">¿En qué podemos ayudarte?</label>
                  <textarea required id="description" name="description" rows={3} className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none" placeholder="Mantenimiento de piscina, instalación de césped..."></textarea>
                </div>
                <button 
                  disabled={isLoading}
                  type="submit" 
                  className="w-full bg-anthracite hover:bg-slate-800 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>Enviando... <Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : (
                    <>Enviar Mensaje <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* WhatsApp Directo */}
          <div className="flex flex-col items-center justify-center text-center p-8 border-t md:border-t-0 md:border-l border-white/10 h-full">
            <h3 className="text-2xl font-black mb-4 uppercase tracking-widest">
              O Vía Rápida
            </h3>
            <p className="text-green-100 mb-8 leading-relaxed max-w-sm">
              Sin esperas. Escríbenos directamente y mándanos fotos de tu jardín para un presupuesto flash.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 bg-white text-brand-green font-black text-sm uppercase tracking-widest px-8 py-5 rounded-xl hover:bg-green-50 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <p className="text-green-200 text-xs mt-6 opacity-80">
              Llámanos si es urgente: +34 615 667 820
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
