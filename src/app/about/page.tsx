import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata = buildMetadata({
  title: "About William Zhang",
  description:
    "Meet William Zhang, a San Francisco real-estate advisor focused on a premium, high-trust experience for local buyers and sellers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About William"
        title="A modern local advisor with a premium service mindset."
        description="William Zhang helps San Francisco buyers and sellers move with greater clarity, stronger strategy, and a more polished client experience."
      />
      <section className="py-16">
        <Container className="max-w-4xl space-y-8 text-lg leading-8 text-[#51606f]">
          <p>
            William&apos;s approach is grounded in thoughtful communication, strong neighborhood
            knowledge, and a calm process that helps clients make better decisions in a fast-moving city.
          </p>
          <p>
            Rather than overcomplicating the process, he focuses on clean guidance: what matters,
            what the tradeoffs are, and how to move with confidence whether you are buying or selling.
          </p>
          <p>
            The result is a premium, polished experience for clients who want both trust and
            practical strategy in San Francisco real estate.
          </p>
        </Container>
      </section>
      <CtaBanner
        title="Ready to talk through your next move?"
        description="Book a consultation and get a tailored San Francisco game plan."
      />
    </>
  );
}

