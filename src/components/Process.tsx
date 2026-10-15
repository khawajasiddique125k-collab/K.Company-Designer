import React from "react";
import { ArrowRight, Lightbulb, CheckSquare, Palette, Send } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";

interface ProcessProps {
  onStartOrder: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartOrder }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Lightbulb className="w-5 h-5 text-[#D8AD68]" />;
      case 1:
        return <CheckSquare className="w-5 h-5 text-[#D8AD68]" />;
      case 2:
        return <Palette className="w-5 h-5 text-[#D8AD68]" />;
      case 3:
        return <Send className="w-5 h-5 text-[#D8AD68]" />;
      default:
        return <CheckSquare className="w-5 h-5 text-[#D8AD68]" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#09090B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D8AD68] uppercase">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#F5F1E9]">
            Your Idea to a Finished Design.
          </h2>
          <p className="text-[#C4BFB6] text-base leading-relaxed">
            A transparent and structured digital creative workflow from initial brief to final delivery.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {COMPANY_CONFIG.processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 rounded-sm border border-[#DEB778]/25 bg-[#18181C] flex flex-col justify-between group hover:border-[#D8AD68]/60 transition-all duration-300"
            >
              {/* Step indicator header */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#DEB778]/15">
                  <div className="w-10 h-10 rounded-sm bg-[#111114] border border-[#DEB778]/20 flex items-center justify-center group-hover:border-[#D8AD68]/50 transition-colors">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-serif text-2xl font-bold text-gold-gradient">
                    {step.step}
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  <h3 className="text-lg font-serif font-medium text-[#F5F1E9]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4BFB6] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step completion pill */}
              <div className="mt-6 pt-3 border-t border-[#27272A]/70 text-[11px] text-[#918B83] flex items-center justify-between">
                <span>Phase 0{idx + 1}</span>
                <span className="text-[#D8AD68]">Digital Workflow</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartOrder}
            className="px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#09090B] bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] hover:brightness-105 active:scale-[0.98] transition-all shadow-lg shadow-[#D8AD68]/20 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Start Your Design Order</span>
            <ArrowRight className="w-4 h-4 text-[#09090B]" />
          </button>
        </div>

      </div>
    </section>
  );
};
