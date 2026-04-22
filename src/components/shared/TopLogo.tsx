"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type TopLogoProps = {
  name: string;
};

export default function TopLogo({ name }: TopLogoProps) {
  const [showFallback, setShowFallback] = useState(false);

  return (
    <Link
      href="/"
      className="justify-self-start overflow-hidden rounded-xl border border-white/30 bg-[#10243d]/80 p-2 shadow-[0_8px_20px_rgba(0,0,0,0.28)] backdrop-blur"
      aria-label={`${name} home`}
    >
      <div className="relative flex h-8 w-[104px] items-center justify-center rounded-md bg-[#10243d] text-sm font-semibold text-[#d7e7f7] sm:h-9 sm:w-[120px]">
        {!showFallback ? (
          <Image
            src="/image.png"
            alt={`${name} logo`}
            fill
            className="rounded-md object-contain"
            sizes="(max-width: 640px) 104px, 120px"
            onError={() => setShowFallback(true)}
            priority
          />
        ) : (
          <span>WZ</span>
        )}
      </div>
    </Link>
  );
}
