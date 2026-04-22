import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for William Zhang Real Estate.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How this site handles contact information."
        description="This draft policy should be reviewed and finalized with your brokerage or legal advisor before launch."
      />
      <section className="py-16">
        <Container className="max-w-4xl space-y-6 leading-8 text-[#51606f]">
          <p>
            This website collects information you submit through forms, including name, email,
            phone, property details, and general inquiry context, for the purpose of responding to your request.
          </p>
          <p>
            Submitted data may be stored in connected backend systems such as Supabase and may be
            used to support consultations, follow-up communication, and internal service operations.
          </p>
          <p>
            Replace this draft with brokerage-approved privacy language before public launch.
          </p>
        </Container>
      </section>
    </>
  );
}

