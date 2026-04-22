import Link from "next/link";

import { Neighborhood } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type NeighborhoodCardProps = {
  neighborhood: Neighborhood;
};

export default function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  return (
    <Card className="h-full border-[#d5dde5] bg-white/95">
      <CardHeader>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7a61]">
          {neighborhood.featuredMetric}
        </p>
        <CardTitle className="text-2xl text-[#10243d]">{neighborhood.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="leading-7 text-[#536171]">{neighborhood.summary}</p>
        <Button asChild variant="outline">
          <Link href={`/neighborhoods/${neighborhood.slug}`}>Explore {neighborhood.name}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

