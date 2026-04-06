import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#0d3a4f] text-white shadow-sm hover:bg-[#114d68] focus-visible:ring-[#114d68]",
        secondary:
          "bg-[#efe3cf] text-[#3b2a1d] hover:bg-[#e5d6bf] focus-visible:ring-[#8b6b4a]",
        outline:
          "border border-[#c9bba6] bg-white text-[#1f1f1f] hover:bg-[#f7f1e6] focus-visible:ring-[#8b6b4a]",
        ghost:
          "text-[#0d3a4f] hover:bg-[#e8f0f4] focus-visible:ring-[#114d68]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

