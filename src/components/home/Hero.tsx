import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { SITE_CONFIG } from "@/data/site";
import PhoneCTA from "@/components/shared/PhoneCTA";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pb-10 pt-6 md:pb-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[74vh] overflow-hidden rounded-[2rem] border border-[#d8ccba] shadow-[0_22px_44px_rgba(8,28,42,0.22)]">
          <Image
            src="/lombard-street.jpg"
            alt="Lombard Street in San Francisco"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071727de] via-[#0a2134ad] to-[#10273b4d]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03060ab8] via-transparent to-transparent" />

          <div className="relative z-10 flex min-h-[74vh] flex-col justify-end p-6 md:p-10">
            <div className="mb-5 inline-flex w-fit items-center gap-3 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#0a3161]">
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
              </span>
              <span className="h-1.5 w-5 rounded-full bg-[#b31942]" />
              <span className="h-1.5 w-5 rounded-full bg-white ring-1 ring-[#d8d8d8]" />
              <span className="h-1.5 w-5 rounded-full bg-[#b31942]" />
              American Homeownership Focus
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f2d2a4]">
              5A Mortgage | San Francisco
            </p>
            <h1 className="mt-3 max-w-3xl text-balance font-serif text-4xl leading-tight text-white md:text-6xl">
              Secure your dream home today with us.
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
              I&apos;m William Zhang. Let&apos;s map your buying power and move you toward an
              offer-ready financing plan.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link href="#estimate" data-analytics-event="hero_cta_click">
                  {SITE_CONFIG.ctaLabels.startEstimate}
                </Link>
              </Button>
              <PhoneCTA variant="outline" size="lg" className="border-white bg-white/90 text-[#0a2236] hover:bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
