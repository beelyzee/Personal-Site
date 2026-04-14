import { NextRequest, NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { leadSubmissionSchema } from "@/lib/validations/lead";

export async function POST(request: NextRequest) {
  try {
    const json = (await request.json()) as unknown;
    const parsed = leadSubmissionSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed for lead submission.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const lead = {
      ...parsed.data,
      created_at: new Date().toISOString(),
    };

    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("leads")
      .insert(lead)
      .select("id")
      .single();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: `Unable to store lead in Supabase: ${error.message}`,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully.",
        leadId: data?.id ?? null,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unexpected server error while processing lead.",
      },
      { status: 500 },
    );
  }
}
