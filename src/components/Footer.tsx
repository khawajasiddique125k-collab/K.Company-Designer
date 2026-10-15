import React, { useState } from "react";
import { ArrowUp, ExternalLink, MessageCircle, Mail, Globe, Shield, FileText } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";

interface FooterProps {
  onOpenHostingerGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHostingerGuide }) => {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    "Graphic Design",
    "AI Design",
    "Canva Design",
    "Photo Editing",
    "Video Editing",
    "Social Media Design",
    "YouTube Thumbnails",
    "Custom Design Projects",
  ];

  return (
    <footer className="bg-[#09090B] text-[#C4BFB6] border-t border-[#DEB778]/20 relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#DEB778]/15">
          
          {/* Col 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm border border-[#D8AD68]/50 bg-[#18181C] flex items-center justify-center">
                <span className="font-serif text-base font-bold text-[#F3D7A0]">K</span>
              </div>
              <span className="font-serif text-xl font-semibold text-[#F5F1E9] tracking-wide">
                {COMPANY_CONFIG.name}
              </span>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-[#D8AD68] font-medium">
              {COMPANY_CONFIG.brandDescriptor}
            </p>

            <p className="font-serif italic text-sm text-[#F3D7A0]">
              “{COMPANY_CONFIG.primaryTagline}”
            </p>

            <p className="text-xs text-[#918B83] leading-relaxed max-w-sm">
              Creative design solutions for individuals, creators, and businesses looking for high-end graphic design, AI visuals, and Canva assets.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenHostingerGuide}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[#DEB778]/30 bg-[#18181C] text-[11px] text-[#F3D7A0] hover:border-[#D8AD68] transition-colors"
              >
                <span>Hostinger Deployment Guide</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F1E9]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F3D7A0] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F1E9]">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#contact" className="hover:text-[#F3D7A0] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Social Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F1E9]">
              Contact Details
            </h4>
            
            <div className="space-y-2 text-xs text-[#918B83]">
              <p>
                <span className="text-[#C4BFB6] block">CEO:</span>
                <span className="text-[#F5F1E9]">{COMPANY_CONFIG.ceo}</span>
              </p>
              
              <p>
                <span className="text-[#C4BFB6] block">WhatsApp:</span>
                <a
                  href={COMPANY_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D8AD68] hover:underline"
                >
                  {COMPANY_CONFIG.contact.whatsappFormatted}
                </a>
              </p>

              <p>
                <span className="text-[#C4BFB6] block">Email:</span>
                <a
                  href={`mailto:${COMPANY_CONFIG.contact.email}`}
                  className="text-[#D8AD68] hover:underline truncate block"
                >
                  {COMPANY_CONFIG.contact.email}
                </a>
              </p>

              <div className="pt-2 space-y-1">
                <span className="text-[#C4BFB6] block">Socials:</span>
                <div className="flex flex-col gap-1 text-[11px]">
                  <a href={COMPANY_CONFIG.contact.tiktok.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#F3D7A0]">
                    TikTok: {COMPANY_CONFIG.contact.tiktok.handle}
                  </a>
                  <a href={COMPANY_CONFIG.contact.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#F3D7A0]">
                    Instagram: {COMPANY_CONFIG.contact.instagram.handle}
                  </a>
                  <a href={COMPANY_CONFIG.contact.facebook.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#F3D7A0]">
                    Facebook: {COMPANY_CONFIG.contact.facebook.name}
                  </a>
                  <a href={COMPANY_CONFIG.contact.youtube.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#F3D7A0]">
                    YouTube: {COMPANY_CONFIG.contact.youtube.name}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dedicated "Our Websites" Row (Section 15) */}
        <div className="py-6 border-b border-[#DEB778]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#C4BFB6]">
            <Globe className="w-4 h-4 text-[#D8AD68]" />
            <span className="font-semibold uppercase tracking-wider text-[#F5F1E9]">Our Websites:</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {COMPANY_CONFIG.contact.websites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#D8AD68] hover:text-[#F3D7A0] transition-colors"
              >
                <span>{site.label}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#918B83]">
          <div>
            <span>© {currentYear} {COMPANY_CONFIG.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModal("privacy")}
              className="hover:text-[#F5F1E9] transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setLegalModal("terms")}
              className="hover:text-[#F5F1E9] transition-colors"
            >
              Terms of Use
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#D8AD68] hover:text-[#F3D7A0] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Accessible Legal Modals */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="w-full max-w-lg p-6 rounded-sm border border-[#DEB778]/40 bg-[#18181C] text-[#F5F1E9] shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#DEB778]/20">
              <h3 className="font-serif text-xl font-medium">
                {legalModal === "privacy" ? "Privacy Policy" : "Terms of Service"}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="text-xs text-[#C4BFB6] hover:text-white"
              >
                Close [✕]
              </button>
            </div>

            <div className="text-xs text-[#C4BFB6] space-y-2.5 max-h-60 overflow-y-auto leading-relaxed">
              {legalModal === "privacy" ? (
                <>
                  <p>
                    <strong>1. Information Collection:</strong> K.Company & Designer collects only client contact details (name, email, phone/WhatsApp number) specifically submitted for fulfilling design requests and project scoping.
                  </p>
                  <p>
                    <strong>2. Confidentiality:</strong> Your project briefs, brand assets, and reference materials are held strictly confidential and never shared with third parties.
                  </p>
                  <p>
                    <strong>3. Data Retention:</strong> Contact details are retained solely to facilitate order delivery, revisions, and ongoing communication.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Service Deliverables:</strong> All designs created by K.Company & Designer are delivered electronically in agreed high-resolution digital formats (vector AI, PNG, PDF, JPG).
                  </p>
                  <p>
                    <strong>2. Revisions & Approvals:</strong> Revisions are executed per the confirmed order scope. Final delivery requires mutual client confirmation.
                  </p>
                  <p>
                    <strong>3. Ownership:</strong> Upon full payment of the agreed project fee, full commercial usage rights for the final custom design are transferred to the client.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-sm text-xs bg-[#D8AD68] text-[#09090B] font-semibold"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
