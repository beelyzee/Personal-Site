import { SITE_CONFIG } from "@/data/site";
import { Badge } from "@/components/ui/badge";

export default function BadgeRow() {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Trust highlights">
      {SITE_CONFIG.trustBadges.map((badge) => (
        <li key={badge}>
          <Badge variant="warm">{badge}</Badge>
        </li>
      ))}
    </ul>
  );
}

