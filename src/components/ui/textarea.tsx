import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-28 w-full rounded-xl border border-[#d8ccba] bg-white px-3 py-2 text-base text-[#1f1f1f] shadow-sm outline-none transition-colors placeholder:text-[#8c8276] focus-visible:border-[#0d3a4f] focus-visible:ring-2 focus-visible:ring-[#0d3a4f]/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };

