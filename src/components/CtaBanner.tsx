import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";
import { IMAGES } from "../assets/images";

interface CtaBannerProps {
  onOrderClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOrderClick }) => {
  const whatsappUrl = `${COMPANY_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
    COMPANY_CONFIG.contact.defaultWhatsappMessage
  )}`;

  return (
    <section className="py-24 bg-[#0D0D10] relative overflow-hidden border-t border-[#DEB778]/20">
      {/* Background Graphic Asset with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroStudio}
          alt="Creative Design Environment"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/80 to-[#09090B]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D8AD68]/8 blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-semibold tracking-[0.3em] text-[#D8AD68] uppercase inline-block">
          READY TO ELEVATE YOUR BRAND?
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#F5F1E9] text-balance">
          Let's Create Something <span className="italic text-gold-gradient">Extraordinary.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#C4BFB6] max-w-2xl mx-auto font-normal leading-relaxed text-balance">
          Bring your ideas to life with thoughtful design, creative detail, and a visual style that fits your vision.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOrderClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#09090B] bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] hover:brightness-105 active:scale-[0.98] transition-all shadow-xl shadow-[#D8AD68]/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request Your Custom Design</span>
            <ArrowRight className="w-4 h-4 text-[#09090B]" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#F5F1E9] border border-[#DEB778]/40 hover:border-[#D8AD68] hover:bg-[#18181C]/70 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#D8AD68]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="pt-6">
          <span className="text-[11px] tracking-widest text-[#918B83] uppercase">
            {COMPANY_CONFIG.brandDescriptor} · {COMPANY_CONFIG.primaryTagline}
          </span>
        </div>
      </div>
    </section>
  );
};
