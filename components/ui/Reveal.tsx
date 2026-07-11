"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, inViewOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Retraso en segundos. */
  delay?: number;
  variants?: Variants;
};

/**
 * Revela su contenido al entrar en viewport (fade + rise).
 * Con movimiento reducido, aparece sin animación.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
