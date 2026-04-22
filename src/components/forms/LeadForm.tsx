"use client";

import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { schemaByVariant } from "@/lib/validations/forms";
import { FormVariant } from "@/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type SelectOption = {
  label: string;
  value: string;
};

type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  options?: SelectOption[];
};

type LeadFormProps = {
  variant: FormVariant;
  sourcePage: string;
  title?: string;
  description?: string;
  submitLabel: string;
  interestType?: string;
};

const fieldConfigs: Record<FormVariant, FieldConfig[]> = {
  contact: [
    { name: "full_name", label: "Full name", type: "text", placeholder: "Your full name" },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "phone", label: "Phone", type: "tel", placeholder: "(555) 123-4567" },
    { name: "message", label: "How can William help?", type: "textarea", placeholder: "Tell us a bit about your goals." },
  ],
  buyer: [
    { name: "full_name", label: "Full name", type: "text", placeholder: "Your full name" },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "phone", label: "Phone", type: "tel", placeholder: "(555) 123-4567" },
    { name: "neighborhood_interest", label: "Neighborhoods", type: "text", placeholder: "Noe Valley, Russian Hill, Sunset..." },
    {
      name: "price_range",
      label: "Target price range",
      type: "select",
      options: [
        { label: "Under $1M", value: "Under $1M" },
        { label: "$1M - $2M", value: "$1M - $2M" },
        { label: "$2M - $3M", value: "$2M - $3M" },
        { label: "$3M+", value: "$3M+" },
      ],
    },
    {
      name: "financing_stage",
      label: "Financing stage",
      type: "select",
      options: [
        { label: "Just starting", value: "Just starting" },
        { label: "Researching lenders", value: "Researching lenders" },
        { label: "Already preapproved", value: "Already preapproved" },
      ],
    },
    {
      name: "timeline",
      label: "Timeline",
      type: "select",
      options: [
        { label: "0-3 months", value: "0-3 months" },
        { label: "3-6 months", value: "3-6 months" },
        { label: "6+ months", value: "6+ months" },
      ],
    },
    { name: "message", label: "Anything else we should know?", type: "textarea", placeholder: "Goals, must-haves, or questions." },
  ],
  seller: [
    { name: "full_name", label: "Full name", type: "text", placeholder: "Your full name" },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "phone", label: "Phone", type: "tel", placeholder: "(555) 123-4567" },
    { name: "property_address", label: "Property address", type: "text", placeholder: "123 Example St, San Francisco" },
    {
      name: "interest_type",
      label: "Selling goal",
      type: "select",
      options: [
        { label: "Preparing to list", value: "Preparing to list" },
        { label: "Need pricing strategy", value: "Need pricing strategy" },
        { label: "Exploring options", value: "Exploring options" },
      ],
    },
    {
      name: "timeline",
      label: "Timeline",
      type: "select",
      options: [
        { label: "Immediately", value: "Immediately" },
        { label: "1-3 months", value: "1-3 months" },
        { label: "3-6 months", value: "3-6 months" },
      ],
    },
    { name: "price_range", label: "Estimated value or target range", type: "text", placeholder: "$1.8M - $2.1M" },
    { name: "message", label: "Property notes", type: "textarea", placeholder: "Upgrades, timing, or goals." },
  ],
  valuation: [
    { name: "full_name", label: "Full name", type: "text", placeholder: "Your full name" },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "phone", label: "Phone", type: "tel", placeholder: "(555) 123-4567" },
    { name: "property_address", label: "Property address", type: "text", placeholder: "123 Example St, San Francisco" },
    {
      name: "property_type",
      label: "Property type",
      type: "select",
      options: [
        { label: "Single-family", value: "Single-family" },
        { label: "Condo", value: "Condo" },
        { label: "TIC", value: "TIC" },
        { label: "Multi-unit", value: "Multi-unit" },
      ],
    },
    { name: "message", label: "Tell us about the home", type: "textarea", placeholder: "Condition, view, upgrades, or timing." },
  ],
  consultation: [
    { name: "full_name", label: "Full name", type: "text", placeholder: "Your full name" },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "phone", label: "Phone", type: "tel", placeholder: "(555) 123-4567" },
    {
      name: "interest_type",
      label: "Consultation type",
      type: "select",
      options: [
        { label: "Buying in San Francisco", value: "Buying in San Francisco" },
        { label: "Selling in San Francisco", value: "Selling in San Francisco" },
        { label: "Both / strategic planning", value: "Both / strategic planning" },
      ],
    },
    { name: "neighborhood_interest", label: "Neighborhood or focus area", type: "text", placeholder: "Pacific Heights, Noe Valley..." },
    {
      name: "timeline",
      label: "Timeline",
      type: "select",
      options: [
        { label: "Soon", value: "Soon" },
        { label: "This season", value: "This season" },
        { label: "Just planning ahead", value: "Just planning ahead" },
      ],
    },
    { name: "message", label: "What should we prepare for the call?", type: "textarea", placeholder: "Share your goals and priorities." },
  ],
  download: [
    { name: "full_name", label: "Full name", type: "text", placeholder: "Your full name" },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "message", label: "What are you planning for?", type: "textarea", placeholder: "Optional context to personalize your guide." },
  ],
};

const endpoints: Record<FormVariant, string> = {
  contact: "/api/contact",
  buyer: "/api/buyer",
  seller: "/api/seller",
  valuation: "/api/valuation",
  consultation: "/api/consultation",
  download: "/api/download",
};

export default function LeadForm({
  variant,
  sourcePage,
  title,
  description,
  submitLabel,
  interestType,
}: LeadFormProps) {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const schema = useMemo(() => schemaByVariant[variant], [variant]);
  const fields = fieldConfigs[variant];

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      source_page: sourcePage,
      interest_type: interestType ?? "",
      consent_to_contact: false,
    },
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = form;
  const fieldErrors = errors as Record<string, { message?: unknown } | undefined>;

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    setServerMessage(null);

    const response = await fetch(endpoints[variant], {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = (await response.json().catch(() => null)) as
      | { message?: string; downloadUrl?: string | null }
      | null;

    if (!response.ok) {
      setServerError(data?.message ?? "Something went wrong. Please try again.");
      return;
    }

    if (data?.downloadUrl) {
      window.open(data.downloadUrl, "_blank", "noopener,noreferrer");
    }

    setServerMessage(data?.message ?? "Submitted successfully.");
    reset({
      source_page: sourcePage,
      interest_type: interestType ?? "",
      consent_to_contact: false,
    });
  });

  return (
    <div className="rounded-[1.75rem] border border-[#d8e0e7] bg-white p-6 shadow-[0_20px_50px_rgba(16,36,61,0.08)] sm:p-8">
      {title && <h3 className="text-2xl text-[#10243d]">{title}</h3>}
      {description && <p className="mt-2 text-[#586574]">{description}</p>}

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <input type="hidden" {...register("source_page")} value={sourcePage} />
        {interestType ? <input type="hidden" {...register("interest_type")} value={interestType} /> : null}

        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name}>{field.label}</Label>
            {field.type === "textarea" ? (
              <Textarea
                id={field.name}
                placeholder={field.placeholder}
                {...register(field.name as never)}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                className="flex h-11 w-full rounded-xl border border-[#d8ccba] bg-white px-3 text-base text-[#1f1f1f] shadow-sm outline-none focus-visible:border-[#10243d] focus-visible:ring-2 focus-visible:ring-[#10243d]/20"
                defaultValue=""
                {...register(field.name as never)}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <Input
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name as never)}
              />
            )}
            {fieldErrors[field.name] ? (
              <p className="text-sm text-red-700">
                {String(fieldErrors[field.name]?.message ?? "This field is required")}
              </p>
            ) : null}
          </div>
        ))}

        <div className="rounded-2xl border border-[#e1e8ee] bg-[#f6f9fb] p-4">
          <Controller
            control={control}
            name="consent_to_contact"
            render={({ field }) => (
              <div className="flex items-start gap-3">
                <Checkbox
                  id={`${variant}-consent`}
                  checked={field.value === true}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                />
                <div>
                  <Label htmlFor={`${variant}-consent`} className="leading-6">
                    I consent to be contacted by William Zhang regarding real estate services.
                  </Label>
                  {errors.consent_to_contact ? (
                    <p className="mt-1 text-sm text-red-700">
                      {String(errors.consent_to_contact.message)}
                    </p>
                  ) : null}
                </div>
              </div>
            )}
          />
        </div>

        {serverError ? <p className="text-sm text-red-700">{serverError}</p> : null}
        {serverMessage ? <p className="text-sm text-[#0e5f43]">{serverMessage}</p> : null}

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : submitLabel}
        </Button>
      </form>
    </div>
  );
}
