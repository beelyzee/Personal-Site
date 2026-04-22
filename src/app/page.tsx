import Link from "next/link";
import Image from "next/image";

import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/data/site";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { TESTIMONIALS } from "@/data/testimonials";
import Container from "@/components/layout/Container";
import StructuredData from "@/components/shared/StructuredData";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: SITE.title,
  description: SITE.description,
  path: "/",
});

const QUICK_LINKS = [
  { label: "Home Search", href: "/resources" },
  { label: "Neighborhood Guides", href: "/neighborhoods" },
];

const POPULAR_AREAS = [
  "North Beach & Telegraph Hill",
  "Pacific Heights",
  "Noe Valley",
  "Russian Hill",
];

const FEATURED_PROPERTIES = [
  {
    title: "1022 Powell Street #2",
    details: "2 BD | 2 BA | 1,045 Sq.Ft.",
    price: "$1,150,000",
  },
  {
    title: "1155 Pine Street #17",
    details: "Studio | 2,627 Sq.Ft.",
    price: "$895,000",
  },
  {
    title: "2345 Chestnut Street",
    details: "3 BD | 2 BA | 1,735 Sq.Ft.",
    price: "$2,295,000",
  },
];

const PRESS_ITEMS = [
  "San Francisco Standard | February 17, 2026",
  "SFGATE | December 7, 2025",
  "Wall Street Journal | November 18, 2025",
  "Bloomberg | July 15, 2025",
];

const MARKET_UPDATES = [
  "San Francisco 2026 April Real Estate Report",
  "San Francisco 2026 March Real Estate Report",
  "San Francisco 2026 February Real Estate Report",
];

const RESULT_STATS = [
  { value: "500+", label: "Homes sold" },
  { value: "$1B+", label: "Sales volume" },
  { value: "Top 1%", label: "SF performance tier" },
  { value: "Top 100", label: "California team ranking" },
];

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

      <section className="relative overflow-hidden">
        <Image
          src="/golden-gate-sunrise.jpg"
          alt="Golden Gate Bridge at sunrise"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,15,29,0.55)_0%,rgba(4,15,29,0.78)_45%,rgba(4,15,29,0.9)_100%)]" />
        <Container className="relative z-10 py-28 sm:py-32">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b8cde2]">
              San Francisco Top Performing
            </p>
            <h1 className="mt-5 text-5xl leading-[1.04] sm:text-6xl md:text-7xl">
              Luxury Real Estate Team
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-[#d7e6f5] sm:text-xl">
              Top 1% of San Francisco Agents. Top 100 Teams in California.
            </p>
            <p className="mt-3 text-sm tracking-wide text-[#b2c6db]">
              WILLIAM ZHANG | CA DRE# DRE_ID
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-[#d4ac74] text-[#1b2230] hover:bg-[#e2bd89]">
                <Link href="/resources">Search All Homes</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/70 bg-white/90 text-[#10243d] hover:bg-white"
              >
                <Link href="/neighborhoods">Explore Neighborhoods</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#d7e0e8] bg-[#f7fbff] py-7">
        <Container className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5f7389]">
              Search for
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {QUICK_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-[#cad7e3] bg-white px-4 py-2 text-sm font-semibold text-[#0f2238] hover:bg-[#eef4fa]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5f7389]">
              Popular areas
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {POPULAR_AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-[#cad7e3] bg-white px-4 py-2 text-sm font-medium text-[#1d3853]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <h2 className="text-4xl text-[#0b2038] sm:text-5xl">We Envision Your Success</h2>
            <p className="mt-5 text-lg font-semibold text-[#1f3a56]">A note from William Zhang</p>
            <p className="mt-4 leading-8 text-[#455a6f]">
              Our clients&apos; success is our passion. When you work with William, you gain focused
              strategy, responsive communication, and local market expertise designed to achieve the
              best possible result.
            </p>
            <p className="mt-4 leading-8 text-[#455a6f]">
              As a San Francisco-based advisor with finance and technology depth, William brings a
              full-stack approach across search, valuation, negotiation, and financing coordination.
            </p>
            <p className="mt-5 text-[#30475f]">Sincerely, William Zhang</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#c7d6e4] shadow-[0_20px_45px_rgba(7,20,39,0.14)]">
            <Image
              src="/lombard-street.jpg"
              alt="San Francisco neighborhood"
              width={900}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[#081a31] py-10">
        <Container className="grid gap-3 md:grid-cols-3">
          <Link
            href="/buy"
            className="rounded-2xl border border-[#254261] bg-[#10243d] px-6 py-4 text-center text-sm font-semibold tracking-[0.14em] text-white hover:bg-[#17314e]"
          >
            BUY A HOME
          </Link>
          <Link
            href="/sell"
            className="rounded-2xl border border-[#254261] bg-[#10243d] px-6 py-4 text-center text-sm font-semibold tracking-[0.14em] text-white hover:bg-[#17314e]"
          >
            SELL MY HOME
          </Link>
          <Link
            href="/get-home-value"
            className="rounded-2xl border border-[#254261] bg-[#10243d] px-6 py-4 text-center text-sm font-semibold tracking-[0.14em] text-white hover:bg-[#17314e]"
          >
            VALUE MY HOME
          </Link>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-center text-4xl text-[#0b2038] sm:text-5xl">Proven Results</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RESULT_STATS.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-[#cfdae5] bg-[#f7fbff] p-6 text-center"
              >
                <p className="text-3xl font-semibold text-[#0d243e]">{stat.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-[#5d7388]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f2f7fc] py-16 sm:py-20">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-4xl text-[#0b2038] sm:text-5xl">Featured Properties</h2>
            <Link href="/resources" className="text-sm font-semibold tracking-wide text-[#173a61]">
              VIEW ALL
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {FEATURED_PROPERTIES.map((property, index) => (
              <article
                key={property.title}
                className="rounded-2xl border border-[#cfdae5] bg-white p-6 shadow-[0_15px_32px_rgba(9,24,42,0.08)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d8297]">
                  For Sale
                </p>
                <h3 className="mt-3 text-2xl text-[#0f2238]">{property.title}</h3>
                <p className="mt-2 text-[#4e6378]">{property.details}</p>
                <p className="mt-3 text-xl font-semibold text-[#112d4a]">{property.price}</p>
                <Button asChild className="mt-5 w-full">
                  <Link href={index % 2 === 0 ? "/buy" : "/sell"}>View Property</Link>
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-4xl text-[#0b2038] sm:text-5xl">Explore San Francisco Districts</h2>
            <Link href="/neighborhoods" className="text-sm font-semibold tracking-wide text-[#173a61]">
              VIEW ALL
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {NEIGHBORHOODS.map((item) => (
              <Link
                key={item.slug}
                href={`/neighborhoods/${item.slug}`}
                className="rounded-2xl border border-[#cfdae5] bg-white p-6 shadow-sm"
              >
                <h3 className="text-2xl text-[#10243d]">{item.name}</h3>
                <p className="mt-2 text-sm leading-7 text-[#4d6072]">{item.tagline}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#091a2f] py-16 text-white sm:py-20">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl">Testimonials</h2>
            <Link href="/resources" className="text-sm font-semibold tracking-wide text-[#bad0e6]">
              VIEW ALL
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <blockquote key={item.name} className="rounded-2xl border border-[#2e4b67] bg-[#10243d] p-6">
                <p className="leading-8 text-[#d7e6f5]">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold tracking-wide text-[#a7c0d8]">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl text-[#0b2038] sm:text-5xl">Press & Media</h2>
            <ul className="mt-6 space-y-3">
              {PRESS_ITEMS.map((item) => (
                <li key={item} className="rounded-xl border border-[#d0dbe6] bg-white px-4 py-3 text-[#2f455c]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-4xl text-[#0b2038] sm:text-5xl">Market Updates</h2>
            <ul className="mt-6 space-y-3">
              {MARKET_UPDATES.map((item) => (
                <li key={item} className="rounded-xl border border-[#d0dbe6] bg-white px-4 py-3 text-[#2f455c]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#d8e1ea] bg-[#f6fbff] py-16 sm:py-20">
        <Container className="text-center">
          <h2 className="text-4xl text-[#0b2038] sm:text-5xl">Let&apos;s Work Together</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#3f576e]">
            Our passion is supporting clients who value exceptional results and client care. We
            look forward to the opportunity to work together.
          </p>
          <Button asChild className="mt-8 bg-[#112d4a] hover:bg-[#173a61]">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
