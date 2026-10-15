import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { CtaBanner } from "./components/CtaBanner";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { HostingerGuideModal } from "./components/HostingerGuideModal";

export default function App() {
  const [selectedService, setSelectedService] = useState<string>("Graphic Design");
  const [selectedReference, setSelectedReference] = useState<string>("");
  const [isHostingerGuideOpen, setIsHostingerGuideOpen] = useState<boolean>(false);

  const handleOpenOrder = (serviceName?: string, referenceTitle?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    if (referenceTitle) {
      setSelectedReference(referenceTitle);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F5F1E9] flex flex-col font-sans selection:bg-[#D8AD68]/30 selection:text-[#F3D7A0]">
      {/* Fixed Sticky Header */}
      <Navbar onOpenOrder={() => handleOpenOrder()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOrderClick={() => handleOpenOrder()} />

        {/* 2. About the Company */}
        <About />

        {/* 3. Services Section (4 Core Cards) */}
        <Services onSelectService={(service) => handleOpenOrder(service)} />

        {/* 4. Featured Design Portfolio (Filtered Gallery + Modal) */}
        <Portfolio
          onOrderDesign={(serviceKey, referenceTitle) =>
            handleOpenOrder(serviceKey, referenceTitle)
          }
        />

        {/* 5. Custom Design Order Process */}
        <Process onStartOrder={() => handleOpenOrder()} />

        {/* 6. Transparent Pricing Packages */}
        <Pricing onSelectPackage={(pkg) => handleOpenOrder(pkg)} />

        {/* 7. Official Contact & Inquiry Form */}
        <Contact
          initialService={selectedService}
          initialReference={selectedReference}
        />

        {/* 8. Dramatic Final Conversion CTA Banner */}
        <CtaBanner onOrderClick={() => handleOpenOrder()} />
      </main>

      {/* 9. Complete Footer */}
      <Footer onOpenHostingerGuide={() => setIsHostingerGuideOpen(true)} />

      {/* 10. Persistent Direct WhatsApp Channel */}
      <FloatingWhatsApp />

      {/* 11. Hostinger Web Hosting Deployment Guide */}
      <HostingerGuideModal
        isOpen={isHostingerGuideOpen}
        onClose={() => setIsHostingerGuideOpen(false)}
      />
    </div>
  );
}
