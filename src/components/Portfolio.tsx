import React, { useState } from "react";
import { Eye, ArrowRight, Sparkles } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";
import { PORTFOLIO_ITEMS, PortfolioItem } from "../data/portfolio";
import { ProjectModal } from "./ProjectModal";

interface PortfolioProps {
  onOrderDesign: (serviceKey?: string, referenceTitle?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOrderDesign }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All Work");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === "All Work"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#0D0D10] relative border-t border-[#DEB778]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#D8AD68] uppercase">
              SELECTED CREATIVE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#F5F1E9]">
              Designs That Make an Impression.
            </h2>
            <p className="text-[#C4BFB6] text-base leading-relaxed">
              A curated showcase of visual concepts, brand identities, promotional artwork, and digital designs.
            </p>
          </div>

          <div className="shrink-0 text-xs text-[#918B83]">
            <span>Showing {filteredItems.length} concept showcases</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {COMPANY_CONFIG.portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-sm whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#D8AD68] text-[#09090B] font-semibold shadow-md shadow-[#D8AD68]/20"
                    : "bg-[#18181C] text-[#C4BFB6] border border-[#DEB778]/20 hover:border-[#D8AD68]/60 hover:text-[#F5F1E9]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-sm overflow-hidden border border-[#DEB778]/25 bg-[#18181C] hover:border-[#D8AD68]/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D8AD68]/10 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#09090B]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Dark & Gold Overlay on Hover */}
                <div className="absolute inset-0 bg-[#09090B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="px-4 py-2 rounded-sm bg-[#111114]/90 border border-[#DEB778]/60 text-xs font-semibold text-[#F3D7A0] tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-[#D8AD68]" />
                    <span>View Design</span>
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold tracking-widest text-[#D8AD68] uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-base font-serif font-medium text-[#F5F1E9] group-hover:text-[#F3D7A0] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                </div>
                <div className="pt-2 flex items-center justify-between text-xs text-[#918B83] border-t border-[#27272A]/60">
                  <span>Custom Design Concept</span>
                  <span className="text-[#D8AD68] group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section Button */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-sm border border-[#DEB778]/30 bg-[#18181C]/90 max-w-xl mx-auto">
            <div className="text-left">
              <h4 className="text-sm font-semibold text-[#F5F1E9]">Need a bespoke concept created?</h4>
              <p className="text-xs text-[#918B83] mt-0.5">Share your reference files and color preferences with our designer.</p>
            </div>
            <button
              onClick={() => onOrderDesign()}
              className="px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#09090B] bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] hover:brightness-105 transition-all shadow-md shrink-0 cursor-pointer"
            >
              Request Your Custom Design
            </button>
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onOrderSimilar={(serviceKey, projectTitle) => onOrderDesign(serviceKey, projectTitle)}
      />
    </section>
  );
};
