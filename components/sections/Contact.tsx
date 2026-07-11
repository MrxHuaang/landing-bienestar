import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { contact } from "@/lib/config";

const details = [
  { label: "Correo", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Ubicación", value: contact.location },
  { label: "Horario", value: `${contact.schedule.weekdays} · ${contact.schedule.weekend}` },
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

        <Reveal className="mt-14">
          <div className="glass-dark relative overflow-hidden rounded-[2rem] p-8 text-bone sm:p-12">
            <div className="relative grid gap-12 lg:grid-cols-2">
              {/* Izquierda: CTA */}
              <div>
                <span className="label text-accent">[ Escríbeme ]</span>
                <h3 className="text-h1 mt-4 text-bone">
                  Estoy aquí para acompañarte
                </h3>
                <p className="mt-4 max-w-md text-bone/75">
                  Escríbeme por WhatsApp y agenda tu primera sesión de valoración sin
                  compromiso. Sin costo, sin presión.
                </p>
                <div className="mt-8">
                  <WhatsAppButton intent="consulta" size="lg">
                    Escríbeme por WhatsApp
                  </WhatsAppButton>
                </div>
              </div>

              {/* Derecha: detalles indexados */}
              <div>
                {details.map(({ label, value, href }, i) => (
                  <div
                    key={label}
                    className="grid grid-cols-12 items-baseline gap-3 border-t border-white/15 py-5"
                  >
                    <span className="index col-span-2 text-sm text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="label-sm col-span-3 text-bone/60">{label}</span>
                    <div className="col-span-7">
                      {href ? (
                        <a
                          href={href}
                          className="text-bone transition-colors hover:text-accent"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-bone">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
                <div className="border-t border-white/15" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
