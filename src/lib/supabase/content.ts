import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { RESOURCES } from "@/data/resources";
import { TESTIMONIALS } from "@/data/testimonials";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function getNeighborhoodContent() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.from("neighborhoods").select("*").order("name");
    return data && data.length > 0 ? data : NEIGHBORHOODS;
  } catch {
    return NEIGHBORHOODS;
  }
}

export async function getResourceContent() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.from("resources").select("*").order("title");
    return data && data.length > 0 ? data : RESOURCES;
  } catch {
    return RESOURCES;
  }
}

export async function getTestimonialContent() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.from("testimonials").select("*").order("created_at");
    return data && data.length > 0 ? data : TESTIMONIALS;
  } catch {
    return TESTIMONIALS;
  }
}

