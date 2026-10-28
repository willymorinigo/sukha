import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SUKHA_INFO } from '../data/sukhaData';

export const FloatingWhatsApp: React.FC = () => {
  const directWhatsappUrl = `https://wa.me/${SUKHA_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hola Sukha Desarrollo Infantil, quisiera consultar por turnos e información.'
  )}`;

  return (
    <a
      href={directWhatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      aria-label="Escribir por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
        ¿Consultas por WhatsApp?
      </span>
    </a>
  );
};
