import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutWilliam() {
  return (
    <Section
      id="about"
      eyebrow="About William"
      title="Local insight, analytical thinking, and practical support"
      className="bg-white/60"
    >
      <Card className="max-w-4xl">
        <CardContent className="space-y-5 pt-6">
          <p className="text-base leading-8 text-[#383838]">
            William Zhang is a San Francisco-based loan officer at 5A Mortgage. He graduated from
            UCLA with degrees in Computer Science and Business Economics.
          </p>
          <p className="text-base leading-8 text-[#383838]">
            He brings a local, analytical, and client-focused approach to helping buyers navigate
            San Francisco purchase financing with confidence and clarity.
          </p>
          <p className="text-base leading-8 text-[#383838]">
            Based in Russian Hill near Lombard Street, he understands local market dynamics and
            helps buyers align financing strategy with real neighborhood opportunities.
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}
