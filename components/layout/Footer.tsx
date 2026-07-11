"use client";

import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/icons";
import { navLinks, social, contact } from "@/lib/config";
import { scrollToHash } from "@/lib/scroll";

const socials = [
  { href: social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: social.tiktok, label: "TikTok", Icon: TikTokIcon },
  { href: social.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden px-5 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rule grid gap-10 pt-10 md:grid-cols-12">
          {/* Marca */}
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-bold text-ink">
              Angela <span className="text-accent">Sophia</span>
            </p>
            <p className="mt-3 max-w-xs text-muted">
              Psicóloga comprometida con tu bienestar emocional, ofreciendo un espacio
              seguro y confidencial.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors hover:text-accent"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <nav className="md:col-span-4">
            <span className="label text-muted">[ Navegación ]</span>
            <ul className="mt-4">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHash(link.href);
                    }}
                    className="rule group flex items-center gap-3 py-2.5 text-ink-soft transition-colors hover:text-accent"
                  >
                    <span className="index text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto directo */}
          <div className="md:col-span-3">
            <span className="label text-muted">[ Contacto ]</span>
            <ul className="mt-4 space-y-2 text-ink-soft">
              <li>
                <a
                  href={social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {contact.email}
                </a>
              </li>
              <li className="text-muted">{contact.location}</li>
            </ul>
          </div>
        </div>

        {/* Wordmark gigante */}
        <div className="mt-12 overflow-hidden">
          <p className="text-mega whitespace-nowrap text-ink/[0.07] select-none">
            Angela Sophia
          </p>
        </div>

        {/* Créditos */}
        <div className="rule flex flex-col items-start justify-between gap-2 py-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {year} Diseño y desarrollo por{" "}
            <a
              href="https://www.instagram.com/juan.ordonezz/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink transition-colors hover:text-accent"
            >
              Juan Ordóñez — Desarrollador Web
            </a>
          </p>
          <p>
            Diseñado con <span className="text-accent">❤</span> para un mejor bienestar
            emocional
          </p>
        </div>
      </div>
    </footer>
  );
}
