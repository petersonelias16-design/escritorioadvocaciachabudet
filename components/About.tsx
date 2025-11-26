import React, { useEffect, useRef, useState } from 'react';

export const About: React.FC = () => {
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
    <section ref={sectionRef} id="sobre" className="py-24 md:py-32 bg-brand-grey text-brand-black relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-brand-black/10 pb-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-serif text-5xl md:text-6xl text-brand-black font-bold">
            O Escritório
          </h2>
          <p className="mt-4 md:mt-0 text-brand-charcoal/60 text-xs font-bold uppercase tracking-widest-xl">
            Fundado em 2008
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Statement */}
          <div className={`lg:col-span-5 ${isVisible ? 'fade-in-up delay-200' : 'opacity-0'}`}>
             <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
               A lei é a ferramenta. <br />
               <span className="text-brand-gold">A estratégia é o diferencial.</span>
             </h3>
             <div className="w-20 h-1 bg-brand-black mb-8"></div>
          </div>

          {/* Detailed Text */}
          <div className={`lg:col-span-7 space-y-8 text-lg font-light text-brand-charcoal leading-relaxed ${isVisible ? 'fade-in-up delay-300' : 'opacity-0'}`}>
            <p>
              A <strong>Aguiar Chabudet</strong> nasceu para romper com o padrão passivo da advocacia tradicional. 
              Não entregamos apenas pareceres; entregamos caminhos. Nossa atuação é marcada pela antecipação de riscos 
              e pela construção agressiva de teses vencedoras.
            </p>
            <p>
              Em um cenário jurídico volátil, a clareza é o nosso maior ativo. Atendemos corporações e indivíduos 
              que necessitam de sigilo absoluto e uma defesa que não recua diante da complexidade.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-brand-black/10">
              <div>
                 <span className="block text-4xl font-serif font-bold text-brand-black mb-2">15+</span>
                 <span className="text-xs uppercase tracking-widest text-brand-charcoal/60">Anos de Excelência</span>
              </div>
              <div>
                 <span className="block text-4xl font-serif font-bold text-brand-black mb-2">98%</span>
                 <span className="text-xs uppercase tracking-widest text-brand-charcoal/60">Retenção de Clientes</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};