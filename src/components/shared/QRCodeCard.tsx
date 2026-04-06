import Image from "next/image";
import { QrCode } from "lucide-react";

import { SITE_CONFIG } from "@/data/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type QRCodeCardProps = {
  title?: string;
  description?: string;
};

export default function QRCodeCard({
  title = "Scan to start your buying power estimate",
  description = "Open this website instantly on your phone.",
}: QRCodeCardProps) {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    SITE_CONFIG.siteUrl,
  )}`;

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <QrCode className="h-4 w-4 text-[#0d3a4f]" aria-hidden="true" />
          {title}
        </CardTitle>
        <p className="text-sm text-[#5b5b5b]">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Image
          src={qrCodeUrl}
          alt="QR code linking to the website"
          width={160}
          height={160}
          className="rounded-xl border border-[#e0d4c3] bg-white p-2"
          unoptimized
        />
        <Button asChild variant="outline" className="w-full">
          <a
            href={SITE_CONFIG.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="qr_code_scan_cta_click"
          >
            Open Website
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
