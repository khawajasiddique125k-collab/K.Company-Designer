import React from "react";
import { Check, Shield, Sparkles } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";
import { IMAGES } from "../assets/images";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0D0D10] relative overflow-hidden border-t border-[#DEB778]/15">
      {/* Ambient background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D8AD68]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#D8AD68] uppercase">
                ABOUT K.COMPANY & DESIGNER
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#F5F1E9] leading-tight">
              {COMPANY_CONFIG.primaryTagline}
            </h2>

            <div className="space-y-4 text-[#C4BFB6] text-base leading-relaxed font-normal">
              <p>
                At <strong className="text-[#F5F1E9] font-medium">{COMPANY_CONFIG.name}</strong>, we turn ideas
                into purposeful visual experiences. From logos and promotional artwork to social media creatives,
                Canva designs, and AI-assisted concepts, our goal is to help individuals and businesses communicate
                with clarity and style.
              </p>
              <p>
                Every project deserves thoughtful design, attention to detail, and a creative approach that reflects
                its purpose. Whether you need a single design or a complete visual collection, we aim to deliver work
                that fits your requirements and identity.
              </p>
            </div>

            {/* Signature-style brand highlight */}
            <div className="pt-2">
              <p className="font-serif italic text-xl text-[#F3D7A0] tracking-wide">
                “{COMPANY_CONFIG.supportingTagline}”
              </p>
            </div>

            {/* CEO Information Block */}
            <div className="mt-8 pt-6 border-t border-[#DEB778]/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm border border-[#D8AD68]/40 bg-[#18181C] flex items-center justify-center text-[#F3D7A0] font-serif text-xl font-bold shadow-md">
                KS
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#F5F1E9] tracking-wide">
                  {COMPANY_CONFIG.ceo}
                </h3>
                <p className="text-xs text-[#D8AD68] uppercase tracking-wider font-medium">
                  CEO & Founder — {COMPANY_CONFIG.name}
                </p>
              </div>
            </div>

            {/* Brand Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              {COMPANY_CONFIG.personality.slice(0, 6).map((trait) => (
                <div key={trait} className="flex items-center gap-2 text-xs text-[#C4BFB6]">
                  <Check className="w-3.5 h-3.5 text-[#D8AD68] shrink-0" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Composition with Artwork Mockups */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Visual Card: Veridian Luxury Logo Mockup */}
              <div className="rounded-sm overflow-hidden border border-[#DEB778]/30 bg-[#18181C] shadow-2xl group transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={IMAGES.luxuryLogo}
                    alt="K.Company & Designer Brand Mockup"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="text-[#F3D7A0] font-serif text-sm">Luxury Identity & Foil Stamping</span>
                    <span className="text-[#918B83] text-[11px]">Brand Identity</span>
                  </div>
                </div>
              </div>

              {/* Overlapping Secondary Card: Business Card Mockup */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-64 rounded-sm overflow-hidden border border-[#DEB778]/40 bg-[#111114] shadow-2xl p-1.5 backdrop-blur-md">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <img
                    src={IMAGES.businessCard}
                    alt="Business Card Stationery"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 text-[11px] text-[#C4BFB6] flex items-center justify-between">
                  <span className="font-medium text-[#F5F1E9]">Stationery Suite</span>
                  <span className="text-[#D8AD68]">600 GSM Cotton</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
