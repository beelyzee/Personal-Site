import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeDollarSign, Landmark, MapPinned } from "lucide-react";

import MotionReveal from "@/components/shared/MotionReveal";

const FEATURE_IMAGES = [
  {
    title: "Neighborhood strategy",
    label: "Russian Hill / Northside",
    href: "/neighborhoods",
    image: "/lombard-street.jpg",
    icon: MapPinned,
  },
  {
    title: "Offer positioning",
    label: "Buyer advisory",
    href: "/buy",
    image: "/images/sf-hero.jpg",
    icon: Landmark,
  },
  {
    title: "Financing insight",
    label: "Rate and loan guidance",
    href: "/book-consultation",
    image: "/golden-gate-sunrise.jpg",
    icon: BadgeDollarSign,
  },
];

export default function HomeVisualSections() {
  return (
    <div className="bg-[#07111b] text-[#f5f2ec]">
      <section className="border-y border-white/10 py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] xl:px-12 2xl:px-16">
          <MotionReveal className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9fc3ff]">
              San Francisco Advisory
            </p>
            <h2 className="mt-5 max-w-xl text-5xl leading-[0.95] text-[#f5f2ec] sm:text-6xl">
              Representation with a financing brain.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#c9d2dc] sm:text-lg">
              One local point of contact for search, offer strategy, and the loan conversation behind
              the deal.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="relative min-h-[420px] overflow-hidden border border-white/12">
              <Image
                src="/golden-gate-sunrise.jpg"
                alt="Golden Gate Bridge in San Francisco"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,27,0.05)_0%,rgba(7,17,27,0.72)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 p-6 sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#9fc3ff]">
                    City Focus
                  </p>
                  <p className="mt-2 max-w-md text-2xl leading-tight text-white">
                    Built for San Francisco buyers and sellers who care about execution.
                  </p>
                </div>
                <Link
                  href="/contact"
                  aria-label="Contact William"
                  className="hidden h-12 w-12 shrink-0 items-center justify-center border border-white/60 text-white transition-colors hover:border-[#9fc3ff] hover:text-[#9fc3ff] sm:inline-flex"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 xl:px-12 2xl:px-16">
          <MotionReveal className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9fc3ff]">
                Three Angles
              </p>
              <h2 className="mt-4 text-4xl leading-none text-[#f5f2ec] sm:text-5xl">
                Local market, deal craft, loan clarity.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#b9c5d2]">
              More signal, fewer moving parts.
            </p>
          </MotionReveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {FEATURE_IMAGES.map((item, index) => {
              const Icon = item.icon;

              return (
                <MotionReveal key={item.title} delay={index * 0.06}>
                  <Link
                    href={item.href}
                    className="group relative block min-h-[360px] overflow-hidden border border-white/12 bg-[#0b1623]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,27,0.08)_0%,rgba(7,17,27,0.84)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center border border-white/45 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9fc3ff]">
                        {item.label}
                      </p>
                      <div className="mt-2 flex items-center justify-between gap-4">
                        <h3 className="text-3xl leading-none text-white">{item.title}</h3>
                        <ArrowUpRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-20 sm:py-24">
        <Image
          src="/lombard-street.jpg"
          alt="Lombard Street in San Francisco"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,27,0.9)_0%,rgba(7,17,27,0.72)_44%,rgba(7,17,27,0.34)_100%)]" />
        <MotionReveal className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9fc3ff]">
              Next Move
            </p>
            <h2 className="mt-5 text-5xl leading-[0.95] text-white sm:text-6xl">
              Start with a sharper read on the market.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-14 items-center justify-center border border-white/70 px-7 text-base font-medium text-white transition-colors hover:border-[#9fc3ff] hover:bg-white/6"
            >
              Contact William
            </Link>
          </div>
        </MotionReveal>
      </section>
    </div>
  );
}
