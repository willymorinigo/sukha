import React, { useState } from 'react';
import { SPECIALTIES, Specialty } from '../data/sukhaData';
import {
  HandDrawnLeaf,
  DotCluster,
  CornerOrganicDecoration,
  TranslucentBotanicalSilhouette,
} from './OrganicBackgroundAccents';
import {
  MessageSquareHeart,
  Activity,
  Music,
  Brain,
  Stethoscope,
  HeartHandshake,
  BookOpen,
  HandHeart,
  Users,
  ShieldCheck,
  Footprints,
  Apple,
  Baby,
  ArrowRight,
  X,
  Search,
  Check,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  MessageSquareHeart,
  Activity,
  Music,
  Brain,
  Stethoscope,
  HeartHandshake,
  BookOpen,
  HandHeart,
  Users,
  ShieldCheck,
  Footprints,
  Apple,
  Baby,
};

interface SpecialtiesSectionProps {
  onSelectSpecialtyForContact?: (specialtyName: string, preloadedMessage: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyForContact,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpecialties = SPECIALTIES.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleConsultClick = (specialty: Specialty) => {
    if (onSelectSpecialtyForContact) {
      onSelectSpecialtyForContact(specialty.name, specialty.preloadedMessage);
    }
    // Scroll to contact section
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedSpecialty(null);
  };

  return (
    <section id="especialidades" className="py-20 bg-white text-[#1C2A29] relative overflow-hidden">
      {/* Subtle background botanical accents */}
      <CornerOrganicDecoration position="top-right" theme="terracotta" opacity={0.18} />
      <CornerOrganicDecoration position="bottom-left" theme="teal" opacity={0.18} />
      <TranslucentBotanicalSilhouette className="absolute top-1/4 -left-12 w-48 h-48" opacity={0.12} color="terracotta" />
      <DotCluster className="absolute bottom-12 right-12 w-28 h-28" opacity={0.20} color="teal" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B9390] bg-[#1B9390]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Nuestras 13 Especialidades
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-[#1C2A29] tracking-tight">
              Abarcamos un abanico <span className="text-[#1B9390]">interdisciplinario completo</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#536B69] max-w-2xl">
              Cada etapa del desarrollo infantil requiere intervenciones específicas. Contamos con profesionales altamente capacitados en las siguientes áreas:
            </p>
          </div>

          {/* Search Filter Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar especialidad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-[#FCFAED] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1B9390] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Grid of Specialties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSpecialties.map((spec) => {
            const IconComponent = iconMap[spec.iconName] || Activity;
            return (
              <div
                key={spec.id}
                onClick={() => setSelectedSpecialty(spec)}
                className="group relative p-6 rounded-2xl bg-[#FCFAED] hover:bg-white border border-[#1B9390]/15 hover:border-[#1B9390] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#1B9390]/10 group-hover:bg-[#1B9390] text-[#1B9390] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#ADD8D7]/30 text-[#1C2A29]">
                      {spec.ageFocus}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-['Outfit'] text-[#1C2A29] group-hover:text-[#1B9390] transition-colors mb-2">
                    {spec.name}
                  </h3>

                  <p className="text-xs text-[#536B69] line-clamp-3 leading-relaxed mb-4">
                    {spec.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-[#1B9390] group-hover:text-[#157977]">
                  <span>Ver detalle y consulta</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredSpecialties.length === 0 && (
          <div className="text-center py-12 bg-[#FCFAED] rounded-2xl border border-dashed border-gray-300">
            <p className="text-sm text-[#536B69]">
              No encontramos especialidades coincidentes con "{searchQuery}".
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-semibold text-[#1B9390] underline"
            >
              Ver todas las 13 especialidades
            </button>
          </div>
        )}
      </div>

      {/* Modal Detail for Selected Specialty */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#FCFAED] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#1B9390]/30 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedSpecialty(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#1B9390] text-white">
                {React.createElement(iconMap[selectedSpecialty.iconName] || Activity, {
                  className: 'w-7 h-7',
                })}
              </div>
              <div>
                <span className="text-xs font-bold text-[#DE7242] uppercase tracking-wider">
                  Especialidad Sukha
                </span>
                <h3 className="text-2xl font-bold font-['Outfit'] text-[#1C2A29]">
                  {selectedSpecialty.name}
                </h3>
              </div>
            </div>

            <div className="space-y-4 my-6">
              <div className="p-3 rounded-xl bg-white border border-[#1B9390]/15 flex items-center gap-2 text-xs font-semibold text-[#1C2A29]">
                <Check className="w-4 h-4 text-[#1B9390]" />
                <span>Rango etario de atención: {selectedSpecialty.ageFocus}</span>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#536B69] mb-1">
                  Descripción e Intervención:
                </h4>
                <p className="text-sm text-[#1C2A29] leading-relaxed">
                  {selectedSpecialty.fullDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#EBF7F7] border border-[#1B9390]/20 text-xs text-[#1C2A29]">
                <p className="font-semibold text-[#1B9390] mb-1">💡 Enfoque Sukha:</p>
                <p>
                  Articulamos el tratamiento de {selectedSpecialty.name} con las demás áreas terapéuticas y la supervisión de nuestra pediatra del desarrollo.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => handleConsultClick(selectedSpecialty)}
                className="flex-1 py-3 px-5 rounded-xl bg-[#1B9390] hover:bg-[#157977] text-white font-semibold text-xs sm:text-sm text-center shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquareHeart className="w-4 h-4" />
                <span>Consultar por esta Especialidad</span>
              </button>

              <button
                onClick={() => setSelectedSpecialty(null)}
                className="py-3 px-5 rounded-xl border border-gray-300 hover:bg-gray-100 text-xs sm:text-sm font-semibold text-gray-700 text-center transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
