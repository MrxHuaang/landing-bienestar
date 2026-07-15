"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";
import SplitLines from "./SplitLines";

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
};

/**
 * Encabezado editorial: la regla hairline se dibuja al entrar, índice y
 * etiqueta suben, y el título display se revela por líneas enmascaradas.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  className = "",
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".sh-rule", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 88%", once: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className={className}>
      <div className="sh-rule rule" />
      <div className="grid gap-x-6 gap-y-8 pt-6 md:grid-cols-12">
        <Reveal className="flex items-start gap-4 md:col-span-4">
          <span className="index text-2xl leading-none text-accent">{index}</span>
          <span className="label mt-1 text-muted">{eyebrow}</span>
        </Reveal>
        <div className="min-w-0 md:col-span-8">
          <SplitLines as="h2" className="text-display text-ink">
            {title}
          </SplitLines>
          {subtitle && (
            <Reveal delay={0.25}>
              <p className="text-lead mt-5 max-w-xl text-muted">{subtitle}</p>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
