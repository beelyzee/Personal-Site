import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

import { getSupabaseEnv } from "@/lib/supabase/config";

export async function updateSession(request: NextRequest) {
  let supabaseUrl: string;
  let supabasePublishableKey: string;

  try {
    ({ supabaseUrl, supabasePublishableKey } = getSupabaseEnv());
  } catch {
    // Keep the site available even when Supabase env vars are not configured.
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(supabaseUrl, supabasePublishableKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({
          request: {
            headers: request.headers,
          },
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options),
        );
      },
    },
  });

  await supabase.auth.getUser();
  return response;
}
