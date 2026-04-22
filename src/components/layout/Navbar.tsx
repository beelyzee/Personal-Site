import Link from "next/link";

import { SITE } from "@/data/site";
import Container from "@/components/layout/Container";
import TopLogo from "@/components/shared/TopLogo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#13253b] bg-[#071427]/95 backdrop-blur-xl">
      <Container className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-4">
        <Link href="/" className="justify-self-start min-w-0">
          <p className="hidden truncate text-sm font-semibold tracking-[0.06em] text-[#f5f8fc] sm:block sm:text-base">
            {SITE.shortName}
          </p>
        </Link>

        <nav className="justify-self-center flex items-center gap-4 text-sm font-semibold text-[#ecf2f8] sm:gap-8 sm:text-base">
          {SITE.primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#d5ae76]">
              {item.label}
            </Link>
          ))}
        </nav>

        <TopLogo name={SITE.shortName} />
      </Container>
    </header>
  );
}
