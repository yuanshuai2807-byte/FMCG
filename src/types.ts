export type ProductCategory = 
  | 'All'
  | 'Beverages' 
  | 'Snacks & Pantry' 
  | 'Personal Care' 
  | 'Home & Eco' 
  | 'Dairy & Cold Brew';

export type ProductBadge = 'New Launch' | 'Best Seller' | 'Staff Pick' | 'Award Winner' | 'Seasonal Special';

export type ProductTag = 
  | 'Organic' 
  | 'Non-GMO' 
  | 'Zero Sugar' 
  | 'Vegan' 
  | 'Eco-Friendly' 
  | 'Gluten-Free' 
  | 'Cold-Pressed' 
  | 'Cruelty-Free'
  | 'Plastic-Free' 
  | 'Fair Trade'
  | 'Plant-Based';

export interface FMCGProduct {
  id: string;
  sku: string;
  name: string;
  brandLine: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  price: number;
  msrp: number;
  packSize: string;
  imageUrl: string;
  galleryImages: string[];
  badge: ProductBadge;
  tags: ProductTag[];
  usps: string[];
  keyBenefits: {
    icon: string;
    title: string;
    desc: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
  retailers: string[];
  rating: number;
  reviewCount: number;
  accentColor: string;
  inStock: boolean;
  shelfLife: string;
  casePack: string;
  tasteOrAromaProfile?: string[];
  advertisingSnippet: string;
}

export interface RetailerStore {
  id: string;
  name: string;
  logo: string;
  address: string;
  city: string;
  distance: string;
  inStockBrands: string[];
  isOpenNow: boolean;
}

export interface CampaignHighlight {
  id: string;
  title: string;
  subtitle: string;
  mediaType: 'image' | 'video_mock';
  mediaUrl: string;
  duration?: string;
  headline: string;
  ctaText: string;
  promoCode: string;
  discountPercentage: number;
  featuredProductIds: string[];
}
