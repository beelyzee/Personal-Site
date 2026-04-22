import { NextRequest, NextResponse } from "next/server";

import { consultationSchema } from "@/lib/validations/forms";
import { saveLeadAndProfile } from "@/lib/supabase/submissions";

export async function POST(request: NextRequest) {
  try {
    const payload = consultationSchema.parse(await request.json());

    await saveLeadAndProfile(
      {
        lead_type: "consultation",
        source_page: payload.source_page,
        full_name: payload.full_name,
        email: payload.email,
        phone: payload.phone,
        message: payload.message || null,
        neighborhood_interest: payload.neighborhood_interest,
        timeline: payload.timeline,
        interest_type: payload.interest_type,
        consent_to_contact: payload.consent_to_contact,
      },
      "appointments",
      {
        consultation_type: payload.interest_type,
        neighborhood_interest: payload.neighborhood_interest,
        timeline: payload.timeline,
        notes: payload.message || null,
      },
    );

    return NextResponse.json({ message: "Consultation request received." });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Unable to submit consultation request.",
      },
      { status: 500 },
    );
  }
}

