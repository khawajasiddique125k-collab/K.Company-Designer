import React from "react";
import { ArrowRight, MessageCircle, Sparkles, Layers, PenTool } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";
import { IMAGES } from "../assets/images";

interface HeroProps {
  onOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  const whatsappUrlWithMessage = `${COMPANY_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
    COMPANY_CONFIG.contact.defaultWhatsappMessage
  )}`;

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#09090B]"
    >
      {/* Background Cinematic Image with Luxury Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroStudio}
          alt="K.Company & Designer Creative Studio"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15] scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Layered Vignettes & Warm Gold Glows */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/85 to-[#09090B]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-[#09090B]/60" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#D8AD68]/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy - Left 8 columns */}
          <div className="lg:col-span-8 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm border border-[#DEB778]/30 bg-[#18181C]/80 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8AD68]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F3D7A0]">
                CREATIVE DESIGN STUDIO · DIGITAL SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-normal text-[#F5F1E9] leading-[1.08] tracking-tight text-balance">
              Transform Your Ideas <br />
              <span className="italic font-serif text-gold-gradient font-normal">
                Into Stunning Designs.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#C4BFB6] max-w-2xl font-normal leading-relaxed text-balance">
              From professional logos and eye-catching posters to AI-powered creative concepts and
              social media designs, <span className="text-[#F5F1E9] font-medium">K.Company & Designer</span> brings
              your vision to life with precision and style.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToServices}
                className="px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#09090B] bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] hover:brightness-105 active:scale-[0.98] transition-all shadow-lg shadow-[#D8AD68]/20 flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F3D7A0]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#09090B]" />
              </button>

              <button
                onClick={onOrderClick}
                className="px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#F5F1E9] border border-[#DEB778]/40 hover:border-[#F3D7A0] hover:bg-[#18181C]/60 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D8AD68]"
              >
                <span>Order a Custom Design</span>
              </button>
            </div>

            {/* Categories Subtitle & WhatsApp Shortcut */}
            <div className="pt-4 border-t border-[#DEB778]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="tracking-[0.18em] text-[#918B83] uppercase font-medium">
                {COMPANY_CONFIG.category}
              </span>

              <a
                href={whatsappUrlWithMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#F3D7A0] hover:text-[#FFFFFF] transition-colors font-medium group"
              >
                <MessageCircle className="w-4 h-4 text-[#D8AD68] group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Right Column / Decorative Showcase Pill */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative p-6 rounded-sm border border-[#DEB778]/25 bg-gradient-to-b from-[#18181C]/90 to-[#111114]/90 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#DEB778]/15">
                <span className="text-xs uppercase tracking-widest text-[#D8AD68] font-semibold">
                  Agency Pillars
                </span>
                <span className="text-[11px] text-[#918B83]">K.Company & Designer</span>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-sm bg-[#09090B] border border-[#DEB778]/20 text-[#D8AD68]">
                    <PenTool className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F1E9]">Brand & Identity</h4>
                    <p className="text-xs text-[#918B83] mt-0.5">Logos, stationery, typography systems, vector marks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-sm bg-[#09090B] border border-[#DEB778]/20 text-[#D8AD68]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F1E9]">AI Digital Concepts</h4>
                    <p className="text-xs text-[#918B83] mt-0.5">Generative art, high-concept visuals & ideation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-sm bg-[#09090B] border border-[#DEB778]/20 text-[#D8AD68]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F1E9]">Canva & Social Media</h4>
                    <p className="text-xs text-[#918B83] mt-0.5">Carousels, YouTube thumbnails & viral creator assets.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DEB778]/15 flex items-center justify-between text-xs">
                <span className="text-[#C4BFB6]">Direct Founder Access</span>
                <span className="text-[#F3D7A0] font-mono tabular-nums">{COMPANY_CONFIG.contact.whatsappFormatted}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
