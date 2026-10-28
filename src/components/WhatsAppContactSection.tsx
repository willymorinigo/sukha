import React, { useState, useEffect } from 'react';
import { SUKHA_INFO, SPECIALTIES } from '../data/sukhaData';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';

interface WhatsAppContactSectionProps {
  initialSpecialtyName?: string;
  initialMessage?: string;
}

export const WhatsAppContactSection: React.FC<WhatsAppContactSectionProps> = ({
  initialSpecialtyName,
  initialMessage,
}) => {
  const [template, setTemplate] = useState<string>('admision');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [obraSocial, setObraSocial] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialtyName || '');
  const [customNotes, setCustomNotes] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    if (initialSpecialtyName) {
      setSelectedSpecialty(initialSpecialtyName);
      setTemplate('especialidad');
    }
    if (initialMessage) {
      setCustomNotes(initialMessage);
    }
  }, [initialSpecialtyName, initialMessage]);

  const templatesList = [
    {
      id: 'admision',
      title: 'Primera Consulta / Admisión',
      desc: 'Para iniciar el proceso de acompañamiento en Sukha.',
    },
    {
      id: 'obras-sociales',
      title: 'Consulta por Obra Social',
      desc: 'Información sobre cobertura, CUD y reintegros.',
    },
    {
      id: 'especialidad',
      title: 'Especialidad Específica',
      desc: 'Consultar por Fonoaudiología, Psicología, Kinesiología, etc.',
    },
    {
      id: 'escuela-at',
      title: 'Articulación con Escuela / AT',
      desc: 'Coordinación interdisciplinaria con gabinetes y acompañantes.',
    },
    {
      id: 'general',
      title: 'Consulta General',
      desc: 'Preguntas breves sobre horarios, turnos y ubicación.',
    },
  ];

  const buildFormattedMessage = () => {
    let msg = `*CONSULTA DESDE LA WEB SUKHA DESARROLLO INFANTIL*\n\n`;

    if (template === 'admision') {
      msg += `📌 *Motivo:* Primera Consulta / Admisión\n`;
    } else if (template === 'obras-sociales') {
      msg += `📌 *Motivo:* Consulta por Obra Social / Cobertura\n`;
    } else if (template === 'especialidad') {
      msg += `📌 *Motivo:* Consulta por Especialidad: ${selectedSpecialty || 'No especificada'}\n`;
    } else if (template === 'escuela-at') {
      msg += `📌 *Motivo:* Articulación con Escuela / Acompañante Terapéutico\n`;
    } else {
      msg += `📌 *Motivo:* Consulta General\n`;
    }

    if (parentName) msg += `👤 *Padre/Madre/Tutor:* ${parentName}\n`;
    if (phone) msg += `📞 *Teléfono:* ${phone}\n`;
    if (childName) msg += `👶 *Niño/a:* ${childName}${childAge ? ` (${childAge})` : ''}\n`;
    if (obraSocial) msg += `🏥 *Obra Social / Prepaga:* ${obraSocial}\n`;
    if (selectedSpecialty && template !== 'especialidad') {
      msg += `💫 *Especialidad de interés:* ${selectedSpecialty}\n`;
    }
    if (customNotes) msg += `\n💬 *Mensaje:* ${customNotes}\n`;

    msg += `\n_Enviado desde el sitio web oficial de Sukha (City Bell)_`;
    return msg;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = buildFormattedMessage();
    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${SUKHA_INFO.whatsappRaw}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="contacto" className="py-20 bg-white text-[#1C2A29] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B9390] bg-[#1B9390]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Contacto Directo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-[#1C2A29] tracking-tight">
            Escribinos por <span className="text-[#1B9390]">WhatsApp</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#536B69]">
            Seleccioná el motivo de tu consulta, completá tus datos y nuestro equipo te responderá por WhatsApp a la brevedad.
          </p>
        </div>

        {/* Clean Centered Form Container */}
        <div className="max-w-3xl mx-auto bg-[#FCFAED] p-6 sm:p-10 rounded-3xl border border-[#1B9390]/20 shadow-lg space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1C2A29] mb-3">
              1. Seleccioná el motivo de tu consulta:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {templatesList.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTemplate(t.id)}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    template === t.id
                      ? 'bg-[#1B9390] text-white border-[#1B9390] shadow-sm'
                      : 'bg-white text-[#1C2A29] border-gray-200 hover:border-[#1B9390]/50'
                  }`}
                >
                  <p className="text-xs font-bold font-['Outfit']">{t.title}</p>
                  <p
                    className={`text-[11px] mt-0.5 line-clamp-1 ${
                      template === t.id ? 'text-white/80' : 'text-[#536B69]'
                    }`}
                  >
                    {t.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSendWhatsApp} className="space-y-4 pt-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1C2A29]">
              2. Completá tus datos de contacto:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#536B69] mb-1">
                  Tu Nombre y Apellido *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Carolina Martínez"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#536B69] mb-1">
                  Teléfono / Celular *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ej: 221 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#536B69] mb-1">
                  Nombre del Niño/a (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej: Lucas"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#536B69] mb-1">
                  Edad del Niño/a
                </label>
                <input
                  type="text"
                  placeholder="Ej: 4 años"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#536B69] mb-1">
                  Obra Social / Prepaga
                </label>
                <input
                  type="text"
                  placeholder="Ej: IOMA, OSDE, Swiss Medical, Particular"
                  value={obraSocial}
                  onChange={(e) => setObraSocial(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#536B69] mb-1">
                  Especialidad Requerida
                </label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                >
                  <option value="">Seleccionar especialidad (opcional)</option>
                  {SPECIALTIES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#536B69] mb-1">
                Detalle o Comentarios Adicionales
              </label>
              <textarea
                rows={3}
                placeholder="Escribí brevemente la consulta o disponibilidad horaria..."
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
              />
            </div>

            {sentSuccess && (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-400 text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>¡Redirigiendo a WhatsApp con tu consulta armada!</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-[#1B9390] hover:bg-[#157977] text-white font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current text-white/20" />
              <span>Enviar Consulta por WhatsApp</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
