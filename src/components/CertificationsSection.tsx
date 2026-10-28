import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle, ArrowRight } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#1C2A29] text-white relative overflow-hidden">
      {/* Soft gradient background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1B9390]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DE7242]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Certifications Highlight */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B9390]/20 text-[#ADD8D7] text-xs font-semibold uppercase tracking-wider border border-[#1B9390]/30">
              <Award className="w-3.5 h-3.5" />
              <span>Marco Institucional y Oficial</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] tracking-tight leading-tight">
              Centro certificado por el <span className="text-[#ADD8D7]">Ministerio de Salud</span> y la <span className="text-[#FCCBB5]">Agencia Nacional de Discapacidad</span>
            </h2>

            <p className="text-base text-white/90 leading-relaxed font-normal">
              Somos un <strong className="text-white font-semibold">Centro de Atención Temprana y Rehabilitación categorizado</strong>, y contamos con el <strong className="text-[#ADD8D7]">Registro Nacional de Prestadores (RNP)</strong>.
            </p>

            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3">
              <h3 className="text-lg font-bold font-['Outfit'] text-[#FCCBB5] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#DE7242]" />
                ¿Qué significa esto para tu familia?
              </h3>
              <p className="text-sm text-white/95 leading-relaxed">
                Que estamos habilitados para trabajar con <strong className="underline decoration-[#1B9390] underline-offset-4">todas las Obras Sociales y Prepagas</strong>, brindando atención integral, oportuna y accesible para el desarrollo y la rehabilitación infantil.
              </p>
            </div>
          </div>

          {/* Right Column: Key Official Badges */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div>
                <div className="p-3 rounded-xl bg-[#1B9390] text-white w-fit mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-['Outfit'] text-white">
                  Ministerio de Salud
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  Habilitación y fiscalización sanitaria nacional.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#ADD8D7] font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Normativa Vigente</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div>
                <div className="p-3 rounded-xl bg-[#DE7242] text-white w-fit mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-['Outfit'] text-white">
                  ANDIS
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  Agencia Nacional de Discapacidad categorizado.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#FCCBB5] font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Atención Temprana</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div>
                <div className="p-3 rounded-xl bg-[#1B9390] text-white w-fit mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-['Outfit'] text-white">
                  Matrícula RNP
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  Registro Nacional de Prestadores habilitante.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#ADD8D7] font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Validez Nacional</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div>
                <div className="p-3 rounded-xl bg-[#FCCBB5] text-[#1C2A29] w-fit mb-3">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-['Outfit'] text-white">
                  Obras Sociales
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  Acompañamiento en trámites de reintegro y CUD.
                </p>
              </div>
              <a
                href="#contacto"
                className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#FCCBB5] font-semibold hover:underline"
              >
                <span>Consultar Cobertura</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
