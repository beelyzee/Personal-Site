import Link from "next/link";

import { RESOURCES } from "@/data/resources";
import Section from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResourcesPreview() {
  const previewItems = RESOURCES.slice(0, 3);

  return (
    <Section
      id="resources-preview"
      eyebrow="Resources"
      title="Learn the financing basics before you make an offer"
      description="Quick reads built for San Francisco homebuyers who want clarity and confidence."
      className="bg-white/60"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {previewItems.map((resource) => (
          <Card key={resource.slug} className="h-full">
            <CardHeader>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b6b4a]">
                {resource.category}
              </p>
              <CardTitle className="text-xl">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-[#5b5b5b]">{resource.excerpt}</p>
              <p className="mt-3 text-xs text-[#7a7369]">{resource.readTime}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Button asChild variant="outline">
          <Link href="/resources">View All Resources</Link>
        </Button>
      </div>
    </Section>
  );
}

