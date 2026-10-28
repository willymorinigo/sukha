import React, { useState } from 'react';
import { GALLERY, GalleryItem } from '../data/sukhaData';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import {
  HandDrawnLeaf,
  SunburstAccent,
  DotCluster,
  CornerOrganicDecoration,
} from './OrganicBackgroundAccents';

export const GallerySection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // The first item is the featured hero (Entrada principal y rampa de acceso adaptada)
  const heroItem = GALLERY.find((item) => item.featured) || GALLERY[0];
  const gridItems = GALLERY.filter((item) => item.id !== heroItem.id);

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    const prevIndex = (activeImageIndex - 1 + GALLERY.length) % GALLERY.length;
    setActiveImageIndex(prevIndex);
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    const nextIndex = (activeImageIndex + 1) % GALLERY.length;
    setActiveImageIndex(nextIndex);
  };

  return (
    <section id="galeria" className="py-20 bg-[#FCFAED] text-[#1C2A29] relative overflow-hidden">
      {/* Background Graphic Accents */}
      <CornerOrganicDecoration position="top-left" theme="teal" opacity={0.20} />
      <CornerOrganicDecoration position="bottom-right" theme="terracotta" opacity={0.22} />
      <SunburstAccent className="absolute bottom-20 left-10 w-24 h-24" opacity={0.16} color="terracotta" />
      <DotCluster className="absolute top-1/2 right-8 w-20 h-20" opacity={0.22} color="teal" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B9390] bg-[#1B9390]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Recorrido por Sukha
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-[#1C2A29] tracking-tight">
            Nuestra Galería de Instalaciones
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#536B69]">
            Conocé los espacios luminosos, adaptados y rodeados de naturaleza en City Bell.
          </p>
        </div>

        {/* 1. Large Hero Featured Photo (Entrada Principal y Rampa Adaptada) */}
        <div className="mb-8">
          <div
            onClick={() => setActiveImageIndex(0)}
            className="group relative rounded-3xl overflow-hidden bg-white border-2 border-[#1B9390]/25 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer h-[380px] sm:h-[480px] lg:h-[520px]"
          >
            <img
              src={heroItem.src}
              alt={heroItem.alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A29]/85 via-[#1C2A29]/30 to-transparent" />

            {/* Featured Badge & Zoom Icon */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1B9390] px-3.5 py-1.5 rounded-full shadow-md">
                <MapPin className="w-3.5 h-3.5 text-[#ADD8D7]" />
                Instalaciones Sukha
              </span>

              <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md text-white opacity-90 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>

            {/* Text Overlay for Hero Image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white leading-tight">
                {heroItem.title}
              </h3>
              <p className="text-sm sm:text-base text-white/90 mt-2 leading-relaxed">
                {heroItem.description}
              </p>
            </div>
          </div>
        </div>

        {/* 2. Remaining Photos Grid Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridItems.map((item) => {
            const globalIndex = GALLERY.findIndex((g) => g.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => setActiveImageIndex(globalIndex)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#1B9390]/15 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer h-72"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A29]/85 via-[#1C2A29]/20 to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-base font-bold font-['Outfit'] text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/85 line-clamp-2 mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && GALLERY[activeImageIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center p-2">
            <img
              src={GALLERY[activeImageIndex].src}
              alt={GALLERY[activeImageIndex].alt}
              className="max-h-[68vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center max-w-2xl px-4">
              <h3 className="text-xl font-bold font-['Outfit'] text-white">
                {GALLERY[activeImageIndex].title}
              </h3>
              <p className="text-sm text-white/85 mt-1">
                {GALLERY[activeImageIndex].description}
              </p>
              <div className="mt-2 text-xs text-[#ADD8D7] font-semibold">
                Imagen {activeImageIndex + 1} de {GALLERY.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
