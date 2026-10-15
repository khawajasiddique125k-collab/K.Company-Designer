export interface CompanyConfig {
  name: string;
  ceo: string;
  brandDescriptor: string;
  primaryTagline: string;
  supportingTagline: string;
  category: string;
  personality: string[];
  contact: {
    whatsappNumber: string;
    whatsappFormatted: string;
    whatsappUrl: string;
    defaultWhatsappMessage: string;
    email: string;
    facebook: {
      name: string;
      url: string;
    };
    tiktok: {
      handle: string;
      url: string;
    };
    instagram: {
      handle: string;
      url: string;
    };
    youtube: {
      name: string;
      url: string;
    };
    websites: Array<{
      label: string;
      url: string;
      description?: string;
    }>;
  };
  services: Array<{
    id: string;
    title: string;
    category: string;
    shortDesc: string;
    iconName: string;
    features: string[];
  }>;
  pricingPackages: Array<{
    id: string;
    name: string;
    badge?: string;
    description: string;
    isFeatured?: boolean;
    features: string[];
    ctaLabel: string;
  }>;
  processSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  portfolioCategories: string[];
  testimonialsEnabled: boolean;
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: "K.Company & Designer",
  ceo: "Khawaja Khaisama Mahmood Siddiqui",
  brandDescriptor: "Designing Your Dreams",
  primaryTagline: "Your Vision, Our Design.",
  supportingTagline: "Creative Ideas. Stunning Designs.",
  category: "Graphic Design • AI Design • Canva • Freelancing",
  personality: ["Premium", "Creative", "Professional", "Modern", "Trustworthy", "Innovative", "Affordable"],
  
  contact: {
    whatsappNumber: "0344 6302721",
    whatsappFormatted: "0344 6302721",
    whatsappUrl: "https://wa.me/923446302721",
    defaultWhatsappMessage: "Assalamu Alaikum! I would like to request a design from K.Company & Designer. Please guide me about the available services, pricing, and order process.",
    email: "khawajasiddique125k@gmail.com",
    facebook: {
      name: "Khawaja Khaisama Mahmood Siddiqui",
      // Easily configurable Facebook profile URL
      url: "https://www.facebook.com/search/top?q=Khawaja%20Khaisama%20Mahmood%20Siddiqui"
    },
    tiktok: {
      handle: "@khaisamasiddiqui125",
      url: "https://www.tiktok.com/@khaisamasiddiqui125"
    },
    instagram: {
      handle: "@khaisama6811125k",
      url: "https://www.instagram.com/khaisama6811125k/"
    },
    youtube: {
      name: "K.Company & Designer",
      // Configurable channel URL
      url: "https://www.youtube.com/results?search_query=K.Company+%26+Designer"
    },
    websites: [
      {
        label: "Khaisama Siddique — Blog",
        url: "https://khaisamasiddique.blogspot.com",
        description: "Official articles, personal writings, and creative updates."
      },
      {
        label: "Siddiqi Pansar",
        url: "https://Siddiqipansar.com",
        description: "Official business and herbal venture."
      }
    ]
  },

  services: [
    {
      id: "graphic-design",
      title: "Graphic Design",
      category: "Branding & Print",
      shortDesc: "Professional visual designs for businesses, brands, creators, and individuals who want their ideas presented beautifully.",
      iconName: "PenTool",
      features: [
        "Logo Design & Brand Identity",
        "Business Cards & Stationery",
        "Letterheads & Certificates",
        "Flyers, Brochures & Posters",
        "ID Cards & Corporate Badges",
        "Promotional & Event Graphics"
      ]
    },
    {
      id: "ai-design",
      title: "AI Design",
      category: "Generative Art",
      shortDesc: "Creative AI-assisted visuals, original concepts, digital artwork, and compelling visual ideas for content and branding.",
      iconName: "Sparkles",
      features: [
        "AI-Generated Visual Concepts",
        "Creative Digital Artwork",
        "Digital Posters & Wallpapers",
        "Concept Visuals & Ideation",
        "AI-Assisted Content Graphics",
        "Creative Abstract Imagery"
      ]
    },
    {
      id: "canva-design",
      title: "Canva Design",
      category: "Social & Digital",
      shortDesc: "Clean, attractive, professionally arranged Canva designs for social media, business communication, content creators, and digital projects.",
      iconName: "Layers",
      features: [
        "Social Media Posts & Carousels",
        "Instagram Stories & Reels Covers",
        "Facebook Banners & Covers",
        "YouTube Thumbnails & Headers",
        "Business Presentations & Pitch Decks",
        "Custom Canva Templates"
      ]
    },
    {
      id: "editing-freelancing",
      title: "Editing & Freelancing",
      category: "Creative Support",
      shortDesc: "Creative editing and digital design support for customers who need polished visual content and practical design solutions.",
      iconName: "SlidersHorizontal",
      features: [
        "High-End Photo Retouching",
        "Short-Form & Video Editing",
        "Click-Worthy Thumbnail Creation",
        "Digital Content Preparation",
        "Custom Creative Projects",
        "Dedicated Freelance Support"
      ]
    }
  ],

  processSteps: [
    {
      step: "01",
      title: "Share Your Idea",
      description: "Tell us what you need, your preferred style, dimensions, colors, and any reference material."
    },
    {
      step: "02",
      title: "Confirm the Details",
      description: "We discuss the design requirements, agreed price, scope, and expected delivery arrangements."
    },
    {
      step: "03",
      title: "Design & Refine",
      description: "We create the design according to the agreed brief and handle any revisions included in the confirmed order."
    },
    {
      step: "04",
      title: "Receive Your Design",
      description: "Your approved digital design is delivered electronically through your preferred digital delivery method."
    }
  ],

  pricingPackages: [
    {
      id: "basic",
      name: "Basic Design",
      badge: "Standard",
      description: "For simple digital design needs and straightforward requirements.",
      features: [
        "Single design concept / artwork",
        "Clean layout and balanced typography",
        "High-resolution digital delivery (PNG / JPEG / PDF)",
        "Suitable for social posts, cards, or simple flyers",
        "Electronic delivery per confirmed order"
      ],
      ctaLabel: "Request a Basic Design"
    },
    {
      id: "premium",
      name: "Premium Design",
      badge: "Most Popular",
      isFeatured: true,
      description: "For clients who require a refined visual presentation and custom styling.",
      features: [
        "Detailed visual design & custom typography",
        "Tailored color palette & styling elements",
        "High-resolution print-ready & digital assets",
        "Included revisions per agreed scope",
        "Source files & multi-format delivery"
      ],
      ctaLabel: "Request a Premium Design"
    },
    {
      id: "custom",
      name: "Custom Creative Project",
      badge: "Tailored",
      description: "For specialized or multi-design requirements and ongoing creative support.",
      features: [
        "Comprehensive project scope discussion",
        "Multi-asset branding or content bundle",
        "Transparent custom quote based on complexity",
        "Priority turnaround & direct WhatsApp coordination",
        "Agreed digital delivery arrangements"
      ],
      ctaLabel: "Get a Custom Quote"
    }
  ],

  portfolioCategories: [
    "All Work",
    "Logos",
    "Posters",
    "Business Cards",
    "Social Media",
    "YouTube Thumbnails",
    "AI Artwork",
    "Other Designs"
  ],

  // Kept false until genuine, verified client testimonials are provided
  testimonialsEnabled: false
};
