export const CREDIT_RANGES = [
  "760+",
  "720-759",
  "680-719",
  "640-679",
  "Below 640",
] as const;

export type CreditRange = (typeof CREDIT_RANGES)[number];

export type EstimateInput = {
  annual_income: number;
  down_payment: number;
  credit_range: CreditRange;
  monthly_debt: number;
};

export type EstimateResult = {
  estimated_price_low: number;
  estimated_price_high: number;
  estimated_loan_low: number;
  estimated_loan_high: number;
  estimated_monthly_payment_low: number;
  estimated_monthly_payment_high: number;
  assumptions: {
    dtiCap: number;
    rateLow: number;
    rateHigh: number;
  };
};

export type LeadPayload = {
  full_name: string;
  email: string;
  phone: string;
  annual_income?: number | null;
  down_payment?: number | null;
  credit_range?: CreditRange | null;
  monthly_debt?: number | null;
  estimated_price_low?: number | null;
  estimated_price_high?: number | null;
  estimated_loan_low?: number | null;
  estimated_loan_high?: number | null;
  source_page: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  consent_to_contact: boolean;
  created_at?: string;
};

export type LeadApiResponse = {
  success: boolean;
  message: string;
  leadId?: string;
};

