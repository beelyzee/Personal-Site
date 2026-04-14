import Section from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const REASONS = [
  {
    title: "San Francisco Local Focus",
    body: "Strategy shaped for SF neighborhoods, timelines, and offer pace.",
  },
  {
    title: "Direct Communication",
    body: "You work directly with William for fast, clear updates.",
  },
  {
    title: "Analytical and Practical",
    body: "Clear numbers and practical steps from estimate to preapproval review.",
  },
] as const;

export default function WhyWilliam() {
  return (
    <Section
      id="why-william"
      eyebrow="Why Work With William"
      title="Simple, trusted guidance"
      description="Built for San Francisco buyers who want clarity and speed."
      className="bg-white/60"
    >
      <div className="grid gap-5 md:grid-cols-3">
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
