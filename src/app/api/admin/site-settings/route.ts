import { NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: auth } = await supabase.auth.getUser();

    if (!auth.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const payload = (await request.json()) as Record<string, string>;
    const entries = Object.entries(payload).map(([key, value]) => ({
      key,
      value: { text: value },
    }));

    const { error } = await supabase.from("site_settings").upsert(entries, {
      onConflict: "key",
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ message: "Site settings saved." });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to save site settings." },
      { status: 500 },
    );
  }
}

