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
      className="justify-self-end overflow-hidden rounded-full border border-[#3a536d] bg-[#10243d] p-1 shadow-[0_8px_20px_rgba(0,0,0,0.28)]"
      aria-label={`${name} home`}
    >
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#ebf3fc] to-[#c8d9ea] text-sm font-semibold text-[#10243d]">
        {!showFallback ? (
          <Image
            src="/image.png"
            alt={`${name} logo`}
            fill
            className="rounded-full object-cover"
            sizes="44px"
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
