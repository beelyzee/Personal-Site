export type FAQItem = {
  question: string;
  answer: string;
};

export type Neighborhood = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  bestFor: string[];
  housingStock: string[];
  lifestyle: string[];
  pros: string[];
  tradeoffs: string[];
  buyerStrategy: string;
  sellerStrategy: string;
  featuredMetric: string;
  seoTitle: string;
  seoDescription: string;
  faq: FAQItem[];
};

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export type ResourceArticle = {
  slug: string;
  title: string;
  category: "Buying" | "Selling" | "Neighborhoods" | "Market";
  excerpt: string;
  readTime: string;
  featured?: boolean;
  downloadLabel?: string;
};

export type SiteSettingRecord = {
  key: string;
  value: string;
};

export type FormVariant =
  | "contact"
  | "buyer"
  | "seller"
  | "valuation"
  | "consultation"
  | "download";

export type LeadInsert = {
  lead_type: FormVariant;
  source_page: string;
  full_name: string;
  email: string;
  phone: string;
  message?: string | null;
  neighborhood_interest?: string | null;
  property_address?: string | null;
  price_range?: string | null;
  timeline?: string | null;
  financing_stage?: string | null;
  interest_type?: string | null;
  property_type?: string | null;
  consent_to_contact: boolean;
  metadata?: Record<string, string | number | boolean | string[] | null>;
};

