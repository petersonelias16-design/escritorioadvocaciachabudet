import React, { useEffect, useRef, useState } from 'react';
import { PracticeArea } from '../types';

const practices: PracticeArea[] = [
  {
    id: 'corporativo',
    title: 'Direito Corporativo',
    description: 'Blindagem jurídica para operações complexas, fusões e governança.',
    details: ['M&A', 'Compliance', 'Contratos']
  },
  {
    id: 'tributario',
    title: 'Gestão Tributária',
    description: 'Eficiência fiscal e defesa vigorosa em contenciosos administrativos.',
    details: ['Planejamento', 'Defesa Adm.', 'Recuperação']
  },
  {
    id: 'civil',
    title: 'Contencioso Estratégico',
    description: 'Atuação em disputas de alto valor com foco em resolução definitiva.',
    details: ['Arbitragem', 'Responsabilidade Civil', 'Disputas Societárias']
  },
  {
    id: 'patrimonial',
    title: 'Planejamento Sucessório',
    description: 'Arquitetura legal para a preservação de patrimônio e legado familiar.',
    details: ['Holdings', 'Testamentos', 'Proteção Patrimonial']
  }
];

export const Expertise: React.FC = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="atuacao" className="py-24 bg-brand-graphite text-brand-grey border-y border-brand-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className={`mb-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest-xl block mb-4">Áreas de Atuação</span>
          <h2 className="font-serif text-5xl md:text-6xl text-white font-bold max-w-2xl leading-none">
            Expertise Técnica & Visão de Negócio.
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-charcoal/30 border border-brand-charcoal/30 ${isVisible ? 'fade-in-up delay-200' : 'opacity-0'}`}>
          {practices.map((practice) => (
            <div 
              key={practice.id} 
              className="bg-brand-graphite p-10 md:p-12 hover:bg-[#222] transition-colors duration-500 group flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-brand-gold transition-colors duration-300">
                  {practice.title}
                </h3>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
                  {practice.description}
                </p>
              </div>
              
              <ul className="space-y-3 pt-6 border-t border-white/5">
                {practice.details.map((detail, idx) => (
                  <li key={idx} className="text-xs uppercase tracking-wider text-white/70 flex items-center">
                    <span className="w-1 h-1 bg-brand-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};