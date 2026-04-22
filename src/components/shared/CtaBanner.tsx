import Link from "next/link";

import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import MotionReveal from "@/components/shared/MotionReveal";

type CtaBannerProps = {
  title: string;
  description: string;
};

export default function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="py-16">
      <Container>
        <MotionReveal className="rounded-[2rem] border border-[#d8e0e7] bg-[linear-gradient(135deg,#10243d_0%,#27445e_58%,#536f88_100%)] p-8 text-white shadow-[0_28px_70px_rgba(16,36,61,0.24)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d8c5a7]">
            Next step
          </p>
          <h2 className="mt-3 max-w-3xl text-balance text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#e6edf3]">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="secondary" size="lg">
              <Link href="/book-consultation">{SITE.consultationCta}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link href="/get-home-value">{SITE.valuationCta}</Link>
            </Button>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}

