import React from 'react';
import { SUKHA_INFO } from '../data/sukhaData';
import { MapPin, Phone, Mail, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C2A29] text-white pt-16 pb-12 border-t border-[#1B9390]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand Logo Only in Pure White */}
          <div className="space-y-4">
            <a href="#" className="inline-block" aria-label="Sukha Desarrollo Infantil">
              <img
                src="/assets/aistudio/logo_4347fbd6.svg"
                alt="Sukha Logo"
                className="h-14 sm:h-16 w-auto object-contain brightness-0 invert"
              />
            </a>

            <p className="text-xs text-white/80 leading-relaxed pt-1">
              Un espacio de acompañamiento profesional, cercano y humano en el desarrollo infantil en City Bell.
            </p>

            <div className="pt-1">
              <span className="text-[11px] font-bold text-[#FCCBB5] uppercase tracking-wider block">
                "Tratamos a personas, no a diagnósticos."
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-['Outfit'] text-[#ADD8D7] uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Filosofía & Equipo Interdisciplinario
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">
                  Las 13 Especialidades
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galería de Fotos del Centro
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition-colors">
                  Testimonios de Padres
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-white transition-colors">
                  Ubicación & Mapa Interactivo
                </a>
              </li>
              <li>
                <a href="#busquedas" className="hover:text-white transition-colors">
                  Búsquedas Laborales & Cargar CV
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Habilitaciones y Obras Sociales */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-['Outfit'] text-[#ADD8D7] uppercase tracking-wider">
              Certificaciones
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1B9390] shrink-0 mt-0.5" />
                <span>Ministerio de Salud & ANDIS</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#DE7242] shrink-0 mt-0.5" />
                <span>Registro Nacional de Prestadores (RNP)</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#ADD8D7] shrink-0 mt-0.5" />
                <span>Atención Habilitada para todas las Obras Sociales</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-['Outfit'] text-[#ADD8D7] uppercase tracking-wider">
              Contacto City Bell
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1B9390] shrink-0 mt-0.5" />
                <span>{SUKHA_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1B9390] shrink-0" />
                <a href={`tel:${SUKHA_INFO.phone.replace(/\s+/g, '')}`} className="hover:underline">
                  {SUKHA_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#DE7242] shrink-0" />
                <a href={`mailto:${SUKHA_INFO.email}`} className="hover:underline truncate">
                  {SUKHA_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} Sukha Desarrollo Infantil. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Acompañando el desarrollo con corazón</span>
            <Heart className="w-3.5 h-3.5 text-[#DE7242] fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
