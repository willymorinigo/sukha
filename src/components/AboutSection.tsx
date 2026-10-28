import React from 'react';
import { Heart, Stethoscope, School, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-[#FCFAED] text-[#1C2A29] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ADD8D7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FCCBB5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Kicker & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B9390] bg-[#1B9390]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Nuestra Esencia y Filosofía
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-[#1C2A29] tracking-tight">
            Acompañamos el desarrollo desde una mirada <span className="text-[#1B9390] underline decoration-[#DE7242]/40 underline-offset-8">integral y humana</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536B69] leading-relaxed">
            En Sukha creemos en el trabajo interdisciplinario y en una mirada integral de cada niño y su familia.
          </p>
        </div>

        {/* 2-Column Core Highlight - Compact height alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-start mb-16">
          {/* Column 1: Video Showcase with height: 590px */}
          <div className="lg:col-span-6 flex flex-col relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#1C2A29] h-[590px] w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
              >
                <source src="/sukha.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A29]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 text-[#1C2A29] shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#1B9390] text-white shrink-0">
                    <Heart className="w-4.5 h-4.5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold font-['Outfit'] text-[#1C2A29]">
                      Recorrido por Sukha City Bell
                    </h4>
                    <p className="text-[11px] text-[#536B69]">
                      Instalaciones, salas terapéuticas y espacios verdes pensados para la infancia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Detailed Text & Differential Pillars - Compact Spacing */}
          <div className="lg:col-span-6 flex flex-col space-y-5">
            <div className="p-6 rounded-2xl bg-white border border-[#1B9390]/15 shadow-sm space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-[#1C2A29] flex items-center gap-2">
                <span className="text-[#DE7242]">🌱</span> ¿Cuál es nuestro diferencial?
              </h3>
              <p className="text-sm sm:text-base text-[#536B69] leading-relaxed">
                Nuestro diferencial está en cómo trabajamos: de manera interdisciplinaria, conectando a profesionales, familias, escuelas y acompañantes terapéuticos para que cada niño reciba un acompañamiento coherente y sostenido.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#EBF7F7] border border-[#1B9390]/20">
                <div className="p-2.5 rounded-xl bg-[#1B9390] text-white w-fit mb-3">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-['Outfit'] text-[#1C2A29] mb-1">
                  Supervisión Pediátrica
                </h4>
                <p className="text-xs text-[#536B69] leading-relaxed">
                  Supervisión constante de una pediatra del desarrollo para articular la mirada médica con el trabajo terapéutico diario.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FDF2ED] border border-[#DE7242]/20">
                <div className="p-2.5 rounded-xl bg-[#DE7242] text-white w-fit mb-3">
                  <School className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-['Outfit'] text-[#1C2A29] mb-1">
                  Trabajo en Red
                </h4>
                <p className="text-xs text-[#536B69] leading-relaxed">
                  Conexión activa con la escuela, acompañantes terapéuticos (AT) y el equipo médico externo.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#1C2A29] text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-sm sm:text-base italic leading-relaxed text-white/95">
                  "Creemos en el trabajo en red, en la escucha, en la empatía y en estar realmente presentes en cada proceso. Porque el desarrollo infantil se construye en equipo, y ese equipo incluye a todos los que acompañan con compromiso y corazón. 💜"
                </p>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#ADD8D7]">
                  — Equipo Sukha Desarrollo Infantil
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#1B9390]/10 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-[#1B9390] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#1C2A29]">Evaluación Oportuna</span>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#1B9390]/10 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-[#1B9390] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#1C2A29]">Estimulación Temprana</span>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#1B9390]/10 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-[#1B9390] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#1C2A29]">Rehabilitación Integral</span>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#1B9390]/10 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-[#1B9390] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#1C2A29]">Perspectiva Respetuosa</span>
          </div>
        </div>
      </div>
    </section>
  );
};
