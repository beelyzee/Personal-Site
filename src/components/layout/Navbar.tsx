import Link from "next/link";

import { SITE } from "@/data/site";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#dbe4eb]/80 bg-[#f8f5ef]/90 backdrop-blur-xl">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6c8194]">
            San Francisco Real Estate
          </p>
          <p className="truncate text-lg font-semibold text-[#10243d]">{SITE.shortName}</p>
        </Link>

        <nav className="flex flex-wrap items-center gap-4 text-sm text-[#435465]">
          {SITE.primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#10243d]">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="hidden md:inline-flex">
          <Link href="/book-consultation">{SITE.consultationCta}</Link>
        </Button>
      </Container>
    </header>
  );
}

