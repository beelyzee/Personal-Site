import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

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

    // TODO: Replace this placeholder with real Supabase insert logic.
    // Example future flow:
    // 1) create server client from "@/lib/supabase/server"
    // 2) insert into "leads" table
    // 3) return inserted row id or handle DB errors
    const leadId = randomUUID();

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully.",
        leadId,
        lead,
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

