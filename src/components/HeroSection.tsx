import React from 'react';
import { MapPin, Heart, ShieldCheck, Stethoscope, ChevronDown, Users } from 'lucide-react';
import { SUKHA_INFO } from '../data/sukhaData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 pb-10 bg-[#1C2A29] text-white">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter contrast-[1.05]"
        >
          <source src="/assets/aistudio/hero_f810557b.mp4" type="video/mp4" />
        </video>

        {/* Multi-layered scrim for warm optical contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A29] via-[#1C2A29]/80 to-[#1C2A29]/60" />
        <div className="absolute inset-0 bg-[#1B9390]/20 mix-blend-multiply" />
      </div>

      {/* Hero Content Composition (Centered Editorial Layout with H1 & Subtitle) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center text-center">
        <div className="max-w-4xl mx-auto space-y-6 text-center py-4">
          {/* Kicker Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B9390]/30 backdrop-blur-sm border border-[#1B9390]/50 text-[#ADD8D7] text-xs sm:text-sm font-semibold uppercase tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            <Heart className="w-4 h-4 text-[#DE7242] fill-current" />
            <span>Sukha — Desarrollo Infantil</span>
          </div>

          {/* H1 Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-['Outfit'] tracking-tight text-white leading-[1.15] [text-shadow:_0_4px_20px_rgba(0,0,0,0.95),_0_1px_4px_rgba(0,0,0,0.8)]">
            "Tratamos a <span className="text-[#ADD8D7] italic font-normal">personas</span>,<br />no a diagnósticos."
          </h1>

          {/* Subtitle / Bajada */}
          <p className="text-base sm:text-xl font-light text-white/95 max-w-3xl mx-auto leading-relaxed [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)]">
            Un espacio de acompañamiento <strong className="font-semibold text-white">profesional, cercano y humano</strong> en el desarrollo infantil. Creemos en la mirada integral, la escucha activa y el trabajo interdisciplinario con cada niño y su familia.
          </p>
        </div>
      </div>

      {/* Hero Bottom Credential Bar (3 Key Pillars) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 lg:p-5 rounded-2xl bg-[#FCFAED]/95 text-[#1C2A29] shadow-xl border border-[#1B9390]/20 backdrop-blur-md">
          <div className="flex items-center gap-3.5 p-2">
            <div className="p-2.5 rounded-xl bg-[#1B9390]/10 text-[#1B9390] shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold font-['Outfit'] text-[#1C2A29]">
                Supervisión Pediátrica
              </h3>
              <p className="text-[11px] text-[#536B69] leading-snug">
                Articulación constante entre mirada médica y labor terapéutica diaria.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2 md:border-l md:border-gray-200">
            <div className="p-2.5 rounded-xl bg-[#DE7242]/10 text-[#DE7242] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold font-['Outfit'] text-[#1C2A29]">
                Equipo Interdisciplinario
              </h3>
              <p className="text-[11px] text-[#536B69] leading-snug">
                13 especialidades integradas para una evaluación y rehabilitación respetuosa.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2 md:border-l md:border-gray-200">
            <div className="p-2.5 rounded-xl bg-[#1B9390]/10 text-[#1B9390] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold font-['Outfit'] text-[#1C2A29]">
                Todas las Obras Sociales
              </h3>
              <p className="text-[11px] text-[#536B69] leading-snug">
                Certificado Min. de Salud, ANDIS y Registro Nacional de Prestadores (RNP).
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#nosotros"
            className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors"
            aria-label="Ir a la siguiente sección"
          >
            <span>Conocé nuestra propuesta</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#ADD8D7]" />
          </a>
        </div>
      </div>
    </section>
  );
};
