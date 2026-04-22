"use client";

import Image from "next/image";
import { useState } from "react";

type HeroPortraitProps = {
  name: string;
};

export default function HeroPortrait({ name }: HeroPortraitProps) {
  const [showFallback, setShowFallback] = useState(false);

  return (
    <div className="relative mx-auto h-44 w-44 rounded-full border-4 border-white/90 bg-gradient-to-br from-[#edf3fa] to-[#c8d7e8] shadow-[0_22px_60px_rgba(0,0,0,0.4)] sm:h-52 sm:w-52">
      {!showFallback ? (
        <Image
          src="/william-headshot.png"
          alt={`${name} headshot`}
          fill
          className="rounded-full object-cover"
          sizes="(max-width: 640px) 176px, 208px"
          onError={() => setShowFallback(true)}
          priority
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full text-2xl font-semibold tracking-wide text-[#0f2238] sm:text-3xl">
          WZ
        </div>
      )}
    </div>
  );
}
