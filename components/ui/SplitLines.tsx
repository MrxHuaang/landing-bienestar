"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DUR, GSAP_EASE_EXPO } from "@/lib/motion";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Retraso en segundos antes del reveal. */
  delay?: number;
  /** true: anima al montar (hero). false: anima al entrar en viewport. */
  immediate?: boolean;
};

/**
 * Titular con reveal por líneas: SplitText parte el texto, enmascara cada
 * línea y GSAP las sube en cascada (yPercent 110 → 0, expo.out).
 * Con reduced-motion no se parte nada: el texto queda visible tal cual.
 */
export default function SplitLines({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  immediate = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger, SplitText);
    let split: SplitText | undefined;
    let tween: gsap.core.Tween | undefined;

    // Partir después de cargar fuentes: líneas correctas con Bricolage.
    const run = () => {
      if (!el.isConnected) return;
      split = SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
      });
      tween = gsap.from(split.lines, {
        yPercent: 112,
        duration: DUR.hero,
        ease: GSAP_EASE_EXPO,
        stagger: 0.09,
        delay,
        ...(immediate
          ? {}
          : {
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
              },
            }),
      });
    };

    document.fonts.ready.then(run);

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
      split?.revert();
    };
  }, [delay, immediate]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  );
}
