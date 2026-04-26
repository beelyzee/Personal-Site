import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/data/site";
import HeroSection from "@/components/HeroSection";
import HomeVisualSections from "@/components/HomeVisualSections";
import StructuredData from "@/components/shared/StructuredData";

export const metadata = buildMetadata({
  title: SITE.title,
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: SITE.shortName,
          areaServed: SITE.serviceArea,
          url: SITE.baseUrl,
          telephone: SITE.phoneDisplay,
          email: SITE.email,
        }}
      />
      <HeroSection />
      <HomeVisualSections />
    </>
  );
}
