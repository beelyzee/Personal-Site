"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SITE_CONFIG } from "@/data/site";
import { EstimateResult } from "@/types/lead";
import {
  EstimateLeadFormValues,
  estimateLeadFormSchema,
} from "@/lib/validations/lead";
import { calculateBuyingPower } from "@/lib/utils/mortgage";
import { formatCurrency, formatPercent } from "@/lib/utils/formatters";
import Section from "@/components/layout/Section";
import Disclaimer from "@/components/shared/Disclaimer";
import PhoneCTA from "@/components/shared/PhoneCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const STEP_ONE_FIELDS = [
  "annual_income",
  "down_payment",
  "credit_range",
  "monthly_debt",
] as const;

type Step = 1 | 2 | 3;

export default function EstimateFunnel() {
  const [step, setStep] = useState<Step>(1);
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);
  const [submitError, setSubmitError] = useState("");
  const [submittingLead, setSubmittingLead] = useState(false);

  const form = useForm<EstimateLeadFormValues>({
    resolver: zodResolver(estimateLeadFormSchema),
    defaultValues: {
      annual_income: 120000,
      down_payment: 100000,
      credit_range: "720-759",
      monthly_debt: 600,
      full_name: "",
      email: "",
      phone: "",
      consent_to_contact: false,
    },
    mode: "onBlur",
  });

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const consentChecked = watch("consent_to_contact");

  const continueToContactStep = async () => {
    const isValid = await trigger(STEP_ONE_FIELDS);
    if (isValid) {
      setSubmitError("");
      setStep(2);
    }
  };

  const submitLead = handleSubmit(async (values) => {
    setSubmitError("");
    setSubmittingLead(true);

    try {
      const computedEstimate = calculateBuyingPower(values);
      const params = new URLSearchParams(window.location.search);

      const payload = {
        ...values,
        estimated_price_low: computedEstimate.estimated_price_low,
        estimated_price_high: computedEstimate.estimated_price_high,
        estimated_loan_low: computedEstimate.estimated_loan_low,
        estimated_loan_high: computedEstimate.estimated_loan_high,
        source_page: "/",
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { message?: string }
          | null;
        throw new Error(data?.message ?? "Unable to submit your estimate right now.");
      }

      setEstimate(computedEstimate);
      setStep(3);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
      );
    } finally {
      setSubmittingLead(false);
    }
  });

  return (
    <Section
      id="estimate"
      eyebrow="Buying Power Estimate"
      title="See what you may qualify for in San Francisco"
      description="Answer a few quick questions, then review your estimated range."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Quick Estimate</span>
              <span className="text-sm text-[#7b7468]">Step {step} of 3</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <form
                className="space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  void continueToContactStep();
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="annual_income">Annual income</Label>
                  <Input
                    id="annual_income"
                    type="number"
                    inputMode="numeric"
                    {...register("annual_income", { valueAsNumber: true })}
                  />
                  {errors.annual_income && (
                    <p className="text-xs text-red-700">{errors.annual_income.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="down_payment">Down payment</Label>
                  <Input
                    id="down_payment"
                    type="number"
                    inputMode="numeric"
                    {...register("down_payment", { valueAsNumber: true })}
                  />
                  {errors.down_payment && (
                    <p className="text-xs text-red-700">{errors.down_payment.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="credit_range">Credit range</Label>
                  <Select
                    value={watch("credit_range")}
                    onValueChange={(value) =>
                      setValue("credit_range", value as EstimateLeadFormValues["credit_range"], {
                        shouldValidate: true,
                      })
                    }
                  >
                    <SelectTrigger id="credit_range">
                      <SelectValue placeholder="Select credit range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="760+">760+</SelectItem>
                      <SelectItem value="720-759">720-759</SelectItem>
                      <SelectItem value="680-719">680-719</SelectItem>
                      <SelectItem value="640-679">640-679</SelectItem>
                      <SelectItem value="Below 640">Below 640</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.credit_range && (
                    <p className="text-xs text-red-700">{errors.credit_range.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthly_debt">Monthly debt payments</Label>
                  <Input
                    id="monthly_debt"
                    type="number"
                    inputMode="numeric"
                    {...register("monthly_debt", { valueAsNumber: true })}
                  />
                  {errors.monthly_debt && (
                    <p className="text-xs text-red-700">{errors.monthly_debt.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  data-analytics-event="estimate_start"
                >
                  Continue
                </Button>
              </form>
            )}

            {step === 2 && (
              <form className="space-y-5" onSubmit={submitLead}>
                <div className="space-y-2">
                  <Label htmlFor="full_name">Full name</Label>
                  <Input id="full_name" autoComplete="name" {...register("full_name")} />
                  {errors.full_name && (
                    <p className="text-xs text-red-700">{errors.full_name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" autoComplete="email" {...register("email")} />
                  {errors.email && <p className="text-xs text-red-700">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
                  {errors.phone && <p className="text-xs text-red-700">{errors.phone.message}</p>}
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-[#e5dbc9] bg-[#fdf9f3] p-4">
                  <Checkbox
                    id="consent_to_contact"
                    checked={consentChecked}
                    onCheckedChange={(checked) =>
                      setValue("consent_to_contact", checked === true, {
                        shouldValidate: true,
                      })
                    }
                  />
                  <div className="space-y-1">
                    <Label htmlFor="consent_to_contact" className="leading-6">
                      I consent to be contacted by phone, text, or email regarding mortgage options.
                    </Label>
                    {errors.consent_to_contact && (
                      <p className="text-xs text-red-700">
                        {errors.consent_to_contact.message}
                      </p>
                    )}
                  </div>
                </div>

                {submitError && <p className="text-sm text-red-700">{submitError}</p>}

                <div className="flex flex-wrap gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={submittingLead}
                    data-analytics-event="estimate_submit"
                  >
                    {submittingLead ? "Submitting..." : "See My Estimate"}
                  </Button>
                </div>
              </form>
            )}

            {step === 3 && estimate && (
              <div className="space-y-5">
                <p className="rounded-2xl border border-[#cde0e9] bg-[#eef5f8] px-4 py-3 text-sm text-[#1f3f4d]">
                  Your quick estimate is ready. This is a starting point, not a commitment to lend.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[#e5dbc9] bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#8b6b4a]">
                      Buying power range
                    </p>
                    <p className="mt-2 font-semibold text-[#1f1f1f]">
                      {formatCurrency(estimate.estimated_price_low)} -{" "}
                      {formatCurrency(estimate.estimated_price_high)}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#e5dbc9] bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#8b6b4a]">
                      Loan amount range
                    </p>
                    <p className="mt-2 font-semibold text-[#1f1f1f]">
                      {formatCurrency(estimate.estimated_loan_low)} -{" "}
                      {formatCurrency(estimate.estimated_loan_high)}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#e5dbc9] bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#8b6b4a]">
                      Monthly payment range
                    </p>
                    <p className="mt-2 font-semibold text-[#1f1f1f]">
                      {formatCurrency(estimate.estimated_monthly_payment_low)} -{" "}
                      {formatCurrency(estimate.estimated_monthly_payment_high)}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#5b5b5b]">
                  Assumption snapshot: DTI cap {formatPercent(estimate.assumptions.dtiCap)} with
                  illustrative rate band {formatPercent(estimate.assumptions.rateLow)} -{" "}
                  {formatPercent(estimate.assumptions.rateHigh)}.
                </p>

                <div className="flex flex-wrap gap-3">
                  <PhoneCTA size="lg" />
                  <Button asChild variant="secondary" size="lg">
                    <a href="/contact">{SITE_CONFIG.ctaLabels.requestReview}</a>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Disclaimer />
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Why this estimate helps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-7 text-[#5b5b5b]">
              <p>Get a fast range before you start touring homes or writing offers.</p>
              <p>See how income, debt, and down payment affect your buying power right now.</p>
              <p>Then call William for a strategy conversation tailored to your timeline.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
