import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'O Escritório', href: '#sobre' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Contato', href: '#contato' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-brand-black/95 backdrop-blur-md border-brand-charcoal py-4'
          : 'bg-transparent border-white/10 py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <span className={`font-serif text-lg tracking-[0.1em] uppercase font-bold transition-colors duration-300 text-white flex items-center gap-2`}>
            Aguiar<span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>Chabudet
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[11px] font-bold tracking-widest-xl uppercase relative hover:text-brand-gold transition-colors duration-300
                text-white/90
              `}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden focus:outline-none text-white hover:text-brand-gold transition-colors"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-black transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] md:hidden flex flex-col justify-center items-center space-y-10 ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileOpen(false)}
            className="text-white text-4xl font-serif font-medium hover:text-brand-gold transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};