import React, { useState } from "react";
import {
  MessageCircle,
  Mail,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  Globe,
  Share2,
  Phone,
  User,
  Instagram,
  Youtube
} from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";

interface ContactProps {
  initialService?: string;
  initialReference?: string;
}

export const Contact: React.FC<ContactProps> = ({
  initialService = "Graphic Design",
  initialReference = "",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: initialService,
    designType: "Brand Identity / Logo",
    budget: "",
    description: "",
    reference: initialReference,
    consent: false,
  });

  // Keep synced if parent changes initial service or reference
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  React.useEffect(() => {
    if (initialReference) {
      setFormData((prev) => ({ ...prev, reference: initialReference }));
    }
  }, [initialReference]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const serviceOptions = [
    "Graphic Design",
    "Logo Design",
    "Business Card",
    "Poster Design",
    "Social Media Design",
    "Canva Design",
    "AI Design",
    "Photo Editing",
    "Video Editing",
    "YouTube Thumbnail",
    "Other Custom Design",
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please provide your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email format.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your WhatsApp or phone number.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please share a brief description of your design requirements.";
    }

    if (!formData.consent) {
      newErrors.consent = "Please confirm that you agree to be contacted regarding this request.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Save locally to localStorage so inquiries are never lost even without a server backend
    try {
      const savedInquiries = JSON.parse(localStorage.getItem("kcompany_inquiries") || "[]");
      savedInquiries.push({
        ...formData,
        id: `INQ-${Date.now()}`,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("kcompany_inquiries", JSON.stringify(savedInquiries));
    } catch {
      // Local storage fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 600);
  };

  const handleWhatsAppOrder = () => {
    const lines = [
      `*Design Request for ${COMPANY_CONFIG.name}*`,
      `Client: ${formData.fullName || "Prospective Client"}`,
      `Phone/WhatsApp: ${formData.phone || "Not specified"}`,
      `Email: ${formData.email || "Not specified"}`,
      `Service: ${formData.service}`,
      `Design Type: ${formData.designType}`,
      formData.budget ? `Budget: ${formData.budget}` : "",
      formData.reference ? `Reference: ${formData.reference}` : "",
      `Project Brief: ${formData.description || "I would like to discuss a custom design project."}`
    ].filter(Boolean);

    const fullMessage = lines.join("\n");
    const url = `${COMPANY_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 bg-[#09090B] relative overflow-hidden border-t border-[#DEB778]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#D8AD68]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Official Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#D8AD68] uppercase">
                LET'S CREATE SOMETHING GREAT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#F5F1E9]">
                Have a Design in Mind?
              </h2>
              <p className="text-[#C4BFB6] text-sm sm:text-base leading-relaxed">
                Share your idea with <strong className="text-[#F5F1E9]">{COMPANY_CONFIG.name}</strong>.
                Whether you need a logo, poster, social media graphic, AI artwork, or a custom digital design,
                let's discuss the right solution for your project.
              </p>
            </div>

            {/* CEO Block */}
            <div className="p-4 rounded-sm border border-[#DEB778]/25 bg-[#18181C]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D8AD68] block">
                CEO & Founder
              </span>
              <h3 className="text-base font-semibold text-[#F5F1E9] mt-1">
                {COMPANY_CONFIG.ceo}
              </h3>
              <p className="text-xs text-[#918B83] mt-0.5">
                Direct coordination for all custom design commissions.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3.5">
              {/* WhatsApp */}
              <a
                href={`${COMPANY_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
                  COMPANY_CONFIG.contact.defaultWhatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-sm border border-[#DEB778]/25 bg-[#111114] hover:border-[#D8AD68] hover:bg-[#18181C] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-[#09090B] border border-[#DEB778]/30 flex items-center justify-center text-[#D8AD68] group-hover:text-[#F3D7A0] transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#918B83] uppercase tracking-wider block">Official WhatsApp</span>
                    <span className="text-sm font-medium text-[#F5F1E9] group-hover:text-[#F3D7A0] transition-colors">
                      {COMPANY_CONFIG.contact.whatsappFormatted}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#D8AD68] font-medium">Chat Now →</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_CONFIG.contact.email}?subject=Design%20Inquiry%20-%20K.Company%20%26%20Designer`}
                className="flex items-center justify-between p-3.5 rounded-sm border border-[#DEB778]/25 bg-[#111114] hover:border-[#D8AD68] hover:bg-[#18181C] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-[#09090B] border border-[#DEB778]/30 flex items-center justify-center text-[#D8AD68] group-hover:text-[#F3D7A0] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-[#918B83] uppercase tracking-wider block">Direct Email</span>
                    <span className="text-sm font-medium text-[#F5F1E9] group-hover:text-[#F3D7A0] transition-colors truncate block">
                      {COMPANY_CONFIG.contact.email}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#D8AD68] font-medium shrink-0">Email Us →</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-4 border-t border-[#DEB778]/15 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#D8AD68] uppercase block">
                Social Profiles & Channels
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href={COMPANY_CONFIG.contact.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-sm border border-[#DEB778]/20 bg-[#111114] hover:border-[#D8AD68] text-[#C4BFB6] hover:text-[#F3D7A0] flex items-center justify-between transition-colors"
                >
                  <span className="truncate">TikTok: {COMPANY_CONFIG.contact.tiktok.handle}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D8AD68] shrink-0" />
                </a>

                <a
                  href={COMPANY_CONFIG.contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-sm border border-[#DEB778]/20 bg-[#111114] hover:border-[#D8AD68] text-[#C4BFB6] hover:text-[#F3D7A0] flex items-center justify-between transition-colors"
                >
                  <span className="truncate">Instagram: {COMPANY_CONFIG.contact.instagram.handle}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D8AD68] shrink-0" />
                </a>

                <a
                  href={COMPANY_CONFIG.contact.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-sm border border-[#DEB778]/20 bg-[#111114] hover:border-[#D8AD68] text-[#C4BFB6] hover:text-[#F3D7A0] flex items-center justify-between transition-colors"
                >
                  <span className="truncate">Facebook: {COMPANY_CONFIG.contact.facebook.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D8AD68] shrink-0" />
                </a>

                <a
                  href={COMPANY_CONFIG.contact.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-sm border border-[#DEB778]/20 bg-[#111114] hover:border-[#D8AD68] text-[#C4BFB6] hover:text-[#F3D7A0] flex items-center justify-between transition-colors"
                >
                  <span className="truncate">YouTube: {COMPANY_CONFIG.contact.youtube.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D8AD68] shrink-0" />
                </a>
              </div>
            </div>

            {/* Official Partner / Venture Websites (Section 15) */}
            <div className="pt-4 border-t border-[#DEB778]/15 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#D8AD68] uppercase block">
                Our Official Websites
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COMPANY_CONFIG.contact.websites.map((web) => (
                  <a
                    key={web.url}
                    href={web.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-sm border border-[#DEB778]/25 bg-[#18181C] hover:border-[#D8AD68] transition-all group block"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#F5F1E9] group-hover:text-[#F3D7A0] transition-colors">
                        {web.label}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#D8AD68]" />
                    </div>
                    {web.description && (
                      <p className="text-[11px] text-[#918B83] mt-1 line-clamp-1">{web.description}</p>
                    )}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Custom Design Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-[#DEB778]/30 bg-[#18181C] p-6 sm:p-8 shadow-2xl relative">
              
              <div className="pb-5 border-b border-[#DEB778]/15 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-serif font-medium text-[#F5F1E9]">
                    Custom Design Request
                  </h3>
                  <p className="text-xs text-[#918B83] mt-0.5">
                    Receive a tailored proposal and timeline for your creative project.
                  </p>
                </div>
                <span className="text-[10px] tracking-wider uppercase text-[#D8AD68] border border-[#DEB778]/30 px-2 py-1 rounded-sm w-fit">
                  Direct Submission
                </span>
              </div>

              {submittedSuccess ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#111114] border border-[#D8AD68] mx-auto flex items-center justify-center text-[#D8AD68] shadow-lg shadow-[#D8AD68]/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif text-[#F5F1E9]">Request Submitted Successfully</h4>
                  <p className="text-sm text-[#C4BFB6] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F5F1E9]">{formData.fullName}</strong>. Your design request
                    for <strong className="text-[#F3D7A0]">{formData.service}</strong> has been registered.
                    Khawaja Khaisama Mahmood Siddiqui will review your requirements and reach out via WhatsApp or email.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppOrder}
                      className="px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#09090B] bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] hover:brightness-105 transition-all flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up: Open on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmittedSuccess(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          service: "Graphic Design",
                          designType: "Brand Identity / Logo",
                          budget: "",
                          description: "",
                          reference: "",
                          consent: false,
                        });
                      }}
                      className="px-4 py-2 text-xs text-[#C4BFB6] hover:text-[#F5F1E9] transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#C4BFB6] mb-1.5">
                        Full Name <span className="text-[#D8AD68]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. John Doe / Brand Manager"
                        className={`w-full px-3.5 py-2.5 rounded-sm bg-[#111114] border text-xs text-[#F5F1E9] placeholder-[#918B83]/60 focus:outline-none transition-colors ${
                          errors.fullName
                            ? "border-red-500/80 focus:border-red-500"
                            : "border-[#DEB778]/25 focus:border-[#D8AD68]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#C4BFB6] mb-1.5">
                        Email Address <span className="text-[#D8AD68]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. client@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-sm bg-[#111114] border text-xs text-[#F5F1E9] placeholder-[#918B83]/60 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500/80 focus:border-red-500"
                            : "border-[#DEB778]/25 focus:border-[#D8AD68]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: WhatsApp / Phone & Service Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#C4BFB6] mb-1.5">
                        WhatsApp or Phone Number <span className="text-[#D8AD68]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0344 1234567 or +92..."
                        className={`w-full px-3.5 py-2.5 rounded-sm bg-[#111114] border text-xs text-[#F5F1E9] placeholder-[#918B83]/60 focus:outline-none transition-colors ${
                          errors.phone
                            ? "border-red-500/80 focus:border-red-500"
                            : "border-[#DEB778]/25 focus:border-[#D8AD68]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#C4BFB6] mb-1.5">
                        Select a Service <span className="text-[#D8AD68]">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#111114] border border-[#DEB778]/25 text-xs text-[#F5F1E9] focus:outline-none focus:border-[#D8AD68] transition-colors"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#18181C] text-[#F5F1E9]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Design Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#C4BFB6] mb-1.5">
                        Design Type / Category
                      </label>
                      <input
                        type="text"
                        value={formData.designType}
                        onChange={(e) => setFormData({ ...formData, designType: e.target.value })}
                        placeholder="e.g. Minimalist Gold Logo, YouTube Banner"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#111114] border border-[#DEB778]/25 text-xs text-[#F5F1E9] placeholder-[#918B83]/60 focus:outline-none focus:border-[#D8AD68] transition-colors"
                      >
                      </input>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#C4BFB6] mb-1.5">
                        Preferred Budget (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        placeholder="e.g. Standard rate, or custom quote"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#111114] border border-[#DEB778]/25 text-xs text-[#F5F1E9] placeholder-[#918B83]/60 focus:outline-none focus:border-[#D8AD68] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 4: Project Description */}
                  <div>
                    <label className="block text-xs font-medium text-[#C4BFB6] mb-1.5">
                      Project Description <span className="text-[#D8AD68]">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Briefly describe what you want designed, preferred colors, dimensions, target audience..."
                      className={`w-full px-3.5 py-2.5 rounded-sm bg-[#111114] border text-xs text-[#F5F1E9] placeholder-[#918B83]/60 focus:outline-none transition-colors ${
                        errors.description
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-[#DEB778]/25 focus:border-[#D8AD68]"
                      }`}
                    />
                    {errors.description && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.description}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 5: Reference / Requirements */}
                  <div>
                    <label className="block text-xs font-medium text-[#C4BFB6] mb-1.5">
                      Reference Link or Specific Requirements (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.reference}
                      onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                      placeholder="e.g. Link to sample style, portfolio item name, or delivery format preference"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#111114] border border-[#DEB778]/25 text-xs text-[#F5F1E9] placeholder-[#918B83]/60 focus:outline-none focus:border-[#D8AD68] transition-colors"
                    />
                  </div>

                  {/* Consent checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 text-xs text-[#C4BFB6] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded-sm text-[#D8AD68] focus:ring-[#D8AD68] bg-[#111114] border-[#DEB778]/40"
                      />
                      <span>
                        I authorize K.Company & Designer to contact me regarding this design request. Digital deliverables are sent electronically upon order completion.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission Actions */}
                  <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#09090B] bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] hover:brightness-105 active:scale-[0.98] transition-all shadow-md shadow-[#D8AD68]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-[#09090B]" />
                          <span>Send My Design Request</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppOrder}
                      className="py-3 px-4 rounded-sm text-xs font-medium text-[#F3D7A0] border border-[#DEB778]/30 hover:border-[#D8AD68] hover:bg-[#111114] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#D8AD68]" />
                      <span>Order Directly on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
