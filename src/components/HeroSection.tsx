"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, House, KeyRound } from "lucide-react";

import { SITE } from "@/data/site";

const CTA_ITEMS = [
  { href: "/buy", label: "Buy", icon: House },
  { href: "/sell", label: "Sell", icon: KeyRound },
  { href: "/book-consultation", label: "Financing", icon: Building2 },
];

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07111b]">
      <div className="absolute inset-0">
        <motion.div
          animate={prefersReducedMotion ? undefined : { scale: 1.04 }}
          transition={prefersReducedMotion ? undefined : { duration: 18, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image
            src="/images/sf-hero.jpg"
            alt="San Francisco skyline at night"
            fill
            priority
            className="object-cover object-[68%_center]"
            sizes="100vw"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,27,0.94)_0%,rgba(11,22,35,0.86)_34%,rgba(11,22,35,0.55)_58%,rgba(11,22,35,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(159,195,255,0.12),transparent_30%),radial-gradient(circle_at_20%_45%,rgba(59,111,182,0.1),transparent_28%),linear-gradient(180deg,rgba(7,17,27,0.25)_0%,rgba(7,17,27,0.58)_100%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.48)]" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full max-w-[1600px] px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-20 lg:pt-36">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[560px] sm:max-w-[640px] lg:ml-6 xl:ml-10"
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-[#9fc3ff]">
              FULL SERVICE REAL ESTATE
            </p>

            <h1 className="mt-6 text-[4.2rem] leading-[0.9] text-[#f5f2ec] sm:text-[5.2rem] md:text-[6.1rem] lg:text-[7rem]">
              Full Service
              <br />
              Real Estate
            </h1>

            <p className="mt-7 max-w-[520px] text-lg leading-8 text-[#ddd6ce] sm:text-xl sm:leading-9">
              Combining financing and agent services to bring you the best deal
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {CTA_ITEMS.map((item) => {
                const Icon = item.icon;

                return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex h-14 items-center justify-center gap-3 border border-white/70 bg-transparent px-6 text-base font-medium text-[#f5f2ec] transition-all duration-300 hover:border-[#9fc3ff] hover:bg-white/6"
                >
                  <Icon className="h-[18px] w-[18px] text-white" strokeWidth={2} />
                  {item.label}
                </Link>
                );
              })}
            </div>

            <div className="mt-12 h-px w-full max-w-[540px] bg-gradient-to-r from-white/30 via-white/12 to-transparent" />

            <p className="mt-5 text-sm tracking-[0.18em] text-[#d1d8df] sm:text-[15px]">
              <span className="font-medium text-[#9fc3ff]">William Zhang</span>
              <span className="px-3 text-white/30">|</span>
              <span>DRE# {SITE.dreId}</span>
              <span className="px-3 text-white/30">|</span>
              <span>NMLS# {SITE.nmlsId}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
