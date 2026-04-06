"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { NAV_ITEMS, SITE_CONFIG } from "@/data/site";
import { cn } from "@/lib/utils";
import PhoneCTA from "@/components/shared/PhoneCTA";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#e5dccf] bg-[#f8f6f2]/95 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="min-w-0">
          <p className="truncate text-sm font-semibold uppercase tracking-[0.14em] text-[#8b6b4a]">
            {SITE_CONFIG.companyName}
          </p>
          <p className="truncate text-base font-semibold text-[#1f1f1f]">
            {SITE_CONFIG.loanOfficerName}
          </p>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#0d3a4f]",
                  isActive ? "text-[#0d3a4f]" : "text-[#4f4f4f]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <PhoneCTA label={SITE_CONFIG.ctaLabels.callNow} />
        </div>

        <div className="md:hidden">
          <Button asChild variant="outline" size="icon">
            <Link href="/contact" aria-label="Open contact page">
              <Menu className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

