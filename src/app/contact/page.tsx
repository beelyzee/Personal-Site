import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import LeadForm from "@/components/forms/LeadForm";

export const metadata = buildMetadata({
  title: "Contact William Zhang",
  description:
    "Contact William Zhang for buyer, seller, or neighborhood guidance in San Francisco.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        description="Share what you are planning and William will follow up with the right next step."
      />
      <section className="py-16">
        <Container className="max-w-3xl">
          <LeadForm
            variant="contact"
            sourcePage="/contact"
            title="Contact William"
            description="A short note is enough to get started."
            submitLabel="Send message"
          />
        </Container>
      </section>
    </>
  );
}

