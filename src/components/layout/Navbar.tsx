"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SITE } from "@/data/site";
import Container from "@/components/layout/Container";
import TopLogo from "@/components/shared/TopLogo";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-40 bg-transparent"
          : "sticky top-0 z-40 border-b border-[#13253b] bg-[#071427]/95 backdrop-blur-xl"
      }
    >
      <Container className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-4">
        <TopLogo name={SITE.shortName} />

        <nav
          className={`justify-self-center flex items-center gap-4 text-sm font-semibold sm:gap-8 sm:text-base ${
            isHome ? "text-[#f5f8fc]" : "text-[#ecf2f8]"
          }`}
        >
          {SITE.primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#d5ae76]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="justify-self-end">
          <Button
            asChild
            className={
              isHome
                ? "bg-white/92 text-[#0f2238] hover:bg-white"
                : "bg-[#d4ac74] text-[#1b2230] hover:bg-[#e2bd89]"
            }
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
