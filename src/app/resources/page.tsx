import { RESOURCES } from "@/data/resources";
import Section from "@/components/layout/Section";
import ResourceCard from "@/components/resources/ResourceCard";
import ResourceFilter from "@/components/resources/ResourceFilter";

export default function ResourcesPage() {
  const featuredArticle = RESOURCES.find((item) => item.featured) ?? RESOURCES[0];

  return (
    <>
      <Section className="pb-10 pt-16 md:pt-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6b4a]">
            Buyer Education
          </p>
          <h1 className="text-balance font-serif text-4xl leading-tight text-[#1f1f1f] md:text-5xl">
            San Francisco homebuyer resources
          </h1>
          <p className="text-lg leading-8 text-[#5b5b5b]">
            Practical guides to help you understand financing, avoid mistakes, and move from
            planning to offer with more confidence.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Featured Article"
        title={featuredArticle.title}
        description={featuredArticle.excerpt}
        className="bg-white/60 py-12"
      >
        <div className="max-w-2xl">
          <ResourceCard item={featuredArticle} />
        </div>
      </Section>

      <Section
        id="resource-library"
        eyebrow="Library"
        title="Explore by topic"
        description="Filter content by category and focus on what you need right now."
      >
        <ResourceFilter />
      </Section>
    </>
  );
}

