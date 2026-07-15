"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  items: string[];
  className?: string;
};

/**
 * Cinta de texto en loop continuo, reactiva a la velocidad de scroll:
 * acelera al bajar rápido y retrocede al subir. Dos copias del contenido
 * hacen el loop sin costura.
 */
export default function Marquee({ items, className = "" }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = wrapRef.current?.querySelector<HTMLElement>(".marquee-track");
    if (!track) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const loop = gsap.timeline({ repeat: -1 });
      loop.fromTo(
        track,
        { xPercent: 0 },
        { xPercent: -50, duration: 26, ease: "none" },
      );
      // Arrancar lejos del cero permite reproducir en reversa sin tope.
      loop.totalTime(loop.duration() * 500);

      let settle: gsap.core.Tween | undefined;
      const st = ScrollTrigger.create({
        onUpdate(self) {
          const boost = gsap.utils.clamp(-3.5, 3.5, self.getVelocity() / 350);
          if (Math.abs(boost) > 0.15) {
            loop.timeScale(1 + boost);
            settle?.kill();
            settle = gsap.to(loop, {
              timeScale: 1,
              duration: 0.8,
              ease: "power2.out",
            });
          }
        },
      });

      return () => {
        st.kill();
        settle?.kill();
      };
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  const phrase = (
    <span className="flex shrink-0 items-center gap-6 px-3">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-6">
          <span className="text-h1 font-display text-ink">{item}</span>
          <span className="text-accent" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      ref={wrapRef}
      className={`relative flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}
      role="presentation"
    >
      <div className="marquee-track">
        {phrase}
        <span aria-hidden className="contents">
          {phrase}
        </span>
      </div>
    </div>
  );
}
