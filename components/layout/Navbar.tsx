"use client";

import { useEffect, useState, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";
import { navLinks } from "@/lib/config";
import { scrollToHash } from "@/lib/scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToHash(href);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[1000] px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass" : "border border-transparent"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => go(e, "#home")}
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-[0.7rem] text-white transition-transform duration-300 group-hover:rotate-12">
            AS
          </span>
          Angela Sophia
        </a>

        {/* Desktop — links con separador / */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-2 text-[0.95rem] text-muted">
            {navLinks.map((link, i) => (
              <Fragment key={link.href}>
                {i > 0 && <span className="text-line">/</span>}
                <a
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className="rounded-full px-1.5 py-1 font-medium transition-colors hover:text-accent"
                >
                  {link.name}
                </a>
              </Fragment>
            ))}
          </div>
          <WhatsAppButton intent="consulta" size="sm" className="ml-3">
            Agendar cita
          </WhatsAppButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink md:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl p-4 md:hidden"
          >
            <div className="flex flex-col divide-y divide-line/70">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className="flex items-center justify-between py-3.5 text-lg font-medium text-ink transition-colors hover:text-accent"
                >
                  {link.name}
                  <span className="index text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </div>
            <WhatsAppButton intent="consulta" size="lg" className="mt-4 w-full">
              Agendar cita
            </WhatsAppButton>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
