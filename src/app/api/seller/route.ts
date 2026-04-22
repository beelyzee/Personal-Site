import { NextRequest, NextResponse } from "next/server";

import { sellerSchema } from "@/lib/validations/forms";
import { saveLeadAndProfile } from "@/lib/supabase/submissions";

export async function POST(request: NextRequest) {
  try {
    const payload = sellerSchema.parse(await request.json());

    await saveLeadAndProfile(
      {
        lead_type: "seller",
        source_page: payload.source_page,
        full_name: payload.full_name,
        email: payload.email,
        phone: payload.phone,
        message: payload.message || null,
        property_address: payload.property_address,
        price_range: payload.price_range,
        timeline: payload.timeline,
        interest_type: payload.interest_type,
        consent_to_contact: payload.consent_to_contact,
      },
      "seller_profiles",
      {
        property_address: payload.property_address,
        timeline: payload.timeline,
        price_expectation: payload.price_range,
        selling_goal: payload.interest_type,
        notes: payload.message || null,
      },
    );

    return NextResponse.json({ message: "Seller strategy request received." });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to submit seller form." },
      { status: 500 },
    );
  }
}

