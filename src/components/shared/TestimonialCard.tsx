import { Testimonial } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full border-[#d6dde4] bg-white">
      <CardContent className="pt-6">
        <p className="text-lg leading-8 text-[#10243d]">&ldquo;{testimonial.quote}&rdquo;</p>
        <div className="mt-5">
          <p className="font-semibold text-[#10243d]">{testimonial.name}</p>
          <p className="text-sm text-[#687585]">{testimonial.context}</p>
        </div>
      </CardContent>
    </Card>
  );
}
