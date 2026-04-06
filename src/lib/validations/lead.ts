import { z } from "zod";

import { CREDIT_RANGES } from "@/types/lead";

const moneyField = (label: string, min: number) =>
  z
    .number()
    .refine((value) => Number.isFinite(value), `${label} is required`)
    .min(min, `${label} must be at least ${min.toLocaleString()}`);

const optionalNullableMoneyField = z
  .coerce
  .number()
  .min(0)
  .nullable()
  .optional();

export const creditRangeSchema = z.enum(CREDIT_RANGES, {
  message: "Select a credit range",
});

export const estimateStepSchema = z.object({
  annual_income: moneyField("Annual income", 20000),
  down_payment: moneyField("Down payment", 0),
  credit_range: creditRangeSchema,
  monthly_debt: moneyField("Monthly debt payments", 0),
});

export const contactStepSchema = z.object({
  full_name: z
    .string({ message: "Full name is required" })
    .trim()
    .min(2, "Enter your full name"),
  email: z
    .string({ message: "Email is required" })
    .trim()
    .email("Enter a valid email"),
  phone: z
    .string({ message: "Phone is required" })
    .trim()
    .min(10, "Enter a valid phone number"),
  consent_to_contact: z.boolean().refine((value) => value, {
    message: "You must consent before submitting",
  }),
});

export const estimateLeadFormSchema = estimateStepSchema.merge(contactStepSchema);

export const contactOnlySchema = contactStepSchema;

export const leadSubmissionSchema = z.object({
  full_name: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z.string().trim().min(10),
  annual_income: optionalNullableMoneyField,
  down_payment: optionalNullableMoneyField,
  credit_range: creditRangeSchema.nullable().optional(),
  monthly_debt: optionalNullableMoneyField,
  estimated_price_low: optionalNullableMoneyField,
  estimated_price_high: optionalNullableMoneyField,
  estimated_loan_low: optionalNullableMoneyField,
  estimated_loan_high: optionalNullableMoneyField,
  source_page: z.string().trim().min(1),
  utm_source: z.string().trim().max(200).nullable().optional(),
  utm_medium: z.string().trim().max(200).nullable().optional(),
  utm_campaign: z.string().trim().max(200).nullable().optional(),
  consent_to_contact: z.boolean().refine((value) => value, {
    message: "Consent is required",
  }),
  created_at: z.string().optional(),
});

export type EstimateLeadFormValues = z.infer<typeof estimateLeadFormSchema>;
export type ContactOnlyValues = z.infer<typeof contactOnlySchema>;
export type LeadSubmissionValues = z.infer<typeof leadSubmissionSchema>;
