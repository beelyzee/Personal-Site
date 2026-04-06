import Section from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const REASONS = [
  {
    title: "San Francisco Local Focus",
    body: "Guidance tailored to local neighborhoods, common property types, and buyer timing in SF.",
  },
  {
    title: "Direct Communication",
    body: "You work directly with William for fast updates, clean documentation, and clear next steps.",
  },
  {
    title: "Clear Guidance for Buyers",
    body: "Understand what you can afford, what to prepare, and how to stay competitive without confusion.",
  },
  {
    title: "Tech-Forward and Detail-Oriented",
    body: "Analytical support from someone with UCLA Computer Science and Business Economics training.",
  },
] as const;

export default function WhyWilliam() {
  return (
    <Section
      id="why-william"
      eyebrow="Why Work With William"
      title="A local, analytical partner for your San Francisco purchase loan"
      description="Simple guidance, responsive communication, and numbers you can trust."
      className="bg-white/60"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {REASONS.map((reason) => (
          <Card key={reason.title}>
            <CardHeader>
              <CardTitle>{reason.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-[#5b5b5b]">{reason.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

