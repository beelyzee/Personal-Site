import { ExternalLink } from "lucide-react";

import { SITE_CONFIG } from "@/data/site";
import Section from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ReviewsTrust() {
  return (
    <Section
      id="reviews"
      eyebrow="Reviews and Trust"
      title="Trusted client feedback and strong review history"
      description="See client reviews for 5A Mortgage through external review sources."
    >
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>See client reviews for 5A Mortgage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="text-sm leading-7 text-[#5b5b5b]">
            We do not hardcode review counts here so this page always stays compliant and accurate.
            Use the link below for current review details.
          </p>
          <Button asChild variant="outline">
            <a
              href={SITE_CONFIG.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="reviews_link_click"
            >
              Open External Reviews
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </Section>
  );
}
