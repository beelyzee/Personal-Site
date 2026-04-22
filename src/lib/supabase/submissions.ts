import { createSupabaseServerClient } from "@/lib/supabase/server";
import { notifyLeadCaptured } from "@/lib/notifications/email";
import { LeadInsert } from "@/types";

export async function saveLeadAndProfile(
  lead: LeadInsert,
  profileTable?: "buyer_profiles" | "seller_profiles" | "appointments",
  profilePayload?: Record<string, unknown>,
) {
  const supabase = await createSupabaseServerClient();

  const leadPayload = {
    lead_type: lead.lead_type,
    source_page: lead.source_page,
    full_name: lead.full_name,
    email: lead.email,
    phone: lead.phone,
    message: lead.message ?? null,
    neighborhood_interest: lead.neighborhood_interest ?? null,
    property_address: lead.property_address ?? null,
    price_range: lead.price_range ?? null,
    timeline: lead.timeline ?? null,
    financing_stage: lead.financing_stage ?? null,
    interest_type: lead.interest_type ?? null,
    property_type: lead.property_type ?? null,
    consent_to_contact: lead.consent_to_contact,
    metadata: lead.metadata ?? {},
  };

  const leadInsert = await supabase.from("leads").insert(leadPayload);

  if (leadInsert.error) {
    throw new Error(`Unable to store lead in Supabase: ${leadInsert.error.message}`);
  }

  if (profileTable && profilePayload) {
    const profileInsert = await supabase.from(profileTable).insert({
      full_name: lead.full_name,
      email: lead.email,
      phone: lead.phone,
      ...profilePayload,
    });

    if (profileInsert.error) {
      throw new Error(
        `Lead saved but related profile failed to store: ${profileInsert.error.message}`,
      );
    }
  }

  await notifyLeadCaptured(lead);
  return { ok: true };
}

export async function getAdminDashboardData() {
  const supabase = await createSupabaseServerClient();

  const [leads, neighborhoods, resources, testimonials, siteSettings] = await Promise.all([
    supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(25),
    supabase.from("neighborhoods").select("*").limit(20),
    supabase.from("resources").select("*").limit(20),
    supabase.from("testimonials").select("*").limit(20),
    supabase.from("site_settings").select("*").limit(20),
  ]);

  return {
    leads,
    neighborhoods,
    resources,
    testimonials,
    siteSettings,
  };
}

