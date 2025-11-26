import React, { useEffect, useRef, useState } from 'react';

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contato" className="py-24 md:py-32 bg-white text-brand-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Info */}
          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-10 text-brand-black">
              Inicie uma <br /> conversa.
            </h2>
            
            <div className="space-y-12">
              <div className="flex flex-col border-l border-brand-black/20 pl-6">
                <span className="text-xs uppercase tracking-widest text-brand-charcoal/50 mb-2">Escritório Central</span>
                <span className="font-serif text-2xl text-brand-black">Av. Paulista, 1230</span>
                <span className="text-brand-charcoal">São Paulo, SP - Brasil</span>
              </div>

              <div className="flex flex-col border-l border-brand-black/20 pl-6">
                <span className="text-xs uppercase tracking-widest text-brand-charcoal/50 mb-2">Contato Direto</span>
                <a href="mailto:contato@aguiarchabudet.com.br" className="font-serif text-2xl text-brand-black hover:text-brand-gold transition-colors">
                  contato@aguiarchabudet.com
                </a>
                <span className="text-brand-charcoal">+55 11 3000-0000</span>
              </div>
            </div>
          </div>

          {/* Form - Sharp Lines */}
          <form className={`space-y-8 pt-4 ${isVisible ? 'fade-in-up delay-200' : 'opacity-0'}`} onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <label className="block text-xs font-bold uppercase tracking-widest text-brand-black mb-2">Nome</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b-2 border-brand-charcoal/20 py-4 text-brand-black focus:outline-none focus:border-brand-black transition-colors rounded-none placeholder-brand-charcoal/30"
                placeholder="Nome completo"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-brand-black mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b-2 border-brand-charcoal/20 py-4 text-brand-black focus:outline-none focus:border-brand-black transition-colors rounded-none placeholder-brand-charcoal/30"
                  placeholder="Seu melhor email"
                />
              </div>
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-brand-black mb-2">Telefone</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b-2 border-brand-charcoal/20 py-4 text-brand-black focus:outline-none focus:border-brand-black transition-colors rounded-none placeholder-brand-charcoal/30"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-xs font-bold uppercase tracking-widest text-brand-black mb-2">Mensagem</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b-2 border-brand-charcoal/20 py-4 text-brand-black focus:outline-none focus:border-brand-black transition-colors rounded-none placeholder-brand-charcoal/30 resize-none"
                placeholder="Descreva brevemente sua demanda"
              ></textarea>
            </div>

            <div className="pt-8">
              <button 
                type="submit"
                className="bg-brand-black text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-white transition-all duration-300 w-full md:w-auto"
              >
                Enviar Solicitação
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};