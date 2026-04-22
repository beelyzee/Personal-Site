import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "About William Zhang",
  description:
    "Meet William Zhang, a San Francisco real-estate advisor focused on a premium, high-trust experience for local buyers and sellers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About William"
        title="Local advisor with finance, technology, and transaction depth."
        description="William Zhang brings a high-trust San Francisco strategy built on UCLA academics, fixed-income analysis, consulting rigor, and frontline real-estate execution."
      />
      <section className="py-16">
        <Container className="max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="rounded-2xl border-[#c5d3e1]">
              <CardHeader>
                <CardTitle>Academic Foundation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-[#3c4f63]">
                <p>UCLA double major: B.S. Computer Science and B.A. Business Economics.</p>
                <p>
                  Real estate finance and business-law context supports clearer decisions for buyers
                  and sellers.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-[#c5d3e1]">
              <CardHeader>
                <CardTitle>Fixed Income Perspective</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-[#3c4f63]">
                <p>
                  PIMCO account-analysis experience built a deeper understanding of rates,
                  inflation, and credit-sensitive strategy.
                </p>
                <p>
                  That market perspective translates directly to residential-loan planning and
                  borrower positioning.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-[#c5d3e1]">
              <CardHeader>
                <CardTitle>Deloitte Consulting Rigor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-[#3c4f63]">
                <p>
                  Experience at Deloitte sharpened execution, communication, and analytical
                  discipline on high-stakes projects.
                </p>
                <p>
                  Clients benefit from clear process management, practical recommendations, and fast
                  follow-through.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-[#c5d3e1]">
              <CardHeader>
                <CardTitle>Real Estate Depth</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-[#3c4f63]">
                <p>
                  Active experience across representation and financing gives William a complete
                  view of the transaction.
                </p>
                <p>
                  The focus is always clean strategy, responsive support, and stronger execution in
                  San Francisco.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
      <CtaBanner
        title="Ready to talk through your next move?"
        description="Book a consultation and get a tailored San Francisco game plan."
      />
    </>
  );
}
