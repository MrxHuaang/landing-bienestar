"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "./icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/** Botón flotante persistente de WhatsApp; aparece tras bajar un poco. */
export default function WhatsAppFloating() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={buildWhatsAppUrl("general")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escríbeme por WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-5 right-5 z-[900] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.8)] sm:bottom-7 sm:right-7"
        >
          {!reduce && (
            <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/50 [animation-duration:2.4s]" />
          )}
          <WhatsAppIcon className="relative h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
