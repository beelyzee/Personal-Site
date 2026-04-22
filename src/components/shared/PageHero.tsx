import { ReactNode } from "react";

import Container from "@/components/layout/Container";
import MotionReveal from "@/components/shared/MotionReveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/60 bg-[radial-gradient(circle_at_top_left,_rgba(197,214,225,0.65),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(221,203,175,0.45),_transparent_32%),linear-gradient(180deg,#f7f4ee_0%,#f4efe7_100%)] py-20 sm:py-24">
      <Container>
        <MotionReveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7e8e9e]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-balance text-4xl text-[#10243d] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#445263]">{description}</p>
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </MotionReveal>
      </Container>
    </section>
  );
}

