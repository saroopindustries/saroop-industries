import { Product } from '../types';

// ============================================
// WIRE & CABLES
// ============================================
export const wireProducts: Product[] = [
  {
    id: "wire-1",
    name: "Gold Auto Cables (30 SWG)",
    slug: "gold-auto-cables-30swg",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "Premium quality auto cables available in various sizes: 14/0.3mm (1.00sq mm), 28/0.3mm (1.50sq mm), 35/0.3mm (2.50sq mm), 44/0.3mm (3.00sq mm), 65/0.3mm (4.00sq mm), 120/0.3mm (10sq mm).",
    featured: true,
    partNumber: "GAC-30SWG",
    // Single image (option 1):
    // image: "/products/wire-cables/gold-auto-cables-30swg.png",
    
    // Multiple images (option 2) - will show as Swiper carousel:
    images: [
      "/products/wire-cables/gold-auto-cables-30swg.png",
      // Add more images here when available:
      // "/products/wire-cables/gold-auto-cables-30swg-2.png",
      // "/products/wire-cables/gold-auto-cables-30swg-3.png",
    ],
    specifications: {
      "Wire Gauge": "30 SWG",
      "Material": "Copper with PVC insulation",
    },
    variantType: "size",
    defaultVariant: "gac-30swg-1.0",
    variants: [
      {
        id: "gac-30swg-1.0",
        code: "GAC-30SWG-1.0",
        name: "1.00 sq mm",
        specifications: {
          "Wire Gauge": "30 SWG",
          "Size": "1.00 sq mm",
          "Stranding": "14/0.3mm",
          "Material": "Copper with PVC insulation",
        },
      },
      {
        id: "gac-30swg-1.5",
        code: "GAC-30SWG-1.5",
        name: "1.50 sq mm",
        specifications: {
          "Wire Gauge": "30 SWG",
          "Size": "1.50 sq mm",
          "Stranding": "28/0.3mm",
          "Material": "Copper with PVC insulation",
        },
      },
      {
        id: "gac-30swg-2.5",
        code: "GAC-30SWG-2.5",
        name: "2.50 sq mm",
        specifications: {
          "Wire Gauge": "30 SWG",
          "Size": "2.50 sq mm",
          "Stranding": "35/0.3mm",
          "Material": "Copper with PVC insulation",
        },
      },
      {
        id: "gac-30swg-3.0",
        code: "GAC-30SWG-3.0",
        name: "3.00 sq mm",
        specifications: {
          "Wire Gauge": "30 SWG",
          "Size": "3.00 sq mm",
          "Stranding": "44/0.3mm",
          "Material": "Copper with PVC insulation",
        },
      },
      {
        id: "gac-30swg-4.0",
        code: "GAC-30SWG-4.0",
        name: "4.00 sq mm",
        specifications: {
          "Wire Gauge": "30 SWG",
          "Size": "4.00 sq mm",
          "Stranding": "65/0.3mm",
          "Material": "Copper with PVC insulation",
        },
      },
      {
        id: "gac-30swg-10.0",
        code: "GAC-30SWG-10.0",
        name: "10.00 sq mm",
        specifications: {
          "Wire Gauge": "30 SWG",
          "Size": "10.00 sq mm",
          "Stranding": "120/0.3mm",
          "Material": "Copper with PVC insulation",
        },
      },
    ],
    tags: ["wire", "cable", "auto", "gold", "premium"],
    applications: ["Automotive", "Vehicle Wiring"],
  },
  {
    id: "wire-2",
    name: "Gold Thin PVC (AVS Type)",
    slug: "gold-thin-pvc-avs",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "Thin wall PVC insulated cables. Available sizes: 16/0.2mm (0.50sq mm), 24/0.2mm (0.75sq mm), 32/0.2mm (1.00sq mm), 30/0.25mm (1.50sq mm), 35/0.3mm (2.50sq mm), 56/0.3mm (4.00sq mm), 84/0.3mm (6.00sq mm).",
    featured: true,
    image: "/products/wire-cables/gold-thin-pvc-avs.png",
    specifications: {
      "Type": "AVS (Automotive Very thin wall Single core)",
      "Available Sizes": "0.50, 0.75, 1.00, 1.50, 2.50, 4.00, 6.00 sq mm",
    },
  },
  {
    id: "wire-3",
    name: "Silver Wire (031 SWG)",
    slug: "silver-wire-031swg",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "High-quality silver-coated wires. Available in 4mm, 5mm, 6mm, 7mm, 8mm, and 10mm sizes.",
    image: "/products/wire-cables/silver-wire-031swg.png",
    specifications: {
      "Wire Gauge": "031 SWG",
      "Available Sizes": "4mm, 5mm, 6mm, 7mm, 8mm, 10mm",
    },
  },
  {
    id: "wire-4",
    name: "Export Thin Wire (036 SWG)",
    slug: "export-thin-036swg",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "Export quality thin wires. Available in 0.75mm, 1.00mm, and 1.50mm sizes.",
    image: "/products/wire-cables/export-thin-036swg.png",
    specifications: {
      "Wire Gauge": "036 SWG",
      "Available Sizes": "0.75mm, 1.00mm, 1.50mm",
      "Quality": "Export Grade",
    },
  },
  {
    id: "wire-5",
    name: "Premium Wire (034 SWG)",
    slug: "premium-wire-034swg",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "Premium quality wires available in 4mm, 5mm, 6mm, 7mm, 8mm, and 10mm sizes.",
    image: "/products/wire-cables/premium-wire-034swg.png",
    specifications: {
      "Wire Gauge": "034 SWG",
      "Available Sizes": "4mm, 5mm, 6mm, 7mm, 8mm, 10mm",
      "Quality": "Premium Grade",
    },
  },
  {
    id: "wire-6",
    name: "Premium Thin Wire (034 SWG)",
    slug: "premium-thin-034swg",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "Premium thin wires. Available sizes: 0.50sq mm, 0.75sq mm, 1.00sq mm, 1.50sq mm, 2.50sq mm, 4.00sq mm, 6.00sq mm.",
    image: "/products/wire-cables/premium-thin-034swg.png",
    specifications: {
      "Wire Gauge": "034 SWG",
      "Available Sizes": "0.50, 0.75, 1.00, 1.50, 2.50, 4.00, 6.00 sq mm",
    },
  },
  {
    id: "wire-7",
    name: "Speaker Wire",
    slug: "speaker-wire",
    category: "Wire & Cables",
    subcategory: "Speaker Cables",
    description: "High-quality speaker wires available in Gold, Premium-2, and Premium-3 variants. Available in transparent (23/23 and 16/16) and white colors. Lengths: 25, 40, 50 & 91 meters.",
    partNumber: "SPW",
    image: "/products/wire-cables/speaker-wire.png",
    variantType: "color",
    defaultVariant: "spw-trans-2323",
    variants: [
      {
        id: "spw-trans-2323",
        code: "SPW-T-2323",
        name: "Transparent 23/23",
        specifications: {
          "Color": "Transparent",
          "Stranding": "23/23",
          "Quality": "Gold",
          "Available Lengths": "25m, 40m, 50m, 91m",
        },
      },
      {
        id: "spw-trans-1616",
        code: "SPW-T-1616",
        name: "Transparent 16/16",
        specifications: {
          "Color": "Transparent",
          "Stranding": "16/16",
          "Quality": "Gold",
          "Available Lengths": "25m, 40m, 50m, 91m",
        },
      },
      {
        id: "spw-white-2323",
        code: "SPW-W-2323",
        name: "White 23/23",
        specifications: {
          "Color": "White",
          "Stranding": "23/23",
          "Quality": "Premium-2",
          "Available Lengths": "25m, 40m, 50m, 91m",
        },
      },
      {
        id: "spw-white-1616",
        code: "SPW-W-1616",
        name: "White 16/16",
        specifications: {
          "Color": "White",
          "Stranding": "16/16",
          "Quality": "Premium-3",
          "Available Lengths": "25m, 40m, 50m, 91m",
        },
      },
    ],
    specifications: {
      "Type": "Speaker Wire",
      "Available Lengths": "25m, 40m, 50m, 91m",
    },
    tags: ["speaker", "wire", "audio", "cable"],
    applications: ["Audio Systems", "Car Audio", "Home Audio"],
  },
  {
    id: "wire-8",
    name: "OE Type Battery Cables",
    slug: "oe-battery-cables",
    category: "Wire & Cables",
    subcategory: "Battery Cables",
    description: "Original Equipment type battery cables. Available sizes: 10.00, 16.00, 25.00, 35.00, 50.00, 70.00, 95.00, 120.00 sq mm. Lengths: 25, 50 & 100 meters.",
    featured: true,
    image: "/products/wire-cables/oe-battery-cables.png",
    specifications: {
      "Type": "OE (Original Equipment)",
      "Available Sizes": "10, 16, 25, 35, 50, 70, 95, 120 sq mm",
      "Available Lengths": "25m, 50m, 100m",
    },
  },
  {
    id: "wire-9",
    name: "After Market Battery Cables",
    slug: "aftermarket-battery-cables",
    category: "Wire & Cables",
    subcategory: "Battery Cables",
    description: "Aftermarket battery cables. Available in 220 Wire, 325 Wire, and 440 Wire variants. Lengths: 25, 50 & 100 meters.",
    image: "/products/wire-cables/aftermarket-battery-cables.png",
    specifications: {
      "Variants": "220 Wire, 325 Wire, 440 Wire",
      "Available Lengths": "25m, 50m, 100m",
    },
  },
];
