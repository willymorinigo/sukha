import React, { useState } from 'react';
import { TESTIMONIALS, Testimonial, SUKHA_INFO } from '../data/sukhaData';
import { Star, CheckCircle, Quote, Plus, X } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newSpecialty, setNewSpecialty] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...testimonialsList, ...testimonialsList];

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    const newEntry: Testimonial = {
      id: `user-${Date.now()}`,
      author: newAuthor,
      role: newRole || 'Familia de Sukha',
      rating: newRating,
      date: 'Reciente',
      specialties: newSpecialty ? [newSpecialty] : ['Desarrollo Infantil'],
      comment: newComment,
      verified: true,
      source: 'Reseña de Familia',
    };

    setTestimonialsList([newEntry, ...testimonialsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowAddModal(false);
      setNewAuthor('');
      setNewRole('');
      setNewSpecialty('');
      setNewComment('');
    }, 2000);
  };

  return (
    <section id="testimonios" className="py-20 bg-white text-[#1C2A29] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header & Overall Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B9390] bg-[#1B9390]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Experiencias Reales
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-[#1C2A29] tracking-tight">
              Lo que dicen los <span className="text-[#DE7242]">padres de familia</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#536B69] max-w-2xl">
              Reseñas y testimonios verificados de las familias que acompañamos día a día en Sukha.
            </p>
          </div>

          {/* Rating Summary Card */}
          <a
            href={SUKHA_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#FCFAED] border border-[#1B9390]/20 flex items-center gap-4 shrink-0 shadow-xs hover:shadow-md hover:border-[#1B9390] transition-all group"
          >
            <div className="text-center pr-4 border-r border-gray-200">
              <span className="text-3xl font-bold font-['Outfit'] text-[#1C2A29]">5.0</span>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-[#1C2A29] group-hover:text-[#1B9390] transition-colors">
                Calificación Excelente en Google
              </p>
              <p className="text-[11px] text-[#536B69]">Ver opiniones en Google Maps</p>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1B9390] mt-1 underline">
                <CheckCircle className="w-3 h-3" /> Sukha en Google Maps ↗
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Row (Pauses on Hover) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Side Gradient Fade Masks for elegant visual edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-6 px-4 cursor-pointer">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[320px] sm:w-[380px] shrink-0 p-6 rounded-2xl bg-[#FCFAED] border border-[#1B9390]/15 hover:border-[#1B9390] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group/card"
            >
              <Quote className="w-8 h-8 text-[#1B9390]/15 absolute top-4 right-4" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-[#536B69] bg-white px-2 py-0.5 rounded-md border border-gray-200">
                    {item.source}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#1C2A29] leading-relaxed italic mb-4">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold font-['Outfit'] text-[#1C2A29] flex items-center gap-1.5">
                      <span>{item.author}</span>
                      {item.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-[#1B9390]" />
                      )}
                    </h3>
                    <p className="text-xs text-[#536B69]">{item.role}</p>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">{item.date}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {item.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium text-[#1B9390] bg-[#1B9390]/10 px-2 py-0.5 rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Review Trigger CTA */}
      <div className="mt-10 text-center max-w-7xl mx-auto px-4">
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FCFAED] hover:bg-[#1B9390]/10 text-[#1B9390] font-semibold text-xs sm:text-sm border border-[#1B9390]/30 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>¿Sos familia de Sukha? Dejanos tu testimonio</span>
        </button>
      </div>

      {/* Add Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border border-gray-200">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold font-['Outfit'] text-[#1C2A29] mb-1">
              Dejanos tu Reseña
            </h3>
            <p className="text-xs text-[#536B69] mb-6">
              Tu experiencia nos ayuda a seguir acompañando a más familias.
            </p>

            {submittedMessage ? (
              <div className="p-6 rounded-2xl bg-[#EBF7F7] text-center text-[#1B9390] space-y-2">
                <CheckCircle className="w-10 h-10 mx-auto" />
                <h4 className="font-bold text-base">¡Muchas gracias!</h4>
                <p className="text-xs text-[#536B69]">
                  Tu testimonio fue recibido con éxito y añadido a las reseñas del centro.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1C2A29] mb-1">
                    Tu Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Laura Pérez"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A29] mb-1">
                    Mamá / Papá / Tutor de
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Mamá de Joaquín (4 años)"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A29] mb-1">
                    Especialidad / Área
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Fonoaudiología, Kinesiología"
                    value={newSpecialty}
                    onChange={(e) => setNewSpecialty(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A29] mb-1">
                    Calificación
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newRating
                              ? 'text-amber-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A29] mb-1">
                    Tu Testimonio *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Contanos tu experiencia en Sukha..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#1B9390] hover:bg-[#157977] text-white text-xs font-bold transition-colors"
                >
                  Publicar Testimonio
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
