import { NextRequest, NextResponse } from "next/server";

import { buyerSchema } from "@/lib/validations/forms";
import { saveLeadAndProfile } from "@/lib/supabase/submissions";

export async function POST(request: NextRequest) {
  try {
    const payload = buyerSchema.parse(await request.json());

    await saveLeadAndProfile(
      {
        lead_type: "buyer",
        source_page: payload.source_page,
        full_name: payload.full_name,
        email: payload.email,
        phone: payload.phone,
        message: payload.message || null,
        neighborhood_interest: payload.neighborhood_interest,
        price_range: payload.price_range,
        timeline: payload.timeline,
        financing_stage: payload.financing_stage,
        consent_to_contact: payload.consent_to_contact,
      },
      "buyer_profiles",
      {
        neighborhood_interest: payload.neighborhood_interest,
        price_range: payload.price_range,
        timeline: payload.timeline,
        financing_stage: payload.financing_stage,
        notes: payload.message || null,
      },
    );

    return NextResponse.json({ message: "Buyer consultation request received." });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to submit buyer form." },
      { status: 500 },
    );
  }
}

