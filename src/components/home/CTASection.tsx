import { SITE_CONFIG } from "@/data/site";
import Section from "@/components/layout/Section";
import PhoneCTA from "@/components/shared/PhoneCTA";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <Section className="pb-20 pt-12">
      <div className="rounded-3xl border border-[#dcccb6] bg-gradient-to-r from-[#fff9ef] to-[#eef5f8] p-8 shadow-[0_18px_35px_rgba(13,58,79,0.1)] md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8b6b4a]">
          Ready to move forward?
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl text-[#1f1f1f] md:text-4xl">
          Talk with William and get a clear San Francisco purchase-loan game plan.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[#5b5b5b]">
          Use your quick estimate as a starting point, then call for a strategy conversation tailored
          to your goals and timeline.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <PhoneCTA size="lg" />
          <Button asChild size="lg" variant="secondary">
            <a href={SITE_CONFIG.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book a Strategy Call
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

