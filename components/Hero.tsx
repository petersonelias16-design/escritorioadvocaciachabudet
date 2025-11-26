import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-brand-black">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg opacity-70"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop")',
          transform: `translateY(${offset * 0.5}px)`, // Parallax effect: moves slower than scroll
        }}
      ></div>
      
      {/* Strong Dark Overlays for Authority */}
      <div className="absolute inset-0 bg-brand-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-20">
        
        <div className="max-w-4xl border-l-2 border-brand-gold pl-8 md:pl-12 py-4 fade-in-up">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8 font-bold tracking-tight">
            Autoridade <br />
            <span className="text-white/40">&</span> Precisão.
          </h1>
          
          <p className="text-lg md:text-xl text-brand-grey/80 font-light max-w-lg leading-relaxed fade-in-up delay-200">
            Advocacia estratégica para quem exige resultados.
            Potência técnica aliada à inteligência jurídica.
          </p>

          <div className="mt-12 fade-in-up delay-300">
             <a href="#contato" className="inline-block bg-white text-brand-black hover:bg-brand-gold hover:text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300">
               Agendar Consulta
             </a>
          </div>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-12 text-white/30 hidden md:flex flex-col items-center gap-4 animate-pulse">
        <span className="text-[10px] uppercase tracking-widest rotate-90 origin-right translate-x-4">Scroll</span>
        <div className="h-16 w-[1px] bg-white/30 mt-8"></div>
      </div>
    </section>
  );
};