import React from "react";
import { Check, ArrowRight, ShieldCheck, Download } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";

interface PricingProps {
  onSelectPackage: (packageName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="py-24 bg-[#0D0D10] relative border-t border-[#DEB778]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D8AD68] uppercase">
            TRANSPARENT DESIGN SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#F5F1E9]">
            Professional Design Within Reach.
          </h2>
          <p className="text-[#C4BFB6] text-base leading-relaxed">
            Choose a design service and tell us what you need. Custom projects are quoted clearly according to their scope and complexity.
          </p>
        </div>

        {/* 3 Pricing Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {COMPANY_CONFIG.pricingPackages.map((pkg) => {
            const isFeatured = pkg.isFeatured;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-sm p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#18181C] border-2 border-[#D8AD68] shadow-2xl shadow-[#D8AD68]/10 -translate-y-1"
                    : "bg-[#111114] border border-[#DEB778]/25 hover:border-[#D8AD68]/50"
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-sm bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] text-[10px] font-bold uppercase tracking-widest text-[#09090B] shadow-md">
                    Featured Service
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#DEB778]/15">
                    <h3 className="text-xl font-serif font-medium text-[#F5F1E9]">
                      {pkg.name}
                    </h3>
                    <span className="text-xs text-[#D8AD68] font-mono tracking-wider">
                      {pkg.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#C4BFB6] mt-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Transparent Quotation Note */}
                  <div className="my-6 p-3.5 rounded-sm bg-[#09090B]/60 border border-[#DEB778]/20 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#918B83] block">Pricing Model</span>
                      <span className="text-sm font-semibold text-[#F3D7A0]">Custom Scope Quote</span>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-[#D8AD68]" />
                  </div>

                  {/* Deliverables & Features */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#918B83] block">
                      Scope & Inclusions:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#C4BFB6]">
                          <Check className="w-3.5 h-3.5 text-[#D8AD68] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-6 border-t border-[#DEB778]/15">
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className={`w-full py-3 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? "bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] text-[#09090B] hover:brightness-105 shadow-md shadow-[#D8AD68]/20"
                        : "bg-[#18181C] text-[#F3D7A0] border border-[#DEB778]/30 hover:border-[#D8AD68] hover:bg-[#D8AD68]/10"
                    }`}
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-center text-[#918B83] mt-2.5 flex items-center justify-center gap-1">
                    <Download className="w-3 h-3 text-[#D8AD68]" />
                    <span>Delivered electronically via high-resolution digital files</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
