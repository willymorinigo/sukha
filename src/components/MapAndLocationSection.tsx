import React, { useState } from 'react';
import { SUKHA_INFO } from '../data/sukhaData';
import { MapPin, Phone, Mail, Clock, Navigation, Copy, Check, ExternalLink } from 'lucide-react';

export const MapAndLocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const googleMapsUrl = SUKHA_INFO.googleMapsUrl;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${SUKHA_INFO.address}, ${SUKHA_INFO.city}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ubicacion" className="py-20 bg-[#FCFAED] text-[#1C2A29] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B9390] bg-[#1B9390]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Facilidades de Acceso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-[#1C2A29] tracking-tight">
            Ubicación de Nuestras Instalaciones
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#536B69]">
            Estamos en una zona residencial arbolada, tranquila y de fácil acceso en City Bell.
          </p>
        </div>

        {/* 2 Column Grid: Info & Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Contact Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="p-6 rounded-2xl bg-white border border-[#1B9390]/15 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1B9390]/10 text-[#1B9390] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#536B69]">
                    Dirección
                  </h3>
                  <p className="text-base font-bold font-['Outfit'] text-[#1C2A29] mt-0.5">
                    {SUKHA_INFO.address}
                  </p>
                  <p className="text-xs text-[#536B69] mt-0.5">{SUKHA_INFO.city}</p>
                  <button
                    onClick={handleCopyAddress}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B9390] hover:text-[#157977] transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? '¡Copiado al portapapeles!' : 'Copiar dirección'}</span>
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#DE7242]/10 text-[#DE7242] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#536B69]">
                    Horarios de Atención
                  </h3>
                  <p className="text-sm font-bold text-[#1C2A29] mt-0.5">
                    {SUKHA_INFO.hours}
                  </p>
                  <p className="text-xs text-[#536B69] mt-0.5">
                    Turnos programados con el equipo interdisciplinario.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1B9390]/10 text-[#1B9390] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#536B69]">
                    Teléfono & WhatsApp
                  </h3>
                  <a
                    href={`tel:${SUKHA_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-bold text-[#1C2A29] hover:text-[#1B9390] mt-0.5 block"
                  >
                    {SUKHA_INFO.phone}
                  </a>
                  <p className="text-xs text-[#536B69] mt-0.5">Atención y consultas de recepción</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#FCCBB5] text-[#1C2A29] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#536B69]">
                    Correo Electrónico
                  </h3>
                  <a
                    href={`mailto:${SUKHA_INFO.email}`}
                    className="text-xs sm:text-sm font-bold text-[#1C2A29] hover:text-[#1B9390] mt-0.5 block break-all"
                  >
                    {SUKHA_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Directions Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-[#1B9390] hover:bg-[#157977] text-white font-bold text-sm text-center shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>Abrir indicaciones en Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Column 2: Interactive Centered Map Embed Frame */}
          <div className="lg:col-span-7 h-[440px] lg:h-full min-h-[420px] rounded-3xl overflow-hidden border-2 border-[#1B9390]/20 shadow-xl relative bg-gray-100">
            {/* Embedded map centered directly on 138 N° 224 e/ 473 y 473 bis, City Bell, City Bell, La Plata, Buenos Aires */}
            <iframe
              title="Mapa de ubicación Sukha Desarrollo Infantil City Bell"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                '138 N° 224 e/ 473 y 473 bis, City Bell, City Bell, La Plata, Buenos Aires'
              )}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full filter contrast-[1.02] saturate-[1.1]"
            />

            {/* Floating Overlay Badge on Map */}
            <div className="absolute top-4 left-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#1B9390]/30 shadow-lg text-[#1C2A29] max-w-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1B9390] uppercase tracking-wider">
                <MapPin className="w-4 h-4 fill-[#1B9390] text-white" />
                <span>Sukha Desarrollo Infantil</span>
              </div>
              <p className="text-xs font-semibold mt-1">138 N° 224 e/ 473 y 473 bis</p>
              <p className="text-[11px] text-[#536B69]">City Bell, La Plata</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
