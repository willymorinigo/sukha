import React, { useState } from 'react';
import { Download, Share, X, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1B9390]/15 text-[#1B9390] text-xs font-semibold ${className}`}>
        <CheckCircle2 className="w-3.5 h-3.5 text-[#1B9390]" />
        <span>App instalada</span>
      </div>
    );
  }

  if (isInstallable) {
    return (
      <button
        onClick={install}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1B9390] hover:bg-[#157977] text-white text-xs font-semibold shadow-md active:scale-95 transition-all touch-manipulation ${className}`}
        aria-label="Instalar Sukha App"
      >
        <Download className="w-4 h-4" />
        <span>Instalar Sukha App</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#1B9390]/30 bg-[#1B9390]/10 hover:bg-[#1B9390]/20 text-[#1C2A29] text-xs font-semibold active:scale-95 transition-all touch-manipulation ${className}`}
          aria-label="Instalar en iPhone"
        >
          <Download className="w-3.5 h-3.5 text-[#1B9390]" />
          <span>Instalar en iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
            <div className="w-full max-w-sm rounded-3xl bg-[#FCFAED] border border-[#1B9390]/20 p-6 shadow-2xl text-[#1C2A29] relative">
              <button
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 text-gray-500"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-[#1B9390]/15 text-[#1B9390]">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base font-['Outfit'] text-[#1C2A29]">
                    Instalar en iPhone / iPad
                  </h3>
                  <p className="text-xs text-[#536B69]">Sukha Desarrollo Infantil</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#1C2A29]/90 bg-white/70 p-4 rounded-2xl border border-gray-100">
                <div className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1B9390] text-white font-bold text-[10px] shrink-0">1</span>
                  <p>Toca el botón <strong>Compartir</strong> <Share className="w-3.5 h-3.5 inline text-[#1B9390] align-sub" /> en la barra inferior de Safari.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1B9390] text-white font-bold text-[10px] shrink-0">2</span>
                  <p>Desplázate hacia abajo y selecciona <strong>"Agregar a inicio"</strong>.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1B9390] text-white font-bold text-[10px] shrink-0">3</span>
                  <p>¡Listo! Tendrás la aplicación directa en tu pantalla de inicio.</p>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full py-2.5 rounded-xl bg-[#1B9390] text-white text-xs font-semibold shadow-md active:scale-95 transition-all"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <button
      onClick={() => setShowIOSGuide(true)}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#1B9390]/30 bg-[#1B9390]/10 hover:bg-[#1B9390]/20 text-[#1B9390] text-xs font-semibold active:scale-95 transition-all touch-manipulation ${className}`}
      aria-label="Instalar App"
    >
      <Download className="w-3.5 h-3.5 text-[#1B9390]" />
      <span>Instalar App</span>
    </button>
  );
};
