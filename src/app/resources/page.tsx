import { buildMetadata } from "@/lib/metadata";
import { RESOURCES } from "@/data/resources";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import MotionReveal from "@/components/shared/MotionReveal";
import LeadForm from "@/components/forms/LeadForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "Resources and Blog",
  description:
    "San Francisco real-estate resources for buyers and sellers, including guides, market notes, and neighborhood planning content.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources / Blog"
        title="Useful guidance before your next move."
        description="Explore practical content for San Francisco buyers and sellers, and request downloadable guides through the site."
      />
      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6">
            {RESOURCES.map((resource, index) => (
              <MotionReveal key={resource.slug} delay={index * 0.05}>
                <Card className="border-[#d7dfe7] bg-white">
                  <CardHeader>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7c8e9f]">
                      {resource.category}
                    </p>
                    <CardTitle className="text-2xl text-[#10243d]">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-[#566374]">{resource.excerpt}</p>
                    <p className="mt-3 text-sm text-[#7a8794]">{resource.readTime}</p>
                  </CardContent>
                </Card>
              </MotionReveal>
            ))}
          </div>

          <LeadForm
            variant="download"
            sourcePage="/resources"
            title="Request a downloadable guide"
            description="Tell us what you want and we’ll send the most relevant next-step resource."
            submitLabel="Request guide"
            interestType="Guide download"
          />
        </Container>
      </section>
    </>
  );
}

