import { IMAGES } from "../assets/images";

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Logos" | "Posters" | "Business Cards" | "Social Media" | "YouTube Thumbnails" | "AI Artwork" | "Other Designs";
  serviceKey: string;
  image: string;
  description: string;
  specifications: string[];
  deliverables: string[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "veridian-luxury-logo",
    title: "Veridian Bespoke Monogram",
    category: "Logos",
    serviceKey: "Logo Design",
    image: IMAGES.luxuryLogo,
    description: "An illustrative luxury monogram mark featuring hand-balanced serif lettering, botanical emblem geometry, and warm metallic gold foil debossing on ultra-black matte stock.",
    specifications: [
      "Palette: Pure Black (#09090B), Warm Metallic Gold (#D8AD68)",
      "Style: Minimalist Luxury Monogram",
      "Vector Grids: 1:1.618 Harmonic Proportion"
    ],
    deliverables: ["Vector AI / EPS", "Transparent PNGs (Gold, Black, White)", "High-Res PDF", "Brand Guidelines Sheet"]
  },
  {
    id: "aether-business-identity",
    title: "Aether Architectural Stationery",
    category: "Business Cards",
    serviceKey: "Business Card",
    image: IMAGES.businessCard,
    description: "Tactile business card layout designed with geometric architectural line art, dual-tone blind deboss and metallic gold hot stamping on 600gsm charcoal cotton board.",
    specifications: [
      "Dimensions: 85mm x 55mm European Standard",
      "Finishing: Foil Stamping & Blind Deboss",
      "Stock: 600gsm Textured Black Card"
    ],
    deliverables: ["Print-Ready CMYK PDF with 3mm Bleed", "Vector Cut Contour", "Digital Card Variant"]
  },
  {
    id: "modernist-dialogue-poster",
    title: "Modernist Dialogue Editorial Poster",
    category: "Posters",
    serviceKey: "Poster Design",
    image: IMAGES.posterEditorial,
    description: "An editorial cultural exhibition poster celebrating form, function, and avant-garde typography with stark black, ivory, and metallic gold accents.",
    specifications: [
      "Format: A1 / A2 / 300 DPI High-Resolution",
      "Typography: Custom Display Serif with Modernist Sans",
      "Composition: Dynamic Asymmetrical Grid"
    ],
    deliverables: ["High-Res 300DPI Print PDF", "Social Media Promo Crop (4:5 / 9:16)", "Web-Ready RGB Asset"]
  },
  {
    id: "obsidian-liquid-sculpture",
    title: "Obsidian & Gold Fluid Synthesis",
    category: "AI Artwork",
    serviceKey: "AI Design",
    image: IMAGES.aiArtwork,
    description: "Chiaroscuro AI-assisted digital artwork exploring the harmony of molten metallic gold and multifaceted geometric obsidian crystals in volumetric space.",
    specifications: [
      "Render Quality: Ultra High-Definition Generative",
      "Color Depth: 32-bit Floating Point Chiaroscuro",
      "Lighting: Studio Rim Light & Ambient Dark Bounce"
    ],
    deliverables: ["Ultra-Res 4K Master Asset", "Wall Art Print File", "Desktop & Mobile Visual Pack"]
  },
  {
    id: "aurum-studio-campaign",
    title: "Aurum Creative Studio Suite",
    category: "Social Media",
    serviceKey: "Social Media Design",
    image: IMAGES.heroStudio,
    description: "Comprehensive social media marketing campaign featuring cohesive dark-aesthetic feed posts, announcement banners, and story templates for luxury brand elevation.",
    specifications: [
      "Ratios: 1:1 Feed Posts, 9:16 Story & Reels, 16:9 Banner",
      "Platform: Instagram, TikTok, LinkedIn & Facebook",
      "Consistency: Cohesive Gold Foil Accent Theme"
    ],
    deliverables: ["Editable Canva Template Link", "Pre-Rendered PNG Assets", "Copy & Caption Placement Guide"]
  },
  {
    id: "apex-creator-thumbnail",
    title: "Cinematic Creator Thumbnail Master",
    category: "YouTube Thumbnails",
    serviceKey: "YouTube Thumbnail",
    image: IMAGES.heroStudio,
    description: "High-contrast, click-tested YouTube thumbnail layout engineered for high CTR with vibrant focal illumination, bold custom typography, and gold rim separation.",
    specifications: [
      "Resolution: 1920x1080 (16:9) Optimized for Mobile Feeds",
      "Legibility: Verified at 150px Mobile Viewport",
      "Contrast: High Dynamic Range Subject Cutout"
    ],
    deliverables: ["Source PSD / Canva File", "Compressed <2MB WebP/JPG", "A/B Test Variant Included"]
  },
  {
    id: "royal-diploma-certificate",
    title: "Executive Honors Certificate",
    category: "Other Designs",
    serviceKey: "Graphic Design",
    image: IMAGES.luxuryLogo,
    description: "Prestigious corporate certificate design featuring Guilloché-inspired gold security borders, formal calligraphy typography, and official seal placement.",
    specifications: [
      "Standard: US Letter & A4 Formats",
      "Typography: Traditional Formal Script & Classic Serif",
      "Borders: Fine Vector Gold Guilloché Filigree"
    ],
    deliverables: ["Editable Template (Canva/Word/InDesign)", "Print-Ready Vector PDF", "Digital PDF Form"]
  },
  {
    id: "gold-edition-promo",
    title: "Black Friday Noir Advertising Suite",
    category: "Posters",
    serviceKey: "Graphic Design",
    image: IMAGES.posterEditorial,
    description: "High-impact advertising visual suite for seasonal promotional campaigns combining sleek dark minimalism with shimmering gold gradient typography.",
    specifications: [
      "Application: Digital Display & Print Billboard",
      "Tone: Exclusive, Premium, Action-Oriented",
      "Layout: Rule-of-Thirds Dynamic Hierarchy"
    ],
    deliverables: ["Multi-Size Banner Package", "Print Master File", "Animation Storyboard"]
  }
];
