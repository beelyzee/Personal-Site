import Link from "next/link";

import { NAV_ITEMS, SITE_CONFIG } from "@/data/site";
import QRCodeCard from "@/components/shared/QRCodeCard";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5dccf] bg-[#f7f2e9]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6b4a]">
            {SITE_CONFIG.companyName}
          </p>
          <h2 className="font-serif text-2xl text-[#1f1f1f]">
            Talk to a local San Francisco loan officer today.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[#514636]">
            {SITE_CONFIG.loanOfficerName} helps buyers evaluate purchasing power and move toward
            offer-ready financing with clear, practical guidance.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a href={`tel:${SITE_CONFIG.phoneTel}`} className="text-[#0d3a4f] underline-offset-4 hover:underline">
              {SITE_CONFIG.phoneNumber}
            </a>
            <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-[#0d3a4f] underline-offset-4 hover:underline">
              {SITE_CONFIG.contactEmail}
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#514636]">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline-offset-4 hover:text-[#0d3a4f] hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#5f5343]">
            Service area: {SITE_CONFIG.serviceArea} | NMLS: {SITE_CONFIG.nmlsId} | DRE:{" "}
            {SITE_CONFIG.dreId}
          </p>
          <p className="text-xs leading-6 text-[#5f5343]">{SITE_CONFIG.footerDisclaimer}</p>
        </div>

        <div className="max-w-sm">
          <QRCodeCard />
        </div>
      </div>
    </footer>
  );
}

