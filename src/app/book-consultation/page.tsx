import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import LeadForm from "@/components/forms/LeadForm";

export const metadata = buildMetadata({
  title: "Book a Consultation",
  description:
    "Book a San Francisco real-estate consultation with William Zhang for buyer, seller, or planning guidance.",
  path: "/book-consultation",
});

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="Book time to talk strategy."
        description="Use this form to start a buyer, seller, or planning conversation with William Zhang."
      />
      <section className="py-16">
        <Container className="max-w-3xl">
          <LeadForm
            variant="consultation"
            sourcePage="/book-consultation"
            title="Consultation request"
            description="Share your goals and we’ll shape the right next step."
            submitLabel="Book consultation"
          />
        </Container>
      </section>
    </>
  );
}

