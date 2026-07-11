import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { HeartIcon, ShieldIcon, LockIcon, CheckIcon } from "@/components/ui/icons";
import { fadeUp } from "@/lib/motion";

const principles = [
  {
    title: "Empatía",
    description:
      "Comprendo tus emociones y experiencias desde una perspectiva respetuosa y sin juicios.",
    Icon: HeartIcon,
  },
  {
    title: "Integridad",
    description:
      "Me guío por principios éticos sólidos, actuando con coherencia entre pensamiento, emoción y conducta, siempre con el compromiso de velar por tu bienestar.",
    Icon: ShieldIcon,
  },
  {
    title: "Confidencialidad",
    description:
      "Tu privacidad es fundamental. Toda información compartida se mantiene bajo estricta confidencialidad.",
    Icon: LockIcon,
  },
];

const attributes = [
  { label: "Empatía", sub: "Enfoque personalizado" },
  { label: "Innovación", sub: "Técnicas actualizadas" },
  { label: "Compromiso", sub: "Con tu bienestar" },
];

const formacion = [
  "Licenciatura en Psicología · Universidad Católica de Pereira",
  "Formación continua en Terapia Cognitivo-Conductual",
  "Diplomado enfocado en consumo de Sustancias Psicoactivas (SPA) y conducta suicida",
];

export default function About() {
  return (
    <section id="about" className="section-y relative overflow-hidden px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          eyebrow="Sobre mí"
          title="Conoce más sobre mi trabajo"
        />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Retrato */}
          <Reveal variants={fadeUp} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/profile-image.png"
                  alt="Ángela Sophia, psicóloga profesional en Pereira, Risaralda"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="glass absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl px-4 py-2.5">
                  <span className="label-sm text-ink">Psicóloga · Pereira</span>
                  <span className="index text-xs text-accent">01</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Texto */}
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="text-h1 text-ink">
                Angela <span className="text-accent">Sophia</span>
              </h3>
              <p className="text-lead mt-6 text-ink-soft">
                Soy Angela, psicóloga profesional. Acompaño a personas como tú en el
                camino de conocerse, comprenderse y transformar su vida. Trabajo con
                herramientas terapéuticas basadas en la evidencia, con el objetivo de
                ayudarte a reconectar contigo, fortalecer tu bienestar emocional y
                mejorar tu calidad de vida.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Mi filosofía se centra en crear un espacio seguro donde puedas
                expresarte libremente, comprender tus patrones de pensamiento y
                desarrollar herramientas efectivas para gestionar tus emociones y
                alcanzar tus metas personales.
              </p>
            </Reveal>

            {/* Atributos */}
            <Reveal className="mt-10 grid grid-cols-1 sm:grid-cols-3">
              {attributes.map((a) => (
                <div key={a.label} className="rule py-4 sm:border-t">
                  <span className="index text-xl text-ink">{a.label}</span>
                  <p className="mt-1 text-sm text-muted">{a.sub}</p>
                </div>
              ))}
            </Reveal>

            {/* Formación */}
            <Reveal className="mt-10">
              <h4 className="label text-muted">Formación académica</h4>
              <ul className="mt-4">
                {formacion.map((item, i) => (
                  <li key={item} className="rule flex items-start gap-4 py-3.5">
                    <span className="index text-sm text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Principios — lista indexada */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-h2 text-ink">Principios que guían mi práctica</h3>
          </Reveal>
          <div className="mt-8">
            {principles.map(({ title, description, Icon }, i) => (
              <Reveal key={title}>
                <div className="rule row-bar group grid grid-cols-1 gap-3 py-7 transition-colors duration-300 hover:bg-paper/50 md:grid-cols-12 md:items-center md:gap-6 md:px-4">
                  <div className="flex min-w-0 items-center gap-4 md:col-span-4">
                    <span className="index text-lg text-accent">
                      P{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h4 className="min-w-0 break-words font-display text-xl font-semibold text-ink">
                      {title}
                    </h4>
                  </div>
                  <p className="min-w-0 text-muted md:col-span-8">{description}</p>
                </div>
              </Reveal>
            ))}
            <div className="rule" />
          </div>
        </div>
      </div>
    </section>
  );
}
