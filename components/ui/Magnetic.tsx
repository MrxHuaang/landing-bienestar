"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Fuerza de atracción (0–1). */
  strength?: number;
  className?: string;
};

/**
 * Imanta su contenido hacia el cursor (agencia clásica). Solo actúa en
 * dispositivos con hover real; en touch y reduced-motion es un div inerte
 * (MotionConfig reducedMotion="user" anula los transforms).
 */
export default function Magnetic({ children, strength = 0.3, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.3 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
