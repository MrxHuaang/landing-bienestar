import Reveal from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
};

/**
 * Encabezado editorial: regla hairline + índice + etiqueta a la izquierda,
 * título display grande a la derecha. Inspirado en retículas suizas.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  className = "",
}: Props) {
  return (
    <Reveal className={`rule pt-6 ${className}`}>
      <div className="grid gap-x-6 gap-y-8 md:grid-cols-12">
        <div className="flex items-start gap-4 md:col-span-4">
          <span className="index text-2xl leading-none text-accent">{index}</span>
          <span className="label mt-1 text-muted">{eyebrow}</span>
        </div>
        <div className="md:col-span-8">
          <h2 className="text-display text-ink">{title}</h2>
          {subtitle && (
            <p className="text-lead mt-5 max-w-xl text-muted">{subtitle}</p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
