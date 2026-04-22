import { NextRequest, NextResponse } from "next/server";

import { contactSchema } from "@/lib/validations/forms";
import { saveLeadAndProfile } from "@/lib/supabase/submissions";

export async function POST(request: NextRequest) {
  try {
    const payload = contactSchema.parse(await request.json());

    await saveLeadAndProfile({
      lead_type: "contact",
      source_page: payload.source_page,
      full_name: payload.full_name,
      email: payload.email,
      phone: payload.phone,
      message: payload.message || null,
      consent_to_contact: payload.consent_to_contact,
    });

    return NextResponse.json({ message: "Thanks, William will be in touch shortly." });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to submit contact form." },
      { status: 500 },
    );
  }
}

