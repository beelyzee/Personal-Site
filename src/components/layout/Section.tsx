import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-14 md:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-3xl space-y-3">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6b4a]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-balance font-serif text-3xl tracking-tight text-[#1f1f1f] md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base leading-7 text-[#5a5a5a]">{description}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

