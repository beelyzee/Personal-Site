import Link from "next/link";

import { SITE_CONFIG } from "@/data/site";
import Section from "@/components/layout/Section";
import BadgeRow from "@/components/shared/BadgeRow";
import PhoneCTA from "@/components/shared/PhoneCTA";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <Section className="pb-10 pt-16 md:pb-16 md:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8b6b4a]">
            San Francisco Purchase Loans
          </p>
          <h1 className="max-w-2xl text-balance font-serif text-4xl leading-tight text-[#1f1f1f] md:text-6xl">
            San Francisco Home Loans, Simplified
          </h1>
          <p className="max-w-xl text-lg leading-8 text-[#555]">
            See what you may qualify for, then get direct guidance from a local loan officer who
            understands San Francisco buyers and fast-moving offers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#estimate" data-analytics-event="hero_cta_click">
                {SITE_CONFIG.ctaLabels.startEstimate}
              </Link>
            </Button>
            <PhoneCTA variant="outline" size="lg" />
          </div>
          <BadgeRow />
        </div>

        <aside className="rounded-3xl border border-[#ded3c3] bg-gradient-to-b from-[#fefbf4] to-white p-8 shadow-[0_20px_40px_rgba(13,58,79,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8b6b4a]">
            Local Focus
          </p>
          <h2 className="mt-3 font-serif text-2xl text-[#1f1f1f]">Based in Russian Hill</h2>
          <p className="mt-3 text-sm leading-7 text-[#5b5b5b]">
            William Zhang supports buyers across San Francisco with a clear financing strategy,
            responsive communication, and numbers-driven guidance from first estimate to offer.
          </p>
          <div className="mt-6 rounded-2xl border border-[#e9decd] bg-[#fff9ef] p-4">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#886445]">
              Next Step
            </p>
            <p className="mt-1 text-sm text-[#4f4336]">
              Start your quick buying power estimate and get a realistic range in minutes.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}

