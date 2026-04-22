"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type SiteSettingsFormProps = {
  initialSettings: { key: string; value: string }[];
};

export default function SiteSettingsForm({ initialSettings }: SiteSettingsFormProps) {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [settings, setSettings] = useState<Record<string, string>>(
    initialSettings.reduce<Record<string, string>>((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {}),
  );

  return (
    <form
      className="space-y-4 rounded-[1.5rem] border border-[#d8e0e7] bg-white p-6"
      onSubmit={async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setStatus(null);

        const response = await fetch("/api/admin/site-settings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(settings),
        });

        const data = (await response.json().catch(() => null)) as { message?: string } | null;
        setStatus(data?.message ?? (response.ok ? "Saved." : "Unable to save."));
        setSubmitting(false);
      }}
    >
      <div className="space-y-2">
        <Label htmlFor="hero-headline">Homepage hero headline</Label>
        <Input
          id="hero-headline"
          value={settings.home_hero_headline ?? ""}
          onChange={(event) =>
            setSettings((current) => ({ ...current, home_hero_headline: event.target.value }))
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="hero-subheadline">Homepage hero subheadline</Label>
        <Input
          id="hero-subheadline"
          value={settings.home_hero_subheadline ?? ""}
          onChange={(event) =>
            setSettings((current) => ({ ...current, home_hero_subheadline: event.target.value }))
          }
        />
      </div>
      {status ? <p className="text-sm text-[#335469]">{status}</p> : null}
      <Button type="submit" disabled={submitting}>
        {submitting ? "Saving..." : "Save site settings"}
      </Button>
    </form>
  );
}

