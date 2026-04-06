import { PhoneCall } from "lucide-react";

import { SITE_CONFIG } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type PhoneCTAProps = {
  label?: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  analyticsEvent?: string;
};

export default function PhoneCTA({
  label,
  variant = "default",
  size = "default",
  className,
  analyticsEvent = "phone_click",
}: PhoneCTAProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn(className)}>
      <a
        href={`tel:${SITE_CONFIG.phoneTel}`}
        data-analytics-event={analyticsEvent}
        aria-label={`Call ${SITE_CONFIG.loanOfficerName}`}
      >
        {size !== "icon" && <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />}
        {size === "icon" ? <PhoneCall className="h-4 w-4" aria-hidden="true" /> : label ?? SITE_CONFIG.ctaLabels.callNow}
      </a>
    </Button>
  );
}

