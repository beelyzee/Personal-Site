import Link from "next/link";

import { buildMetadata } from "@/lib/metadata";
import { HOME_FAQS, SITE } from "@/data/site";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { TESTIMONIALS } from "@/data/testimonials";
import Container from "@/components/layout/Container";
import MotionReveal from "@/components/shared/MotionReveal";
import TrustBar from "@/components/shared/TrustBar";
import NeighborhoodCard from "@/components/shared/NeighborhoodCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
import FAQList from "@/components/shared/FAQList";
import CtaBanner from "@/components/shared/CtaBanner";
import StructuredData from "@/components/shared/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: SITE.title,
  description: SITE.description,
  path: "/",
});

const SERVICE_CARDS = [
  {
    title: "Buy in San Francisco",
    body: "Strategic neighborhood guidance, offer positioning, and a calm process from shortlist to close.",
    href: "/buy",
  },
  {
    title: "Sell in San Francisco",
    body: "Pricing clarity, polished prep, and premium marketing for owners who want a thoughtful listing strategy.",
    href: "/sell",
  },
];

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(203,216,225,0.85),_transparent_34%),radial-gradient(circle_at_85%_15%,_rgba(221,203,175,0.55),_transparent_30%),linear-gradient(180deg,#fbf9f4_0%,#f4efe7_100%)] py-24 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#71879a]">
              San Francisco buyers and sellers
            </p>
            <h1 className="mt-5 text-balance text-5xl leading-tight text-[#10243d] sm:text-6xl">
              {SITE.heroHeadline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#465567]">
              {SITE.heroSubheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/book-consultation">{SITE.consultationCta}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/get-home-value">{SITE.valuationCta}</Link>
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="rounded-[2rem] border border-[#dce4eb] bg-white/80 p-6 shadow-[0_28px_70px_rgba(16,36,61,0.14)] backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {NEIGHBORHOODS.slice(0, 4).map((neighborhood) => (
                  <div
                    key={neighborhood.slug}
                    className="rounded-3xl border border-[#e3e9ee] bg-[linear-gradient(180deg,#f8fbfd_0%,#f1eee7_100%)] p-5"
                  >
                    <p className="text-sm font-semibold text-[#10243d]">{neighborhood.name}</p>
                    <p className="mt-2 text-sm leading-6 text-[#5c6978]">{neighborhood.tagline}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>

      <TrustBar />

      <section className="py-20">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8fa1]">
              Services
            </p>
            <h2 className="mt-4 text-4xl text-[#10243d]">Clear paths for buyers and sellers.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICE_CARDS.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.06}>
                <Card className="h-full border-[#d7dfe7] bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#10243d]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="leading-7 text-[#5a6777]">{item.body}</p>
                    <Button asChild variant="outline">
                      <Link href={item.href}>Explore service</Link>
                    </Button>
                  </CardContent>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/65 py-20">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8fa1]">
                Neighborhoods
              </p>
              <h2 className="mt-4 text-4xl text-[#10243d]">Featured San Francisco neighborhoods</h2>
            </div>
            <Button asChild variant="ghost">
              <Link href="/neighborhoods">View all neighborhoods</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {NEIGHBORHOODS.map((neighborhood, index) => (
              <MotionReveal key={neighborhood.slug} delay={index * 0.04}>
                <NeighborhoodCard neighborhood={neighborhood} />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <MotionReveal>
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8fa1]">
                Why William
              </p>
              <h2 className="mt-4 text-4xl text-[#10243d]">
                Trusted local guidance with a polished client experience.
              </h2>
            </div>
          </MotionReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Neighborhood-specific guidance, not generic citywide advice",
              "Buyer and seller strategy grounded in real market tradeoffs",
              "Modern communication, clean process management, and premium presentation",
              "Warm, high-trust service designed for discerning local clients",
            ].map((point, index) => (
              <MotionReveal key={point} delay={index * 0.05}>
                <div className="rounded-3xl border border-[#d8e1e8] bg-white p-6 text-[#49586a] shadow-sm">
                  {point}
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/65 py-20">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8fa1]">
              Testimonials
            </p>
            <h2 className="mt-4 text-4xl text-[#10243d]">Client trust, built through strategy and care.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <MotionReveal key={testimonial.name} delay={index * 0.05}>
                <TestimonialCard testimonial={testimonial} />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-4xl">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8fa1]">FAQ</p>
            <h2 className="mt-4 text-4xl text-[#10243d]">Questions clients ask before making a move.</h2>
          </div>
          <FAQList items={HOME_FAQS} />
        </Container>
      </section>

      <CtaBanner
        title="Start with a consultation built around your San Francisco goals."
        description="Whether you are buying, selling, or planning your next move, William can help you shape a smarter path forward."
      />
    </>
  );
}

