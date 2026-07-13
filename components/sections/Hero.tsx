"use client";

import { useEffect, useRef } from "react";
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
import { ArrowDownIcon } from "@/components/ui/icons";
import { scrollToHash } from "@/lib/scroll";

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
      initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: -2 }}
      whileHover={{ rotate: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="hero-portrait relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(20,32,26,0.5)]">
        <Image
          src="/images/angela.jpg"
          alt="Ángela Sophia, psicóloga en Pereira"
          fill
          priority
          sizes="(max-width: 1024px) 80vw, 40vw"
          className="object-cover object-center"
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

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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
        const drift = Number(el.dataset.drift ?? 0);
        gsap.to(el, {
          xPercent: drift,
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

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const line = {
    hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-5 pt-28 pb-10 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rule flex items-center justify-between gap-4 pt-4 text-muted"
        >
          <span className="label">Psicóloga · Pereira [Colombia]</span>
          <span className="label hidden sm:inline">Bienestar emocional</span>
          <span className="label text-accent">©2026</span>
        </motion.div>

        {/* Titular a todo lo ancho, con deriva horizontal por línea */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-mega mt-8 min-w-0 text-ink"
        >
          {lines.map((l, i) => (
            <motion.div
              key={i}
              variants={line}
              data-drift={l.drift}
              className={`hero-line min-w-0 sm:whitespace-nowrap ${l.accent ? "text-accent" : ""}`}
            >
              {l.text}
            </motion.div>
          ))}
        </motion.h1>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <div className="hero-copy order-2 min-w-0 lg:order-1 lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
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
              transition={{ duration: 0.7, delay: 0.82 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <WhatsAppButton intent="consulta" size="lg">
                Agendar sesión
              </WhatsAppButton>
              <Button
                variant="outline"
                size="lg"
                shimmer={false}
                onClick={() => scrollToHash("#about")}
              >
                Conocer más
                <ArrowDownIcon className="h-[1.1em] w-[1.1em]" />
              </Button>
            </motion.div>

            {/* Lista indexada de enfoques */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
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

          {/* Retrato con tilt 3D */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <TiltPortrait />
          </div>
        </div>
      </div>

      {/* Scroll */}
      <motion.button
        type="button"
        onClick={() => scrollToHash("#about")}
        aria-label="Bajar a Sobre mí"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mx-auto mt-10 flex w-full max-w-6xl items-center justify-end gap-2 text-muted"
      >
        <span className="label">Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownIcon className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
