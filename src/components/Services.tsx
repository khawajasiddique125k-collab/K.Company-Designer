import React from "react";
import { PenTool, Sparkles, Layers, SlidersHorizontal, ArrowRight, Check } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "PenTool":
        return <PenTool className="w-5 h-5 text-[#D8AD68]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#D8AD68]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#D8AD68]" />;
      case "SlidersHorizontal":
        return <SlidersHorizontal className="w-5 h-5 text-[#D8AD68]" />;
      default:
        return <PenTool className="w-5 h-5 text-[#D8AD68]" />;
    }
  };

  const getCtaText = (serviceTitle: string) => {
    switch (serviceTitle) {
      case "Graphic Design":
        return "Explore Graphic Design →";
      case "AI Design":
        return "Explore AI Design →";
      case "Canva Design":
        return "Explore Canva Design →";
      case "Editing & Freelancing":
        return "Discuss Your Project →";
      default:
        return "Select Service →";
    }
  };

  return (
    <section id="services" className="py-24 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D8AD68] uppercase">
            WHAT WE CREATE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#F5F1E9]">
            Creative Services. Professional Results.
          </h2>
          <p className="text-[#C4BFB6] text-base leading-relaxed max-w-2xl">
            Explore design solutions tailored to your brand, your content, and your creative goals.
          </p>
        </div>

        {/* 4 Primary Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_CONFIG.services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative rounded-sm border border-[#DEB778]/25 bg-[#18181C] hover:border-[#D8AD68]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D8AD68]/5"
            >
              {/* Subtle top index indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DEB778]/15">
                <div className="p-2.5 rounded-sm bg-[#111114] border border-[#DEB778]/20 group-hover:border-[#D8AD68]/50 transition-colors">
                  {getIcon(service.iconName)}
                </div>
                <span className="text-xs font-mono text-[#918B83] tracking-widest">
                  0{idx + 1}
                </span>
              </div>

              {/* Service Details */}
              <div className="mt-5 space-y-3">
                <span className="text-[11px] font-medium tracking-widest text-[#D8AD68] uppercase">
                  {service.category}
                </span>
                <h3 className="text-xl font-serif font-medium text-[#F5F1E9] group-hover:text-[#F3D7A0] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#C4BFB6] leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Example Capabilities */}
                <div className="pt-3 border-t border-[#27272A]/70 space-y-1.5">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-[#918B83]">
                      <span className="w-1 h-1 rounded-full bg-[#D8AD68]/60" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6 pt-4 border-t border-[#DEB778]/15">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-3 rounded-sm text-xs font-medium text-[#F3D7A0] bg-[#111114] border border-[#DEB778]/25 hover:border-[#D8AD68] hover:bg-[#D8AD68]/10 transition-all flex items-center justify-between group-hover:text-white cursor-pointer"
                >
                  <span>{getCtaText(service.title)}</span>
                </button>
              </div>

              {/* Subtle bottom gold accent bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D8AD68] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
