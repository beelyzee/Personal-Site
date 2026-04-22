import { z } from "zod";

export const baseLeadSchema = z.object({
  full_name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(10, "Enter a valid phone number"),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  consent_to_contact: z.boolean().refine((value) => value === true, {
    message: "Consent is required",
  }),
});

export const contactSchema = baseLeadSchema.extend({
  source_page: z.string(),
});

export const buyerSchema = baseLeadSchema.extend({
  source_page: z.string(),
  neighborhood_interest: z.string().trim().min(2, "Add a neighborhood or area"),
  price_range: z.string().trim().min(2, "Select a target price range"),
  timeline: z.string().trim().min(2, "Select a timeline"),
  financing_stage: z.string().trim().min(2, "Select financing stage"),
});

export const sellerSchema = baseLeadSchema.extend({
  source_page: z.string(),
  property_address: z.string().trim().min(5, "Enter the property address"),
  timeline: z.string().trim().min(2, "Select a timeline"),
  price_range: z.string().trim().min(2, "Add your expected value range"),
  interest_type: z.string().trim().min(2, "Select a selling goal"),
});

export const valuationSchema = baseLeadSchema.extend({
  source_page: z.string(),
  property_address: z.string().trim().min(5, "Enter the property address"),
  property_type: z.string().trim().min(2, "Select property type"),
});

export const consultationSchema = baseLeadSchema.extend({
  source_page: z.string(),
  interest_type: z.string().trim().min(2, "Select consultation type"),
  neighborhood_interest: z.string().trim().min(2, "Add an area of interest"),
  timeline: z.string().trim().min(2, "Select a timeline"),
});

export const downloadSchema = z.object({
  full_name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email"),
  source_page: z.string(),
  interest_type: z.string().trim().min(2),
  message: z.string().trim().optional().or(z.literal("")),
  consent_to_contact: z.boolean().refine((value) => value === true, {
    message: "Consent is required",
  }),
});

export const schemaByVariant = {
  contact: contactSchema,
  buyer: buyerSchema,
  seller: sellerSchema,
  valuation: valuationSchema,
  consultation: consultationSchema,
  download: downloadSchema,
};

export type ContactFormValues = z.infer<typeof contactSchema>;
export type BuyerFormValues = z.infer<typeof buyerSchema>;
export type SellerFormValues = z.infer<typeof sellerSchema>;
export type ValuationFormValues = z.infer<typeof valuationSchema>;
export type ConsultationFormValues = z.infer<typeof consultationSchema>;
export type DownloadFormValues = z.infer<typeof downloadSchema>;
