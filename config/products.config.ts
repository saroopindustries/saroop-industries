// ============================================
// PRODUCT CONFIGURATION
// Centralized product catalog with modular category imports
// ============================================

// Import types
export type {
  Product,
  ProductVariant,
  ProductCategory,
  ProductSubcategory,
} from './products/types';

// Import products by category
import { wireProducts } from './products/categories/wire-cables';
import { brassTerminalProducts } from './products/categories/brass-terminals';
import { 
  switchProducts,
  flasherProducts,
  relayProducts,
  tunerProducts,
} from './products/categories/electrical-components';
import { fuseBoxProducts } from './products/categories/fuse-boxes';
import { 
  holderProducts,
  connectorProducts,
  jointerHolderProducts,
} from './products/categories/holders-connectors';

import type { Product, ProductCategory } from './products/types';

// ============================================
// ALL PRODUCTS AGGREGATION
// ============================================
export const allProducts: Product[] = [
  ...wireProducts,
  ...brassTerminalProducts,
  ...switchProducts,
  ...flasherProducts,
  ...relayProducts,
  ...tunerProducts,
  ...fuseBoxProducts,
  ...holderProducts,
  ...connectorProducts,
  ...jointerHolderProducts,
];

// ============================================
// FEATURED PRODUCTS
// ============================================
export const featuredProducts: Product[] = allProducts.filter(p => p.featured);

// ============================================
// PRODUCT CATEGORIES WITH METADATA
// ============================================
export const productCategories: ProductCategory[] = [
  {
    id: "wire-cables",
    name: "Wire & Cables",
    slug: "wire-cables",
    description: "High-quality automotive wires and cables including auto cables, battery cables, and speaker wires.",
    icon: "🔌",
    products: wireProducts,
    subcategories: [
      { 
        id: "auto-cables", 
        name: "Auto Cables", 
        slug: "auto-cables", 
        description: "Premium automotive cables", 
        products: wireProducts.filter(p => p.subcategory === "Auto Cables") 
      },
      { 
        id: "battery-cables", 
        name: "Battery Cables", 
        slug: "battery-cables", 
        description: "Heavy-duty battery cables", 
        products: wireProducts.filter(p => p.subcategory === "Battery Cables") 
      },
      { 
        id: "speaker-cables", 
        name: "Speaker Cables", 
        slug: "speaker-cables", 
        description: "Audio speaker wires", 
        products: wireProducts.filter(p => p.subcategory === "Speaker Cables") 
      },
    ],
  },
  {
    id: "brass-terminal",
    name: "Brass Terminals",
    slug: "brass-terminal",
    description: "Precision-engineered brass terminals including Ring, Fork, Bullet, and various series terminals.",
    icon: "⚡",
    products: brassTerminalProducts,
    subcategories: [
      { id: "ring-series", name: "Ring Series", slug: "ring-series", description: "Ring terminals for secure connections", products: brassTerminalProducts.filter(p => p.subcategory === "Ring Series") },
      { id: "fork-series", name: "Fork Series", slug: "fork-series", description: "Fork/spade terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Fork Series") },
      { id: "jointer-series", name: "Jointer Series", slug: "jointer-series", description: "Wire-to-wire jointer terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Jointer Series") },
      { id: "bullet-series", name: "Bullet Series", slug: "bullet-series", description: "Bullet connectors", products: brassTerminalProducts.filter(p => p.subcategory === "Bullet Series") },
      { id: "fuse-series", name: "Fuse Series", slug: "fuse-series", description: "Fuse terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Fuse Series") },
      { id: "090-series", name: "090 Series", slug: "090-series", description: "090 (2.3mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "090 Series") },
      { id: "0110-series", name: "0110 Series", slug: "0110-series", description: "0110 (2.8mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "0110 Series") },
      { id: "0187-series", name: "0187 Series", slug: "0187-series", description: "0187 (4.8mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "0187 Series") },
      { id: "0250-series", name: "0250 Series", slug: "0250-series", description: "0250 (6.3mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "0250 Series") },
      { id: "0312-series", name: "0312 Series", slug: "0312-series", description: "0312 (7.8mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "0312 Series") },
      { id: "0375-series", name: "0375 Series", slug: "0375-series", description: "0375 (9.5mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "0375 Series") },
      { id: "special-series", name: "Special Series", slug: "special-series", description: "Custom terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Special Series") },
      { id: "brass-lugs", name: "Brass Lugs", slug: "brass-lugs", description: "Cable lugs", products: brassTerminalProducts.filter(p => p.subcategory === "Brass Lugs") },
      { id: "sheet-terminals", name: "Sheet Terminals", slug: "sheet-terminals", description: "Flat sheet terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Sheet Terminals") },
      { id: "battery-terminals", name: "Battery Terminals", slug: "battery-terminals", description: "Battery terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Battery Terminals") },
    ],
  },
  {
    id: "electrical-components",
    name: "Electrical Components",
    slug: "electrical-components",
    description: "Complete range of automotive electrical components including switches, relays, flashers, and tuners.",
    icon: "⚙️",
    products: [...switchProducts, ...flasherProducts, ...relayProducts, ...tunerProducts],
    subcategories: [
      { id: "switches", name: "Switches", slug: "switches", description: "Automotive switches", products: switchProducts },
      { id: "flashers", name: "Flashers", slug: "flashers", description: "Turn signal flashers", products: flasherProducts },
      { id: "relays", name: "Relays", slug: "relays", description: "Automotive relays", products: relayProducts },
      { id: "tuners", name: "Tuners", slug: "tuners", description: "Electrical distribution tuners", products: tunerProducts },
    ],
  },
  {
    id: "holders-connectors",
    name: "Holders & Connectors",
    slug: "holders-connectors",
    description: "Comprehensive range of connector holders and automotive connectors for various applications.",
    icon: "🔗",
    products: [...holderProducts, ...connectorProducts, ...jointerHolderProducts],
    subcategories: [
      { id: "holders", name: "Holders", slug: "holders", description: "Connector holders", products: holderProducts },
      { id: "connectors", name: "Connectors", slug: "connectors", description: "Automotive connectors", products: connectorProducts },
      { id: "jointer-holders", name: "Jointer Holders", slug: "jointer-holders", description: "Jointer holders", products: jointerHolderProducts },
    ],
  },
  {
    id: "fuse-boxes",
    name: "Fuse Boxes & Wiring",
    slug: "fuse-boxes",
    description: "Fuse boxes for various vehicle makes and models.",
    icon: "📦",
    products: fuseBoxProducts,
    subcategories: [
      { id: "fuse-boxes", name: "Fuse Boxes", slug: "fuse-boxes-cat", description: "Vehicle fuse boxes", products: fuseBoxProducts.filter(p => p.subcategory === "Fuse Box") },
      { id: "headlight-wiring", name: "Headlight Wiring", slug: "headlight-wiring", description: "Headlight relay wiring kits", products: fuseBoxProducts.filter(p => p.subcategory === "Head Light Relay Wiring") },
    ],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a product by its slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((product) => product.slug === slug);
}

/**
 * Get all products in a category by category slug
 */
export function getProductsByCategory(categorySlug: string): Product[] {
  const category = productCategories.find((cat) => cat.slug === categorySlug);
  return category?.products || [];
}

/**
 * Get a category by its slug
 */
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((cat) => cat.slug === slug);
}

/**
 * Search products by query string
 */
export function searchProducts(query: string): Product[] {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  return allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm) ||
      p.partNumber?.toLowerCase().includes(searchTerm) ||
      p.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get products by application
 */
export function getProductsByApplication(application: string): Product[] {
  return allProducts.filter(
    (p) => p.applications?.includes(application)
  );
}

// ============================================
// STATISTICS
// ============================================
export const totalProductCount = allProducts.length;
export const totalCategoryCount = productCategories.length;
export const featuredProductCount = featuredProducts.length;
