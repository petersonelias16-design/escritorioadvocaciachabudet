import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 border-t border-brand-charcoal/20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="font-serif text-2xl font-bold tracking-widest uppercase">
              Aguiar<span className="text-brand-gold">/</span>Chabudet
            </span>
          </div>
          <div className="flex space-x-8 mt-8 md:mt-0">
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">LinkedIn</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">Instagram</a>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest text-white/40">
          <p>© {new Date().getFullYear()} Aguiar Chabudet Advocacia. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};