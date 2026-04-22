import Link from "next/link";

import { SITE } from "@/data/site";
import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#dce5eb] bg-[#10243d] py-16 text-[#dfe8ee]">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7c5a8]">
            {SITE.name}
          </p>
          <h2 className="mt-4 max-w-sm text-3xl text-white">
            Premium strategy for San Francisco buyers and sellers.
          </h2>
          <p className="mt-4 max-w-md leading-7 text-[#c5d0da]">
            A polished, high-trust real-estate experience grounded in neighborhood knowledge,
            pricing clarity, and responsive client service.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d7c5a8]">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {SITE.primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d7c5a8]">
            Contact
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <p>{SITE.phoneDisplay}</p>
            <p>{SITE.email}</p>
            <p>{SITE.serviceArea}</p>
            <p className="leading-6 text-[#b9c7d1]">
              {SITE.brokerageName}
              <br />
              {SITE.brokerageDisclosures}
            </p>
          </div>
          <div className="mt-6 space-y-2 text-sm">
            <Link href="/privacy-policy" className="block hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="block hover:text-white">
              Terms / brokerage disclosures
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

