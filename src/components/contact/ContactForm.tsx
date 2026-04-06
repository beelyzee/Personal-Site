"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactOnlyValues, contactOnlySchema } from "@/lib/validations/lead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusTone, setStatusTone] = useState<"neutral" | "success" | "error">("neutral");

  const form = useForm<ContactOnlyValues>({
    resolver: zodResolver(contactOnlySchema),
    defaultValues: {
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
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  const consentChecked = watch("consent_to_contact");

  const submit = handleSubmit(async (values) => {
    setStatusMessage("");
    setStatusTone("neutral");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          source_page: "/contact",
          annual_income: null,
          down_payment: null,
          credit_range: null,
          monthly_debt: null,
          estimated_price_low: null,
          estimated_price_high: null,
          estimated_loan_low: null,
          estimated_loan_high: null,
          utm_source: null,
          utm_medium: null,
          utm_campaign: null,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { message?: string }
          | null;
        throw new Error(data?.message ?? "Unable to submit your contact request.");
      }

      reset();
      setStatusTone("success");
      setStatusMessage("Thanks, your message was received. William will reach out soon.");
    } catch (error) {
      setStatusTone("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact William</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={submit} data-analytics-event="form_submit">
          <div className="space-y-2">
            <Label htmlFor="contact_full_name">Full name</Label>
            <Input id="contact_full_name" autoComplete="name" {...register("full_name")} />
            {errors.full_name && <p className="text-xs text-red-700">{errors.full_name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact_email">Email</Label>
            <Input id="contact_email" type="email" autoComplete="email" {...register("email")} />
            {errors.email && <p className="text-xs text-red-700">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact_phone">Phone</Label>
            <Input id="contact_phone" type="tel" autoComplete="tel" {...register("phone")} />
            {errors.phone && <p className="text-xs text-red-700">{errors.phone.message}</p>}
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-[#e5dbc9] bg-[#fdf9f3] p-4">
            <Checkbox
              id="contact_consent"
              checked={consentChecked}
              onCheckedChange={(checked) =>
                setValue("consent_to_contact", checked === true, {
                  shouldValidate: true,
                })
              }
            />
            <div className="space-y-1">
              <Label htmlFor="contact_consent" className="leading-6">
                I consent to be contacted by phone, text, or email regarding mortgage options.
              </Label>
              {errors.consent_to_contact && (
                <p className="text-xs text-red-700">{errors.consent_to_contact.message}</p>
              )}
            </div>
          </div>

          {statusMessage && (
            <p
              className={
                statusTone === "success"
                  ? "text-sm text-[#0f4e2d]"
                  : statusTone === "error"
                    ? "text-sm text-red-700"
                    : "text-sm text-[#5b5b5b]"
              }
            >
              {statusMessage}
            </p>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Send Contact Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

