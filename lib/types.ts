export interface NavItem {
  label: string;
  href: string;
}

export interface NavAction {
  label: string;
  icon: string;
  action: string;
  showBadge?: boolean;
}

export interface ProductColor {
  name: string;
  hex?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number | null;
  image: string;
  category: string;
  badge?: string | null;
  colors?: string[] | ProductColor[];
  sizes?: string[];
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  productCount: number;
  description?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location?: string;
  avatar?: string;
  rating?: number;
  product?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  products?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface CountdownConfig {
  enabled: boolean;
  endDate: string;
}
