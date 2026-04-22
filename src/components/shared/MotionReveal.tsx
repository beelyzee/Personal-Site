"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MotionRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function MotionReveal({
  children,
  delay = 0,
  className,
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

