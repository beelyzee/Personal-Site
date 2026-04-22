import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import Container from "@/components/layout/Container";
import AdminSignOutButton from "@/components/admin/AdminSignOutButton";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#f3f6f8] py-10">
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7b8d9f]">
              Admin
            </p>
            <h1 className="mt-2 text-4xl text-[#10243d]">Content and lead dashboard</h1>
          </div>
          <AdminSignOutButton />
        </div>
        {children}
      </Container>
    </div>
  );
}

