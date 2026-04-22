import { notFound } from "next/navigation";

import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import FAQList from "@/components/shared/FAQList";
import CtaBanner from "@/components/shared/CtaBanner";
import StructuredData from "@/components/shared/StructuredData";

type NeighborhoodPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return NEIGHBORHOODS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: NeighborhoodPageProps) {
  const { slug } = await params;
  const neighborhood = NEIGHBORHOODS.find((item) => item.slug === slug);

  if (!neighborhood) {
    return buildMetadata({
      title: "Neighborhood not found",
      description: "The requested neighborhood guide could not be found.",
      path: `/neighborhoods/${slug}`,
    });
  }

  return buildMetadata({
    title: neighborhood.seoTitle,
    description: neighborhood.seoDescription,
    path: `/neighborhoods/${slug}`,
  });
}

export default async function NeighborhoodDetailPage({ params }: NeighborhoodPageProps) {
  const { slug } = await params;
  const neighborhood = NEIGHBORHOODS.find((item) => item.slug === slug);

  if (!neighborhood) {
    notFound();
  }

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Neighborhoods", item: "/neighborhoods" },
            {
              "@type": "ListItem",
              position: 3,
              name: neighborhood.name,
              item: `/neighborhoods/${neighborhood.slug}`,
            },
          ],
        }}
      />

      <PageHero
        eyebrow="Neighborhood guide"
        title={neighborhood.name}
        description={neighborhood.summary}
      />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl text-[#10243d]">Best for</h2>
              <ul className="mt-4 space-y-2 text-[#51606f]">
                {neighborhood.bestFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl text-[#10243d]">Housing stock</h2>
              <ul className="mt-4 space-y-2 text-[#51606f]">
                {neighborhood.housingStock.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl text-[#10243d]">Lifestyle</h2>
              <ul className="mt-4 space-y-2 text-[#51606f]">
                {neighborhood.lifestyle.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl text-[#10243d]">Pros and tradeoffs</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-[#dbe4eb] bg-white p-6">
                  <h3 className="text-lg text-[#10243d]">Pros</h3>
                  <ul className="mt-3 space-y-2 text-[#51606f]">
                    {neighborhood.pros.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-[#dbe4eb] bg-white p-6">
                  <h3 className="text-lg text-[#10243d]">Tradeoffs</h3>
                  <ul className="mt-3 space-y-2 text-[#51606f]">
                    {neighborhood.tradeoffs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl text-[#10243d]">Buyer strategy</h2>
              <p className="mt-4 leading-8 text-[#51606f]">{neighborhood.buyerStrategy}</p>
            </section>
            <section>
              <h2 className="text-2xl text-[#10243d]">Seller strategy</h2>
              <p className="mt-4 leading-8 text-[#51606f]">{neighborhood.sellerStrategy}</p>
            </section>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-4xl">
          <h2 className="text-3xl text-[#10243d]">FAQ</h2>
          <div className="mt-6">
            <FAQList items={neighborhood.faq} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title={`Want tailored guidance for ${neighborhood.name}?`}
        description="Book a consultation to talk through fit, pricing, and timing from a local San Francisco perspective."
      />
    </>
  );
}

