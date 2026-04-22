import { NextRequest, NextResponse } from "next/server";

import { valuationSchema } from "@/lib/validations/forms";
import { saveLeadAndProfile } from "@/lib/supabase/submissions";

export async function POST(request: NextRequest) {
  try {
    const payload = valuationSchema.parse(await request.json());

    await saveLeadAndProfile(
      {
        lead_type: "valuation",
        source_page: payload.source_page,
        full_name: payload.full_name,
        email: payload.email,
        phone: payload.phone,
        message: payload.message || null,
        property_address: payload.property_address,
        property_type: payload.property_type,
        consent_to_contact: payload.consent_to_contact,
      },
      "seller_profiles",
      {
        property_address: payload.property_address,
        property_type: payload.property_type,
        notes: payload.message || null,
        selling_goal: "Home valuation request",
      },
    );

    return NextResponse.json({ message: "Valuation request received." });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to submit valuation form." },
      { status: 500 },
    );
  }
}

