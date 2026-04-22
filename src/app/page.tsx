import Link from "next/link";
import Image from "next/image";

import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/data/site";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { TESTIMONIALS } from "@/data/testimonials";
import Container from "@/components/layout/Container";
import MotionReveal from "@/components/shared/MotionReveal";
import TrustBar from "@/components/shared/TrustBar";
import NeighborhoodCard from "@/components/shared/NeighborhoodCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
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
    body: "Offer strategy, neighborhood fit, and financing coordination in one clear plan.",
    href: "/buy",
  },
  {
    title: "Sell in San Francisco",
    body: "Sharp pricing, strong prep, and polished marketing for higher-confidence outcomes.",
    href: "/sell",
  },
];

const BACKGROUND_CARDS = [
  {
    title: "UCLA CS + Business Economics",
    body: "Double major foundation for analytical decision-making and practical strategy.",
  },
  {
    title: "Fixed Income + Mortgage Insight",
    body: "Bond-market and asset-management experience that informs loan and rate strategy.",
  },
  {
    title: "Deloitte Problem Solving",
    body: "Enterprise consulting rigor applied to complex financial decisions and timelines.",
  },
  {
    title: "Real Estate Execution Depth",
    body: "Hands-on transaction experience across buying, financing, and fast-moving deals.",
  },
];

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: SITE.shortName,
          areaServed: SITE.serviceArea,
          url: SITE.baseUrl,
          telephone: SITE.phoneDisplay,
          email: SITE.email,
        }}
      />

      <section className="relative overflow-hidden">
        <Image
          src="/golden-gate-sunrise.jpg"
          alt="Golden Gate Bridge at sunrise"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(92deg,rgba(6,21,37,0.86)_0%,rgba(6,21,37,0.63)_46%,rgba(6,21,37,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(230,163,89,0.24),transparent_32%),radial-gradient(circle_at_8%_40%,rgba(168,42,52,0.15),transparent_24%)]" />

        <Container className="relative z-10 flex min-h-[72vh] items-center py-20 sm:min-h-[78vh]">
          <MotionReveal className="w-full max-w-3xl text-left">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-[#0d2238]/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe9f9] backdrop-blur">
              <span>Proudly supporting U.S. homeownership</span>
            </div>

            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl">
              Unlock SF Real Estate
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-[#d9e7f7] sm:text-2xl">
              connect with William to achieve your property goals in the Golden City
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-[#d4ac74] text-[#1b2230] hover:bg-[#e2bd89]">
                <Link href="/book-consultation" data-analytics="hero-book-consultation-click">
                  {SITE.consultationCta}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#d8e5f4] bg-white/95 text-[#0f2238] hover:bg-white"
              >
                <Link href="/get-home-value" data-analytics="hero-get-home-value-click">
                  {SITE.valuationCta}
                </Link>
              </Button>
            </div>
          </MotionReveal>
        </Container>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d7f95]">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#071427] sm:text-4xl">
              Buyer and seller strategy with direct execution.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICE_CARDS.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <Card className="h-full rounded-3xl border-[#b8c8d9] bg-white shadow-[0_18px_45px_rgba(9,24,42,0.08)]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#071427]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="text-base leading-7 text-[#2e4057]">{item.body}</p>
                    <Button asChild variant="outline">
                      <Link href={item.href}>Explore</Link>
                    </Button>
                  </CardContent>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#08192e_0%,#0f2238_100%)] py-16 sm:py-20">
        <Container>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9bb3ca]">
              Background & Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Built on finance, technology, and real-world transaction depth.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {BACKGROUND_CARDS.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.04}>
                <div className="rounded-2xl border border-[#294564] bg-[#10243d] p-6 shadow-[0_14px_36px_rgba(1,8,17,0.38)]">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[#c8d8e8]">{item.body}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d7f95]">
                Featured Neighborhoods
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#071427] sm:text-4xl">
                Local strategy by micro-market.
              </h2>
            </div>
            <Button asChild variant="ghost">
              <Link href="/neighborhoods">All neighborhoods</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {NEIGHBORHOODS.slice(0, 4).map((neighborhood, index) => (
              <MotionReveal key={neighborhood.slug} delay={index * 0.04}>
                <NeighborhoodCard neighborhood={neighborhood} />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f0f5fa] py-16 sm:py-20">
        <Container>
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d7f95]">Trust</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#071427] sm:text-4xl">
              Trusted client feedback.
            </h2>
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

      <CtaBanner
        title="Talk with William about your next San Francisco move."
        description="Book a consultation or request your home-value review to get started."
      />
    </>
  );
}
