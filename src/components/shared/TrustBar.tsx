import Container from "@/components/layout/Container";
import MotionReveal from "@/components/shared/MotionReveal";
import { SITE } from "@/data/site";

export default function TrustBar() {
  return (
    <section className="border-y border-[#dce4ea] bg-[#edf3f7]/70 py-4">
      <Container>
        <ul className="grid gap-3 text-sm text-[#314457] md:grid-cols-4">
          {SITE.trustPoints.map((item, index) => (
            <MotionReveal key={item} delay={index * 0.05}>
              <li className="rounded-full bg-white/70 px-4 py-3 text-center shadow-sm">
                {item}
              </li>
            </MotionReveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

