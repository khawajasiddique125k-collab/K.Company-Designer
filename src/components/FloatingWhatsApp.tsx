import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `${COMPANY_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
    COMPANY_CONFIG.contact.defaultWhatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 p-3 rounded-sm bg-[#18181C] border border-[#DEB778]/40 shadow-xl max-w-xs text-xs text-[#F5F1E9] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-2 pb-1 border-b border-[#DEB778]/15">
            <span className="font-semibold text-[#F3D7A0]">{COMPANY_CONFIG.name}</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#918B83] hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="mt-1 text-[#C4BFB6] text-[11px] leading-tight">
            Assalamu Alaikum! Have questions about a logo, poster, or Canva design? Chat directly with us.
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 rounded-full bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] hover:brightness-110 active:scale-95 text-[#09090B] flex items-center justify-center shadow-2xl shadow-[#D8AD68]/40 border border-[#F3D7A0] transition-all cursor-pointer group"
        aria-label="Direct WhatsApp Chat with K.Company & Designer"
      >
        <MessageCircle className="w-6 h-6 text-[#09090B] group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
