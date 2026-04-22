import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import Container from "@/components/layout/Container";
import AdminLoginForm from "@/components/forms/AdminLoginForm";

export default async function AdminLoginPage() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    redirect("/admin");
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f4ee_0%,#edf3f7_100%)] py-24">
      <Container className="max-w-xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8ea1]">
            Admin access
          </p>
          <h1 className="mt-4 text-5xl text-[#10243d]">Sign in</h1>
        </div>
        <AdminLoginForm />
      </Container>
    </div>
  );
}

