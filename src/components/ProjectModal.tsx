import React, { useEffect } from "react";
import { X, Check, ArrowRight, Layers, FileText } from "lucide-react";
import { PortfolioItem } from "../data/portfolio";

interface ProjectModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOrderSimilar: (serviceKey: string, projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  item,
  onClose,
  onOrderSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm border border-[#DEB778]/40 bg-[#111114] shadow-2xl shadow-black text-[#F5F1E9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-sm bg-[#18181C]/80 border border-[#DEB778]/30 text-[#C4BFB6] hover:text-[#F3D7A0] hover:border-[#D8AD68] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8AD68]"
          aria-label="Close project view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Large Image Preview Column */}
          <div className="lg:col-span-7 bg-[#09090B] relative flex items-center justify-center min-h-[300px] sm:min-h-[420px] p-6 border-b lg:border-b-0 lg:border-r border-[#DEB778]/20">
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-sm shadow-xl"
            />
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold tracking-widest text-[#D8AD68] uppercase">
                  {item.category}
                </span>
                <span className="text-[#918B83]">·</span>
                <span className="text-[11px] text-[#918B83]">Illustrative Concept</span>
              </div>

              <h3 id="modal-title" className="text-2xl sm:text-3xl font-serif font-normal text-[#F5F1E9] mt-2">
                {item.title}
              </h3>

              <p className="text-sm text-[#C4BFB6] leading-relaxed mt-4">
                {item.description}
              </p>

              {/* Design Specifications */}
              {item.specifications && item.specifications.length > 0 && (
                <div className="mt-6 pt-5 border-t border-[#DEB778]/15 space-y-2">
                  <h4 className="text-xs uppercase tracking-wider text-[#D8AD68] font-semibold flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Design Specifications</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#918B83]">
                    {item.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#D8AD68] mt-0.5">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Deliverables */}
              {item.deliverables && item.deliverables.length > 0 && (
                <div className="mt-5 pt-4 border-t border-[#DEB778]/15 space-y-2">
                  <h4 className="text-xs uppercase tracking-wider text-[#D8AD68] font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Deliverable Formats</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.deliverables.map((del, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-1 rounded-sm bg-[#18181C] border border-[#DEB778]/20 text-[#C4BFB6]"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA action */}
            <div className="pt-6 border-t border-[#DEB778]/20">
              <button
                onClick={() => {
                  onOrderSimilar(item.serviceKey, item.title);
                  onClose();
                }}
                className="w-full py-3 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#09090B] bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] hover:brightness-105 active:scale-[0.98] transition-all shadow-md shadow-[#D8AD68]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Order a Similar Design</span>
                <ArrowRight className="w-4 h-4 text-[#09090B]" />
              </button>
              <p className="text-[11px] text-center text-[#918B83] mt-2">
                Custom briefs tailored to your specific colors, sizes, and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
