"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Barra fina de progreso de lectura, fija en el borde superior. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[1100] h-[3px] origin-left bg-accent"
    />
  );
}
