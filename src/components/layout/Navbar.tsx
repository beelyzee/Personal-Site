import Link from "next/link";

import { SITE } from "@/data/site";
import Container from "@/components/layout/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#13253b] bg-[#071427]/95 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="min-w-0">
          <p className="truncate text-base font-semibold tracking-wide text-[#f5f8fc] sm:text-lg">
            {SITE.shortName}
          </p>
        </Link>

        <nav className="flex items-center gap-5 text-sm font-medium text-[#e3ebf3] sm:gap-8 sm:text-base">
          {SITE.primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#d5ae76]">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
