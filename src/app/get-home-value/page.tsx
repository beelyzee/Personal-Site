import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import LeadForm from "@/components/forms/LeadForm";

export const metadata = buildMetadata({
  title: "Get Home Value",
  description:
    "Request a San Francisco home valuation and seller strategy conversation with William Zhang.",
  path: "/get-home-value",
});

export default function GetHomeValuePage() {
  return (
    <>
      <PageHero
        eyebrow="Get Home Value"
        title="Request a tailored San Francisco home valuation."
        description="Share your property details and William will follow up with a thoughtful pricing conversation."
      />
      <section className="py-16">
        <Container className="max-w-3xl">
          <LeadForm
            variant="valuation"
            sourcePage="/get-home-value"
            title="Home valuation form"
            description="A tailored estimate starts with a few key details."
            submitLabel="Request home value"
          />
        </Container>
      </section>
    </>
  );
}

