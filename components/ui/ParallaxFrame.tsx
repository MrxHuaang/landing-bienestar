"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  children: ReactNode;
  className?: string;
  /** Desplazamiento vertical total en % (se reparte -amount/2 → +amount/2). */
  amount?: number;
};

/**
 * Marco con parallax interno: el contenido (una Image fill) se escala un
 * poco y se desplaza en vertical mientras el marco cruza el viewport.
 * El marco debe tener overflow-hidden y aspect ratio propios.
 */
export default function ParallaxFrame({ children, className, amount = 14 }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".parallax-inner",
        { yPercent: -amount / 2 },
        {
          yPercent: amount / 2,
          ease: "none",
          scrollTrigger: {
            trigger: frameRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        },
      );
    }, frameRef);

    return () => ctx.revert();
  }, [amount]);

  return (
    <div ref={frameRef} className={className}>
      <div
        className="parallax-inner absolute inset-0 will-change-transform"
        style={{ scale: 1 + amount / 100 }}
      >
        {children}
      </div>
    </div>
  );
}
