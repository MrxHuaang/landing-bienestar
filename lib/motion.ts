import type { Variants } from "framer-motion";

/* ---------- Tokens de motion (espejo de @theme en globals.css) ---------- */

/** Duraciones en segundos (uso GSAP/Framer). CSS usa --dur-*. */
export const DUR = {
  fast: 0.15,
  base: 0.3,
  slow: 0.5,
  hero: 0.9,
} as const;

/** Easings como cubic-bezier arrays (Framer) y strings (GSAP). */
export const EASE = [0.22, 1, 0.36, 1] as const; // out-quint
export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
/** Equivalentes GSAP. */
export const GSAP_EASE = "power3.out";
export const GSAP_EASE_EXPO = "expo.out";

/** Gate para coreografías JS: true si el usuario prefiere menos movimiento. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Contenedor con stagger para revelar hijos en secuencia. */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Aparición desde abajo con desenfoque suave. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** viewport compartido para whileInView. */
export const inViewOnce = { once: true, margin: "-80px" } as const;
