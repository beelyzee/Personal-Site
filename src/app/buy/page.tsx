import { buildMetadata } from "@/lib/metadata";
import { HOME_FAQS } from "@/data/site";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import FAQList from "@/components/shared/FAQList";
import CtaBanner from "@/components/shared/CtaBanner";
import LeadForm from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Buy in San Francisco",
  description:
    "San Francisco buyer representation with neighborhood guidance, financing preparation, and a polished consultation process.",
  path: "/buy",
});

export default function BuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Buy in San Francisco"
        title="Confident buying strategy in a competitive city."
        description="From neighborhood fit to offer preparation, William helps buyers move with clarity, timing, and local insight."
        actions={
          <Button asChild size="lg">
            <a href="#buyer-form">Book a buyer consultation</a>
          </Button>
        }
      />

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl text-[#10243d]">Buyer process overview</h2>
              <p className="mt-4 leading-8 text-[#51606f]">
                Start with a strategy call, refine neighborhood priorities, coordinate financing,
                and move through search and offer execution with a clear step-by-step process.
              </p>
            </section>
            <section>
              <h2 className="text-3xl text-[#10243d]">Neighborhood guidance</h2>
              <p className="mt-4 leading-8 text-[#51606f]">
                The right San Francisco move depends on more than budget. William helps buyers weigh
                block feel, commute, home type, lifestyle, and long-term resale tradeoffs.
              </p>
            </section>
            <section>
              <h2 className="text-3xl text-[#10243d]">Financing and preapproval</h2>
              <p className="mt-4 leading-8 text-[#51606f]">
                Before touring seriously, buyers should understand approval status, closing costs,
                cash positioning, and what level of competitiveness they can support.
              </p>
            </section>
            <section>
              <h2 className="text-3xl text-[#10243d]">Common mistakes to avoid</h2>
              <ul className="mt-4 space-y-3 leading-7 text-[#51606f]">
                <li>Underestimating how block-by-block tradeoffs affect value.</li>
                <li>Starting tours before financing and criteria are organized.</li>
                <li>Overfocusing on list price instead of total competitive landscape.</li>
              </ul>
            </section>
          </div>

          <div id="buyer-form">
            <LeadForm
              variant="buyer"
              sourcePage="/buy"
              title="Buyer consultation form"
              description="Share your goals and William will follow up with a tailored plan."
              submitLabel="Submit buyer consultation"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-4xl">
          <h2 className="text-3xl text-[#10243d]">Buyer FAQ</h2>
          <div className="mt-6">
            <FAQList items={HOME_FAQS} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Need a local perspective before you start touring?"
        description="Book a consultation to map neighborhood fit, timing, and financing priorities."
      />
    </>
  );
}
