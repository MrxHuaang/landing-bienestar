import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Magnetic from "@/components/ui/Magnetic";
import { contact } from "@/lib/config";
import { scaleIn } from "@/lib/motion";

const details = [
  { label: "Ubicación", value: contact.location },
  { label: "Modalidad", value: "Presencial y online" },
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
            <div className="relative grid gap-12 lg:grid-cols-12">
              {/* Izquierda: CTA */}
              <div className="lg:col-span-7">
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

                {/* Detalles indexados */}
                <div className="mt-10 max-w-md">
                  {details.map(({ label, value }, i) => (
                    <div
                      key={label}
                      className="grid grid-cols-12 items-baseline gap-3 border-t border-white/15 py-4"
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
                  <div className="border-t border-white/15" />
                </div>
              </div>

              {/* Derecha: retrato */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/angela-contacto.jpg"
                    alt="Ángela Sophia en su espacio de acompañamiento"
                    fill
                    sizes="(max-width: 1024px) 90vw, 35vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
