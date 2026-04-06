import Section from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Quick estimate",
    body: "Start with a Buying Power Estimate to understand your likely range before touring homes.",
  },
  {
    step: "2",
    title: "Strategy call",
    body: "Talk with William about goals, timeline, and a financing approach aligned to your situation.",
  },
  {
    step: "3",
    title: "Full application and document review",
    body: "Submit documents and complete a full review to prepare for competitive offers.",
  },
  {
    step: "4",
    title: "Preapproval and offer-ready financing plan",
    body: "Move forward with a clear, lender-reviewed path that supports your offer strategy.",
  },
] as const;

export default function ProcessSteps() {
  return (
    <Section
      id="process"
      eyebrow="San Francisco Purchase Loan Process"
      title="A simple four-step path from estimate to offer-ready financing"
    >
      <ol className="grid gap-5 md:grid-cols-2">
        {PROCESS_STEPS.map((item) => (
          <li key={item.step}>
            <Card className="h-full">
              <CardHeader>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b6b4a]">
                  Step {item.step}
                </p>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-[#5b5b5b]">{item.body}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}

