import Link from "next/link";

import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { RESOURCES } from "@/data/resources";
import { TESTIMONIALS } from "@/data/testimonials";
import { getAdminDashboardData } from "@/lib/supabase/submissions";
import SiteSettingsForm from "@/components/admin/SiteSettingsForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminDashboardPage() {
  const dashboard = await getAdminDashboardData().catch(() => null);

  const leadRows = dashboard?.leads.data ?? [];
  const siteSettingsRows =
    dashboard?.siteSettings.data?.map((item) => ({
      key: String(item.key),
      value:
        typeof item.value === "object" &&
        item.value !== null &&
        "text" in item.value &&
        typeof item.value.text === "string"
          ? item.value.text
          : JSON.stringify(item.value),
    })) ?? [
      { key: "home_hero_headline", value: "A premium real-estate experience for San Francisco buyers and sellers." },
      { key: "home_hero_subheadline", value: "William Zhang helps clients navigate San Francisco neighborhoods, pricing strategy, and next-step decisions with clarity and calm confidence." },
    ];

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Recent leads", value: String(leadRows.length) },
          { label: "Seeded neighborhoods", value: String(NEIGHBORHOODS.length) },
          { label: "Seeded resources", value: String(RESOURCES.length) },
          { label: "Seeded testimonials", value: String(TESTIMONIALS.length) },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardTitle className="text-base text-[#5d6e7f]">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-[#10243d]">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-[#10243d]">Latest leads</CardTitle>
          </CardHeader>
          <CardContent>
            {leadRows.length === 0 ? (
              <p className="text-[#5b6878]">No leads yet, or the `leads` table is still being configured.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-[#66788a]">
                    <tr>
                      <th className="py-2">Name</th>
                      <th className="py-2">Type</th>
                      <th className="py-2">Email</th>
                      <th className="py-2">Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadRows.map((lead) => (
                      <tr key={String(lead.id ?? `${lead.email}-${lead.created_at}`)} className="border-t border-[#e4ebf0]">
                        <td className="py-3 text-[#10243d]">{String(lead.full_name ?? "")}</td>
                        <td className="py-3 text-[#546171]">{String(lead.lead_type ?? "")}</td>
                        <td className="py-3 text-[#546171]">{String(lead.email ?? "")}</td>
                        <td className="py-3 text-[#546171]">{String(lead.created_at ?? "")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        <SiteSettingsForm initialSettings={siteSettingsRows} />
      </div>

      <div>
        <Button asChild variant="outline">
          <Link href="/">Return to website</Link>
        </Button>
      </div>
    </div>
  );
}
