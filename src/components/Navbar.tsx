"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/book-consultation", label: "Financing" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-50"
          : "sticky top-0 z-50 border-b border-white/10 bg-[#07111b]/88 backdrop-blur-xl"
      }
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link href="/" className="block min-w-0" aria-label="William Zhang Real Estate home">
          <div className="relative h-8 w-[220px] md:h-10 md:w-[280px] xl:h-12 xl:w-[340px]">
            <Image
              src="/images/wz-logo-horizontal.png"
              alt="William Zhang Real Estate"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          <nav className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-[#f5f2ec] transition-colors hover:text-[#9fc3ff]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center rounded-full border border-white/20 bg-white/6 px-6 text-sm font-medium text-[#f5f2ec] backdrop-blur-md transition-all hover:border-[#9fc3ff]/60 hover:bg-white/10"
          >
            Contact William
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/6 text-[#f5f2ec] backdrop-blur-md lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#07111b]/96 px-5 py-5 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-[#f5f2ec] transition-colors hover:text-[#9fc3ff]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/6 px-5 text-sm font-medium text-[#f5f2ec] backdrop-blur-md"
            >
              Contact William
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
