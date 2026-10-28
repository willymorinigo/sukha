import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { name: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { name: 'Especialidades', href: '#especialidades', id: 'especialidades' },
    { name: 'Galería', href: '#galeria', id: 'galeria' },
    { name: 'Testimonios', href: '#testimonios', id: 'testimonios' },
    { name: 'Ubicación', href: '#ubicacion', id: 'ubicacion' },
    { name: 'Búsquedas Laborales', href: '#busquedas', id: 'busquedas' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Header background state
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlight tracking
      const scrollPosition = window.scrollY + 160;
      let currentSection = '';

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = link.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-[#FCFAED]/95 backdrop-blur-md shadow-md border-b border-[#1B9390]/15 py-3 sm:py-3.5'
          : 'bg-gradient-to-b from-[#1C2A29]/80 via-[#1C2A29]/40 to-transparent text-white py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract */}
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Logo */}
          <a
            href="#"
            className="flex items-center group shrink-0 transition-transform active:scale-98"
            aria-label="Sukha Desarrollo Infantil - Inicio"
          >
            <img
              src="/assets/aistudio/logo_4347fbd6.svg"
              alt="Sukha Logo"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled
                  ? 'h-10 sm:h-12 filter drop-shadow-xs'
                  : 'h-12 sm:h-16 brightness-0 invert filter drop-shadow-md hover:scale-105'
              }`}
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`whitespace-nowrap shrink-0 transition-all duration-200 px-3.5 py-1.5 rounded-full text-xs xl:text-sm ${
                    isActive
                      ? scrolled
                        ? 'bg-[#1B9390] text-white font-semibold shadow-sm ring-1 ring-[#1B9390]'
                        : 'bg-white/25 text-white font-semibold shadow-sm backdrop-blur-md ring-1 ring-white/40'
                      : scrolled
                      ? 'text-[#1C2A29]/85 hover:text-[#1B9390] hover:bg-[#1B9390]/10 font-medium'
                      : 'text-white/90 hover:text-white hover:bg-white/15 font-medium'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#contacto"
              className={`inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold rounded-xl text-white bg-[#1B9390] hover:bg-[#157977] shadow-sm transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 active:scale-95 touch-manipulation ${
                scrolled ? 'shadow-md' : 'shadow-lg shadow-[#1B9390]/30'
              }`}
            >
              <MessageCircle className="w-4 h-4 fill-current text-white/20" />
              <span>Contacto WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors active:scale-90 touch-manipulation ${
                scrolled
                  ? 'text-[#1C2A29] hover:bg-[#1B9390]/10'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFAED]/98 backdrop-blur-xl border-b border-[#1B9390]/20 shadow-2xl px-6 py-5 mt-2 animate-fadeIn text-[#1C2A29]">
          <div className="flex flex-col space-y-2 text-base font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 px-3 rounded-xl flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-[#1B9390]/15 text-[#1B9390] font-bold border-l-4 border-[#1B9390]'
                      : 'text-[#1C2A29] hover:text-[#1B9390] hover:bg-[#1B9390]/5 border-b border-gray-100/60'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className={isActive ? 'text-[#1B9390] font-bold' : 'text-gray-400 text-xs'}>
                    {isActive ? '●' : '→'}
                  </span>
                </a>
              );
            })}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold bg-[#1B9390] text-white shadow-md active:scale-95 transition-all touch-manipulation"
              >
                <MessageCircle className="w-4 h-4" />
                Contacto por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
