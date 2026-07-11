import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Desplaza suavemente hasta un ancla (#id). Usa Lenis si está activo,
 * si no cae en scrollIntoView nativo (p. ej. con movimiento reducido).
 */
export function scrollToHash(href: string, offset = -72) {
  if (!href.startsWith("#")) return;
  const el = document.querySelector(href);
  if (!el) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(el as HTMLElement, { offset });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
