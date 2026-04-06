import AboutWilliam from "@/components/home/AboutWilliam";
import CTASection from "@/components/home/CTASection";
import EstimateFunnel from "@/components/home/EstimateFunnel";
import Hero from "@/components/home/Hero";
import ProcessSteps from "@/components/home/ProcessSteps";
import ResourcesPreview from "@/components/home/ResourcesPreview";
import ReviewsTrust from "@/components/home/ReviewsTrust";
import WhyWilliam from "@/components/home/WhyWilliam";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EstimateFunnel />
      <WhyWilliam />
      <ReviewsTrust />
      <AboutWilliam />
      <ProcessSteps />
      <ResourcesPreview />
      <CTASection />
    </>
  );
}
