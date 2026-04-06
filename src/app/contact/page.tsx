import { CalendarDays, Mail, MapPin } from "lucide-react";

import { SITE_CONFIG } from "@/data/site";
import Section from "@/components/layout/Section";
import ContactForm from "@/components/contact/ContactForm";
import Disclaimer from "@/components/shared/Disclaimer";
import PhoneCTA from "@/components/shared/PhoneCTA";
import QRCodeCard from "@/components/shared/QRCodeCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <Section className="pb-10 pt-16 md:pt-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6b4a]">
            Contact
          </p>
          <h1 className="text-balance font-serif text-4xl leading-tight text-[#1f1f1f] md:text-5xl">
            Talk directly with William about your San Francisco purchase loan
          </h1>
          <p className="text-lg leading-8 text-[#5b5b5b]">
            Call now for the fastest response, or submit your contact details and William will
            follow up.
          </p>
          <div className="flex flex-wrap gap-3">
            <PhoneCTA size="lg" />
            <Button asChild variant="outline" size="lg">
              <a href={`mailto:${SITE_CONFIG.contactEmail}`}>
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Email William
              </a>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="space-y-5">
            <Card>
              <CardHeader>
                <CardTitle>Service details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[#4e4e4e]">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#8b6b4a]" aria-hidden="true" />
                  Service area: {SITE_CONFIG.serviceArea}
                </p>
                <p className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 text-[#8b6b4a]" aria-hidden="true" />
                  {SITE_CONFIG.contactEmail}
                </p>
                <Button asChild variant="secondary">
                  <a href={SITE_CONFIG.bookingUrl} target="_blank" rel="noopener noreferrer">
                    <CalendarDays className="mr-2 h-4 w-4" aria-hidden="true" />
                    Optional Booking Link
                  </a>
                </Button>
              </CardContent>
            </Card>

            <QRCodeCard />
            <Disclaimer />
          </div>
        </div>
      </Section>
    </>
  );
}

