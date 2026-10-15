import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";

interface NavbarProps {
  onOpenOrder: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090B]/95 backdrop-blur-md border-b border-[#DEB778]/20 shadow-2xl shadow-black/80 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8AD68]"
          >
            <div className="w-9 h-9 rounded-sm border border-[#D8AD68]/60 bg-gradient-to-br from-[#18181C] to-[#09090B] flex items-center justify-center shadow-md group-hover:border-[#F3D7A0] transition-colors">
              <span className="font-serif text-lg font-bold text-[#F3D7A0] tracking-wider">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide text-[#F5F1E9] group-hover:text-[#F3D7A0] transition-colors">
                {COMPANY_CONFIG.name}
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#D8AD68]/90 font-medium uppercase">
                {COMPANY_CONFIG.brandDescriptor}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-[#C4BFB6] hover:text-[#F3D7A0] transition-colors cursor-pointer relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D8AD68]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenOrder()}
              className="relative group px-5 py-2.5 rounded-sm overflow-hidden text-xs font-semibold tracking-wider uppercase text-[#09090B] bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] hover:brightness-105 active:scale-[0.98] transition-all shadow-md shadow-[#D8AD68]/20 flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D7A0]"
            >
              <span>Get a Custom Design</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#09090B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#C4BFB6] hover:text-[#F3D7A0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D8AD68]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111114] border-b border-[#DEB778]/25 px-6 pt-4 pb-6 space-y-3 transition-all animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-[#C4BFB6] hover:text-[#F3D7A0] transition-colors py-2 border-b border-[#27272A]/50"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3 rounded-sm text-center text-xs font-semibold uppercase tracking-wider text-[#09090B] bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] shadow-md shadow-[#D8AD68]/20"
            >
              Get a Custom Design
            </button>
            <a
              href={COMPANY_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-sm text-center text-xs font-medium text-[#D8AD68] border border-[#D8AD68]/30 hover:border-[#D8AD68] transition-colors"
            >
              Chat on WhatsApp ({COMPANY_CONFIG.contact.whatsappFormatted})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
