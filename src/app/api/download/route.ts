import { NextRequest, NextResponse } from "next/server";

import { RESOURCES } from "@/data/resources";
import { downloadSchema } from "@/lib/validations/forms";
import { saveLeadAndProfile } from "@/lib/supabase/submissions";

export async function POST(request: NextRequest) {
  try {
    const payload = downloadSchema.parse(await request.json());
    const featuredGuide = RESOURCES.find((item) => item.downloadLabel);

    await saveLeadAndProfile({
      lead_type: "download",
      source_page: payload.source_page,
      full_name: payload.full_name,
      email: payload.email,
      phone: "",
      interest_type: payload.interest_type,
      message: payload.message || null,
      consent_to_contact: payload.consent_to_contact,
    });

    return NextResponse.json({
      message: "Guide request received. Your download is ready.",
      downloadUrl: featuredGuide ? `/resources#${featuredGuide.slug}` : null,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to process guide request." },
      { status: 500 },
    );
  }
}

