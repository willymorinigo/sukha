import React, { useState, useEffect } from 'react';
import { Home, Users, Stethoscope, Image, MessageCircle } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      
      const nosotrosEl = document.getElementById('nosotros');
      const especialidadesEl = document.getElementById('especialidades');
      const galeriaEl = document.getElementById('galeria');
      const contactoEl = document.getElementById('contacto');

      if (contactoEl && scrollPos >= contactoEl.offsetTop) {
        setActiveTab('contacto');
      } else if (galeriaEl && scrollPos >= galeriaEl.offsetTop) {
        setActiveTab('galeria');
      } else if (especialidadesEl && scrollPos >= especialidadesEl.offsetTop) {
        setActiveTab('especialidades');
      } else if (nosotrosEl && scrollPos >= nosotrosEl.offsetTop) {
        setActiveTab('nosotros');
      } else {
        setActiveTab('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio', href: '#', icon: Home },
    { id: 'nosotros', label: 'Nosotros', href: '#nosotros', icon: Users },
    { id: 'especialidades', label: 'Servicios', href: '#especialidades', icon: Stethoscope },
    { id: 'galeria', label: 'Galería', href: '#galeria', icon: Image },
    { id: 'contacto', label: 'Contacto', href: '#contacto', icon: MessageCircle, isPrimary: true },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1C2A29]/95 backdrop-blur-xl border-t border-[#1B9390]/30 text-white shadow-[0_-5px_25px_rgba(0,0,0,0.4)] pb-safe">
      <nav className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          if (item.isPrimary) {
            return (
              <a
                key={item.id}
                href={item.href}
                className="flex flex-col items-center justify-center -mt-5 group"
                aria-label={item.label}
              >
                <div className="w-12 h-12 rounded-full bg-[#1B9390] text-white flex items-center justify-center shadow-lg shadow-[#1B9390]/50 border-2 border-[#1C2A29] group-active:scale-90 transition-transform touch-manipulation">
                  <Icon className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[10px] font-semibold text-[#ADD8D7] mt-0.5">
                  {item.label}
                </span>
              </a>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full py-1 transition-all touch-manipulation active:scale-95 ${
                isActive ? 'text-[#ADD8D7]' : 'text-white/60 hover:text-white/90'
              }`}
              aria-label={item.label}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-[#ADD8D7]' : ''}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#1B9390] rounded-full" />
                )}
              </div>
              <span className={`text-[10px] mt-1 font-medium ${isActive ? 'font-bold text-[#ADD8D7]' : ''}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};
