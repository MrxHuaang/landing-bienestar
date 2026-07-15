import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Marquee from "@/components/ui/Marquee";
import Button from "@/components/ui/Button";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Magnetic from "@/components/ui/Magnetic";
import {
  UserIcon,
  MonitorIcon,
  GroupIcon,
  CheckIcon,
  GiftIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { social, WHATSAPP_COMMUNITY_URL } from "@/lib/config";

type Service = {
  key: string;
  title: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  Icon: typeof UserIcon;
  cta: { kind: "whatsapp"; intent: "individual" | "online" } | { kind: "community" };
  badge?: string;
};

const services: Service[] = [
  {
    key: "individual",
    title: "Acompañamiento presencial",
    shortDesc: "Sesiones personalizadas para abordar tus necesidades específicas.",
    description:
      "Sesiones personalizadas donde trabajamos juntos para abordar tus preocupaciones específicas y alcanzar tus objetivos de bienestar emocional.",
    benefits: [
      "Atención completamente personalizada",
      "Espacio confidencial y seguro",
      "Flexibilidad de horarios",
      "El acompañamiento puede ser a domicilio",
    ],
    Icon: UserIcon,
    cta: { kind: "whatsapp", intent: "individual" },
  },
  {
    key: "online",
    title: "Acompañamiento Online",
    shortDesc: "Sesiones virtuales con la misma calidad que las presenciales.",
    description:
      "Accede a acompañamiento de calidad desde la comodidad de tu hogar. Las sesiones online mantienen la misma efectividad y confidencialidad que las presenciales.",
    benefits: [
      "Ahorro de tiempo en desplazamientos",
      "Accesibilidad desde cualquier ubicación",
      "Plataforma segura y confidencial",
      "Atención desde cualquier parte del mundo",
    ],
    Icon: MonitorIcon,
    cta: { kind: "whatsapp", intent: "online" },
  },
  {
    key: "talleres",
    title: "Talleres Online",
    shortDesc: "Aprende herramientas prácticas en grupo para tu crecimiento personal.",
    description:
      "Únete a nuestra comunidad de talleres online donde aprenderás técnicas de bienestar emocional, manejo del estrés y crecimiento personal en un ambiente grupal.",
    benefits: [
      "Aprendizaje en comunidad",
      "Herramientas prácticas",
      "Precios accesibles",
      "Interacción con otros participantes",
    ],
    Icon: GroupIcon,
    cta: { kind: "community" },
    badge: "Nuevo",
  },
];

const socials = [
  { href: social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: social.tiktok, label: "TikTok", Icon: TikTokIcon },
  { href: social.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
];

export default function Services() {
  return (
    <section id="services" className="section-y relative overflow-hidden px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Servicios"
          title="Mis Servicios"
          subtitle="Descubre cómo puedo ayudarte a mejorar tu bienestar emocional"
        />
      </div>

      <div className="my-12">
        <Marquee items={["Bienestar Emocional", "Crecimiento Personal", "Equilibrio Mental"]} />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Servicios como filas indexadas */}
        <div>
          {services.map(({ key, title, shortDesc, description, benefits, Icon, cta, badge }, i) => (
            <Reveal key={key}>
              <article className="rule row-bar group grid gap-6 py-9 transition-colors duration-300 hover:bg-paper/40 md:grid-cols-12 md:px-4">
                <div className="md:col-span-1">
                  <span className="index text-2xl text-accent">
                    S{String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="min-w-0 md:col-span-4">
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-deep transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-h2 w-full min-w-0 break-words text-ink">{title}</h3>
                    {badge && (
                      <span className="label-sm shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-accent-deep">
                        {badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-ink-soft">{shortDesc}</p>
                </div>

                <div className="min-w-0 md:col-span-5">
                  <p className="text-sm leading-relaxed text-muted">{description}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink-soft">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-start md:col-span-2 md:justify-end">
                  {cta.kind === "whatsapp" ? (
                    <WhatsAppButton intent={cta.intent} size="sm" variant="glass">
                      Escribir
                    </WhatsAppButton>
                  ) : (
                    <Button href={WHATSAPP_COMMUNITY_URL} variant="glass" size="sm">
                      <GroupIcon className="h-[1.15em] w-[1.15em]" />
                      Unirme
                    </Button>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
          <div className="rule" />
        </div>

        {/* Banner primera sesión gratis — glass */}
        <Reveal className="mt-16">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="label inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-accent-deep">
                  <GiftIcon className="h-4 w-4" />
                  Oferta especial
                </span>
                <h3 className="text-h1 mt-5 text-ink">
                  Primera sesión <span className="text-accent">¡GRATIS!</span>
                </h3>
                <p className="mt-3 max-w-lg text-ink-soft">
                  Da el primer paso hacia tu bienestar emocional. Agenda una sesión de
                  valoración sin compromiso.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Sin costo", "Online"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper/60 px-3 py-1.5 text-sm font-medium text-ink-soft"
                    >
                      <CheckIcon className="h-4 w-4 text-accent-deep" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <WhatsAppButton intent="consulta" size="lg">
                Agendar sesión gratis
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>

        {/* Redes sociales */}
        <div id="social" className="mt-20">
          <Reveal className="rule flex flex-col gap-6 pt-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="label text-muted">[ Redes sociales ]</span>
              <h3 className="text-h2 mt-2 text-ink">Sígueme en redes sociales</h3>
              <p className="mt-2 max-w-md text-muted">
                Encuentra consejos, reflexiones y contenido sobre bienestar emocional y
                psicología en mis redes sociales
              </p>
            </div>
            <div className="flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <Magnetic key={label} strength={0.4}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="glass flex h-14 w-14 items-center justify-center rounded-2xl text-ink transition-colors duration-300 hover:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
