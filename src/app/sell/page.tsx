import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import FAQList from "@/components/shared/FAQList";
import CtaBanner from "@/components/shared/CtaBanner";
import LeadForm from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/button";
import { HOME_FAQS } from "@/data/site";

export const metadata = buildMetadata({
  title: "Sell in San Francisco",
  description:
    "San Francisco listing strategy, pricing, preparation, and premium marketing for homeowners ready to sell well.",
  path: "/sell",
});

export default function SellPage() {
  return (
    <>
      <PageHero
        eyebrow="Sell in San Francisco"
        title="Pricing clarity, polished prep, and modern marketing."
        description="William helps sellers prepare thoughtfully, launch with confidence, and position their home for the right audience."
        actions={
          <Button asChild size="lg">
            <a href="#seller-form">Request a seller strategy call</a>
          </Button>
        }
      />
      <section className="bg-[#f5f2ec] py-16">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl text-[#10243d]">Selling process overview</h2>
              <p className="mt-4 leading-8 text-[#51606f]">
                From valuation and launch timing to listing preparation and negotiation, sellers
                receive a clear plan built around their goals and property type.
              </p>
            </section>
            <section>
              <h2 className="text-3xl text-[#10243d]">Pricing strategy</h2>
              <p className="mt-4 leading-8 text-[#51606f]">
                Pricing should align with the target buyer pool, current neighborhood activity, and
                how the home actually compares on condition and livability.
              </p>
            </section>
            <section>
              <h2 className="text-3xl text-[#10243d]">Preparing the home</h2>
              <p className="mt-4 leading-8 text-[#51606f]">
                Presentation matters. Sellers benefit from intentional edits, clean styling, and a
                strong visual story before hitting the market.
              </p>
            </section>
            <section>
              <h2 className="text-3xl text-[#10243d]">Marketing plan</h2>
              <p className="mt-4 leading-8 text-[#51606f]">
                Listing media, digital distribution, neighborhood positioning, and buyer messaging
                should all work together to create traction quickly.
              </p>
            </section>
          </div>

          <div id="seller-form">
            <LeadForm
              variant="seller"
              sourcePage="/sell"
              title="Seller valuation form"
              description="Tell William about the property and receive a tailored selling conversation."
              submitLabel="Request seller strategy"
            />
          </div>
        </Container>
      </section>
      <section className="bg-[#eef3f7] py-16">
        <Container className="max-w-4xl">
          <h2 className="text-3xl text-[#10243d]">Seller FAQ</h2>
          <div className="mt-6">
            <FAQList items={HOME_FAQS} />
          </div>
        </Container>
      </section>
      <CtaBanner
        title="Get a seller plan shaped around your neighborhood and timing."
        description="Request a strategy consultation to talk pricing, prep, marketing, and launch sequencing."
      />
    </>
  );
}
