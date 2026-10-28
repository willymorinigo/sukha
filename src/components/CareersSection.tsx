import React, { useState } from 'react';
import { SPECIALTIES } from '../data/sukhaData';
import { Briefcase, Upload, FileCheck, CheckCircle2, AlertCircle, X, Sparkles } from 'lucide-react';
import {
  HandDrawnLeaf,
  DotCluster,
  CornerOrganicDecoration,
} from './OrganicBackgroundAccents';

export const CareersSection: React.FC = () => {
  const [candidateName, setCandidateName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [matricula, setMatricula] = useState('');
  const [experience, setExperience] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    id: string;
    name: string;
    profession: string;
    date: string;
  } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        alert('El archivo es demasiado grande. El límite es 10 MB.');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !email || !profession || !selectedFile) {
      alert('Por favor completá los campos obligatorios y adjuntá tu CV.');
      return;
    }

    setIsSubmitting(true);
    const regId = `SUKHA-CV-${Math.floor(100000 + Math.random() * 900000)}`;

    const emailSubject = encodeURIComponent(`Postulación Laboral: ${candidateName} - ${profession} [${regId}]`);
    const emailBody = encodeURIComponent(
      `Hola equipo de Sukha Desarrollo Infantil,\n\n` +
      `Les envío mi postulación profesional para formar parte del equipo:\n\n` +
      `• Nombre y Apellido: ${candidateName}\n` +
      `• Email: ${email}\n` +
      `• Teléfono: ${phone}\n` +
      `• Especialidad/Profesión: ${profession}\n` +
      `• Matrícula Profesional: ${matricula || 'N/A'}\n` +
      `• Experiencia/Presentación: ${experience || 'Sin detalle adicional'}\n` +
      `• Código de Registro WEB: ${regId}\n\n` +
      `Adjunto a este correo mi Currículum Vitae (${selectedFile.name}).\n\n` +
      `Saludos cordiales,\n${candidateName}`
    );

    const mailtoUrl = `mailto:sukhadesarrolloinfantil@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        id: regId,
        name: candidateName,
        profession,
        date: new Date().toLocaleDateString('es-AR'),
      });
      window.location.href = mailtoUrl;
    }, 1200);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setCandidateName('');
    setEmail('');
    setPhone('');
    setProfession('');
    setMatricula('');
    setExperience('');
    setSelectedFile(null);
  };

  return (
    <section id="busquedas" className="py-20 bg-[#FCFAED] text-[#1C2A29] relative overflow-hidden">
      {/* Background Graphic Accents */}
      <CornerOrganicDecoration position="top-left" theme="teal" opacity={0.20} />
      <CornerOrganicDecoration position="bottom-right" theme="terracotta" opacity={0.20} />
      <DotCluster className="absolute top-1/3 right-10 w-24 h-24" opacity={0.22} color="terracotta" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B9390] bg-[#1B9390]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Búsquedas Laborales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-[#1C2A29] tracking-tight">
            Sumate a nuestro equipo <span className="text-[#DE7242]">interdisciplinario</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#536B69]">
            En Sukha siempre estamos en la búsqueda de profesionales comprometidos con el desarrollo infantil respetuoso e integral. Cargar tu CV a continuación.
          </p>
        </div>

        {/* Main Application Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#1B9390]/20 shadow-xl relative">
          {submittedData ? (
            <div className="text-center py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#1B9390]/10 text-[#1B9390] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1B9390]">
                  Postulación Registrada
                </span>
                <h3 className="text-2xl font-bold font-['Outfit'] text-[#1C2A29] mt-1">
                  ¡Gracias, {submittedData.name}!
                </h3>
                <p className="text-sm text-[#536B69] max-w-md mx-auto mt-2 leading-relaxed">
                  Tu postulación para <strong className="text-[#1C2A29]">{submittedData.profession}</strong> ha generado el borrador de correo para enviar a <strong className="text-[#1B9390]">sukhadesarrolloinfantil@gmail.com</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FCFAED] border border-gray-200 text-xs text-[#536B69] max-w-md mx-auto space-y-1 text-left">
                <p className="font-semibold text-[#1C2A29]">
                  Código de Registro: <span className="font-mono text-[#1B9390]">{submittedData.id}</span>
                </p>
                <p>Destinatario oficial: <strong>sukhadesarrolloinfantil@gmail.com</strong></p>
                <p>Fecha de registro: {submittedData.date}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`mailto:sukhadesarrolloinfantil@gmail.com?subject=${encodeURIComponent(`Postulación Laboral: ${submittedData.name} - ${submittedData.profession} [${submittedData.id}]`)}`}
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#1B9390] hover:bg-[#157977] text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-2"
                >
                  Abrir correo a sukhadesarrolloinfantil@gmail.com
                </a>
                <button
                  onClick={handleResetForm}
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#1C2A29] text-xs font-bold transition-colors"
                >
                  Cargar otra Postulación
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1C2A29] mb-1">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Lic. Martina Rossi"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A29] mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Ej: martina.rossi@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1C2A29] mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: 221 555 7890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A29] mb-1">
                    Especialidad / Profesión *
                  </label>
                  <select
                    required
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                  >
                    <option value="">Seleccionar profesión...</option>
                    {SPECIALTIES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Acompañante Terapéutico (AT)">Acompañante Terapéutico (AT)</option>
                    <option value="Administración / Recepción">Administración / Recepción</option>
                    <option value="Otra Disciplina">Otra Disciplina</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C2A29] mb-1">
                  Matrícula Profesional (MP / Provincial / Nacional)
                </label>
                <input
                  type="text"
                  placeholder="Ej: MP 12345 (o en trámite)"
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C2A29] mb-1">
                  Breve presentación / Experiencia previa
                </label>
                <textarea
                  rows={3}
                  placeholder="Contanos sobre tu formación, disponibilidad horaria o motivación para formar parte de Sukha..."
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1B9390] focus:outline-none"
                />
              </div>

              {/* CV File Drag & Drop Uploader */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C2A29] mb-2">
                  Adjuntar Currículum Vitae (PDF o Word) *
                </label>

                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  className={`p-6 border-2 border-dashed rounded-2xl text-center transition-colors ${
                    selectedFile
                      ? 'border-[#1B9390] bg-[#1B9390]/5'
                      : 'border-gray-300 hover:border-[#1B9390] bg-[#FCFAED]'
                  }`}
                >
                  {selectedFile ? (
                    <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#1B9390]/30 max-w-md mx-auto">
                      <div className="flex items-center gap-3 truncate">
                        <FileCheck className="w-6 h-6 text-[#1B9390] shrink-0" />
                        <div className="text-left truncate">
                          <p className="text-xs font-bold text-[#1C2A29] truncate">
                            {selectedFile.name}
                          </p>
                          <p className="text-[10px] text-[#536B69]">
                            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedFile(null)}
                        className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                        aria-label="Quitar archivo"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-8 h-8 text-[#1B9390] mx-auto mb-2" />
                      <p className="text-xs font-bold text-[#1C2A29]">
                        Arrastrá tu CV aquí o{' '}
                        <label className="text-[#1B9390] underline cursor-pointer">
                          buscalo en tu dispositivo
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                      </p>
                      <p className="text-[11px] text-[#536B69] mt-1">
                        Formatos permitidos: .PDF, .DOC, .DOCX (Máx. 10MB)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-[#DE7242] hover:bg-[#C55E31] text-white font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Enviando Currículum...</span>
                ) : (
                  <>
                    <Briefcase className="w-5 h-5" />
                    <span>Enviar Postulación Laboral</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
