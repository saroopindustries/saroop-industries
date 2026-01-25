// ============================================
// PRODUCT TYPE DEFINITIONS
// ============================================

export interface ProductVariant {
  id: string;
  code: string;  // Product identification code
  name?: string;  // Optional variant name
  specifications: Record<string, string>;
  price?: number;
  stock?: string;
  images?: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  description: string;
  image?: string;
  images?: string[];  // Multiple images for gallery
  featured?: boolean;
  partNumber?: string;
  specifications?: Record<string, string>;
  variants?: ProductVariant[];  // Product variants
  variantType?: 'size' | 'color' | 'spec' | 'model';  // Type of variants
  defaultVariant?: string;  // Default variant ID
  tags?: string[];  // For search and filtering
  applications?: string[];  // Use cases (Automotive, Industrial, etc.)
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  icon?: string;
  products: Product[];
  subcategories?: ProductSubcategory[];
}

export interface ProductSubcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: Product[];
}
