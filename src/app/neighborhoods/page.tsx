import { buildMetadata } from "@/lib/metadata";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import NeighborhoodCard from "@/components/shared/NeighborhoodCard";
import MotionReveal from "@/components/shared/MotionReveal";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata = buildMetadata({
  title: "San Francisco Neighborhoods",
  description:
    "Explore featured San Francisco neighborhoods with buyer and seller strategy, lifestyle notes, housing stock, and local tradeoffs.",
  path: "/neighborhoods",
});

export default function NeighborhoodsPage() {
  return (
    <>
      <PageHero
        eyebrow="Neighborhoods hub"
        title="Neighborhood guides built for real decision-making."
        description="Each guide helps buyers and sellers compare lifestyle, housing stock, strategy, and tradeoffs across San Francisco."
      />
      <section className="py-16">
        <Container className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {NEIGHBORHOODS.map((neighborhood, index) => (
            <MotionReveal key={neighborhood.slug} delay={index * 0.04}>
              <NeighborhoodCard neighborhood={neighborhood} />
            </MotionReveal>
          ))}
        </Container>
      </section>
      <CtaBanner
        title="Not sure which neighborhood fits your next move?"
        description="Book a consultation and get help comparing block feel, lifestyle, and long-term value."
      />
    </>
  );
}

