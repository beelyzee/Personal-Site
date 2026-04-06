import { ResourceItem } from "@/data/resources";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ResourceCardProps = {
  item: ResourceItem;
};

export default function ResourceCard({ item }: ResourceCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b6b4a]">
          {item.category}
        </p>
        <CardTitle className="text-xl">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm leading-7 text-[#5b5b5b]">{item.excerpt}</p>
        <p className="text-xs text-[#7a7369]">{item.readTime}</p>
      </CardContent>
    </Card>
  );
}

