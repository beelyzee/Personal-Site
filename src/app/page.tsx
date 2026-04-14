import CTASection from "@/components/home/CTASection";
import EstimateFunnel from "@/components/home/EstimateFunnel";
import Hero from "@/components/home/Hero";
import WhyWilliam from "@/components/home/WhyWilliam";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EstimateFunnel />
      <WhyWilliam />
      <CTASection />
    </>
  );
}
