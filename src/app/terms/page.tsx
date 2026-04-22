import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";

export const metadata = buildMetadata({
  title: "Terms and Brokerage Disclosures",
  description: "Terms of use and brokerage disclosure page for William Zhang Real Estate.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms / Disclosures"
        title="Terms of use and brokerage disclosures."
        description="This page is intended as a clean starting point and should be finalized with your brokerage-approved language."
      />
      <section className="py-16">
        <Container className="max-w-4xl space-y-6 leading-8 text-[#51606f]">
          <p>
            Information on this site is provided for general informational purposes and does not
            constitute legal, tax, or financial advice.
          </p>
          <p>
            Real-estate availability, market conditions, and valuation opinions can change over time.
            Brokerage relationships, disclosures, and licensure information should be reviewed with
            final approved language before launch.
          </p>
          <p>
            Replace this placeholder page with your brokerage’s required disclosures, equal housing
            language, and any state or local compliance statements.
          </p>
        </Container>
      </section>
    </>
  );
}

