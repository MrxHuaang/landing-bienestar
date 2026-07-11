"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Config global de Framer Motion. `reducedMotion="user"` desactiva
 * automáticamente transform/layout para quien prefiere menos movimiento
 * (solo anima opacidad), manteniendo el mismo markup en server y cliente.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
