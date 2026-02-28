export interface ProductVariant {
  id: string;
  code: string;
  name?: string;
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
  images?: string[];
  featured?: boolean;
  partNumber?: string;
  specifications?: Record<string, string>;
  variants?: ProductVariant[];
  variantType?: 'size' | 'color' | 'spec' | 'model';
  defaultVariant?: string;
  tags?: string[];
  applications?: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
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
