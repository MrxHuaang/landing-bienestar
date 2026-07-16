"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import { ArrowDownIcon } from "@/components/ui/icons";
import { scrollToHash } from "@/lib/scroll";
import { DUR, EASE, GSAP_EASE_EXPO } from "@/lib/motion";

const lines = [
  { text: "Bienvenido a un", accent: false, drift: -5 },
  { text: "encuentro", accent: false, drift: 7 },
  { text: "contigo mismo", accent: true, drift: -4 },
];

const enfoques = [
  "Acompañamiento presencial",
  "Acompañamiento online",
  "Talleres online",
];

function TiltPortrait() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 22 });
  const springY = useSpring(y, { stiffness: 220, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ rotate: -2 }}
      whileHover={{ rotate: 0 }}
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="hero-portrait relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(20,32,26,0.5)]">
        <Image
          src="/images/angela.jpg"
          alt="Ángela Sophia, psicóloga en Pereira"
          fill
          priority
          sizes="(max-width: 1024px) 80vw, 40vw"
          className="hero-portrait-img object-cover object-center"
        />
        <div className="glass absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl px-4 py-2.5">
          <span className="label-sm text-ink">Angela Sophia</span>
          <span className="index text-xs text-accent">E01</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Coreografía de entrada — una sola timeline bien ensayada.
     useLayoutEffect setea estados iniciales antes del primer paint (sin flash). */
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: GSAP_EASE_EXPO } });

      tl.from(".hero-rule", { scaleX: 0, transformOrigin: "left", duration: 0.9 })
        .from(
          ".hero-meta",
          { yPercent: 120, duration: 0.6, stagger: 0.06 },
          "-=0.55",
        )
        .from(
          ".hero-line-inner",
          { yPercent: 112, duration: DUR.hero, stagger: 0.11 },
          "-=0.35",
        )
        .fromTo(
          ".hero-portrait",
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.05 },
          "-=0.75",
        )
        .fromTo(
          ".hero-portrait-img",
          { scale: 1.35 },
          { scale: 1, duration: 1.35, ease: "power3.out" },
          "<",
        );

      /* Scroll: parallax vertical + deriva horizontal por línea. */
      gsap.to(".hero-portrait", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(".hero-copy", {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.utils.toArray<HTMLElement>(".hero-line").forEach((el) => {
        gsap.to(el, {
          xPercent: Number(el.dataset.drift ?? 0),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-5 pt-28 pb-10 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Meta row — la regla se dibuja, las etiquetas suben enmascaradas */}
        <div className="hero-rule rule" />
        <div className="flex items-center justify-between gap-4 pt-4 text-muted">
          <span className="line-mask">
            <span className="hero-meta label block">
              Psicóloga · Pereira [Colombia]
            </span>
          </span>
          <span className="line-mask hidden sm:block">
            <span className="hero-meta label block">Bienestar emocional</span>
          </span>
        </div>

        {/* Titular full-width, cascada de líneas enmascaradas */}
        <h1 className="text-mega mt-8 min-w-0 text-ink">
          {lines.map((l, i) => (
            <span
              key={i}
              data-drift={l.drift}
              className="hero-line line-mask min-w-0 sm:whitespace-nowrap"
            >
              <span
                className={`hero-line-inner block ${l.accent ? "text-accent" : ""}`}
              >
                {l.text}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <div className="hero-copy order-2 min-w-0 lg:order-1 lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.15, ease: EASE }}
              className="text-lead max-w-xl text-ink-soft"
            >
              Soy <span className="font-medium text-ink">Angela Sophia</span>, psicóloga
              con un enfoque innovador en acompañamiento. Te acompaño en tu camino hacia
              el <span className="font-medium text-ink">bienestar emocional</span> con
              una perspectiva fresca y métodos actualizados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.28, ease: EASE }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Magnetic>
                <WhatsAppButton intent="consulta" size="lg">
                  Agendar sesión
                </WhatsAppButton>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button
                  variant="outline"
                  size="lg"
                  shimmer={false}
                  onClick={() => scrollToHash("#about")}
                >
                  Conocer más
                  <ArrowDownIcon className="h-[1.1em] w-[1.1em]" />
                </Button>
              </Magnetic>
            </motion.div>

            {/* Lista indexada de enfoques */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.45 }}
              className="mt-12 max-w-md"
            >
              <li className="label mb-2 text-muted">Acompañamiento —</li>
              {enfoques.map((item, i) => (
                <li
                  key={item}
                  className="rule flex items-center gap-4 py-2.5 text-ink-soft"
                >
                  <span className="index text-sm text-accent">
                    E{String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Retrato: clip-reveal en la entrada + tilt 3D al cursor */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <TiltPortrait />
          </div>
        </div>
      </div>
    </section>
  );
}
