import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Magnetic from "@/components/ui/Magnetic";
import { InstagramIcon, TikTokIcon } from "@/components/ui/icons";
import { contact, social } from "@/lib/config";
import { scaleIn } from "@/lib/motion";

const details = [
  { label: "Ubicación", value: contact.location },
  { label: "Modalidad", value: "Presencial y online" },
];

const socials = [
  { href: social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: social.tiktok, label: "TikTok", Icon: TikTokIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="section-y relative overflow-hidden px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="Contacto"
          title="Da el primer paso hacia tu bienestar"
        />

        <Reveal className="mt-14" variants={scaleIn}>
          <div className="glass-dark relative overflow-hidden rounded-[2rem] p-8 text-bone sm:p-12">
            <div className="relative grid gap-12 lg:grid-cols-2">
              {/* Izquierda: CTA */}
              <div>
                <span className="label text-accent-soft">[ Escríbeme ]</span>
                <h3 className="text-h1 mt-4 text-bone">
                  Estoy aquí para acompañarte
                </h3>
                <p className="mt-4 max-w-md text-bone/75">
                  Escríbeme por WhatsApp y agenda tu primera sesión de valoración sin
                  compromiso. Sin costo, sin presión.
                </p>
                <div className="mt-8">
                  <Magnetic>
                    <WhatsAppButton intent="consulta" size="lg">
                      Escríbeme por WhatsApp
                    </WhatsAppButton>
                  </Magnetic>
                </div>
              </div>

              {/* Derecha: detalles indexados */}
              <div>
                {details.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className="grid grid-cols-12 items-baseline gap-3 border-t border-white/15 py-5"
                  >
                    <span className="index col-span-2 text-sm text-accent-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="label-sm col-span-3 text-bone/60">{label}</span>
                    <div className="col-span-7">
                      <span className="text-bone">{value}</span>
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-12 items-center gap-3 border-t border-white/15 py-5">
                  <span className="index col-span-2 text-sm text-accent-soft">
                    {String(details.length + 1).padStart(2, "0")}
                  </span>
                  <span className="label-sm col-span-3 text-bone/60">Redes</span>
                  <div className="col-span-7 flex gap-3">
                    {socials.map(({ href, label, Icon }) => (
                      <Magnetic key={label} strength={0.4}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-bone transition-colors hover:bg-white/20 hover:text-accent-soft"
                        >
                          <Icon className="h-[18px] w-[18px]" />
                        </a>
                      </Magnetic>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/15" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
