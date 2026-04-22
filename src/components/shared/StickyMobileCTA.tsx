"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 280);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) {
    return null;
  }

  const content = (
    <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
      <Button asChild size="lg" className="w-full shadow-[0_15px_40px_rgba(16,36,61,0.24)]">
        <Link href="/book-consultation">{SITE.consultationCta}</Link>
      </Button>
    </div>
  );

  if (reduceMotion) {
    return content;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      {content}
    </motion.div>
  );
}

