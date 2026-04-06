import { SITE_CONFIG } from "@/data/site";
import { cn } from "@/lib/utils";

type DisclaimerProps = {
  className?: string;
};

export default function Disclaimer({ className }: DisclaimerProps) {
  return (
    <p
      className={cn(
        "rounded-2xl border border-[#e4d7c4] bg-[#fff9ef] px-4 py-3 text-sm leading-6 text-[#5a4631]",
        className,
      )}
    >
      {SITE_CONFIG.estimateDisclaimer}
    </p>
  );
}

