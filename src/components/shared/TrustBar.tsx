import Container from "@/components/layout/Container";
import MotionReveal from "@/components/shared/MotionReveal";
import { SITE } from "@/data/site";

export default function TrustBar() {
  return (
    <section className="border-y border-[#1a2f49] bg-[#08182c] py-6">
      <Container>
        <div className="mb-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9db5cd]">
            Trusted by Clients Who Have Worked At
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 text-center text-xs font-semibold uppercase tracking-[0.07em] text-[#e6eef7] sm:grid-cols-3 md:grid-cols-5">
          {SITE.trustedClientLogos.map((item, index) => (
            <MotionReveal key={item} delay={index * 0.05}>
              <li className="rounded-xl border border-[#2e4966] bg-[#10243d] px-3 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.24)]">
                {item}
              </li>
            </MotionReveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
