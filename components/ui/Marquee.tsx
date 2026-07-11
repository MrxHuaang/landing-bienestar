type Props = {
  items: string[];
  className?: string;
};

/** Cinta de texto en movimiento continuo (dos copias = loop sin costura). */
export default function Marquee({ items, className = "" }: Props) {
  const phrase = (
    <span className="flex shrink-0 items-center gap-6 px-3">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-6">
          <span className="text-h1 font-display text-ink">{item}</span>
          <span className="text-accent" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className={`relative flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}
      role="presentation"
    >
      <div className="marquee-track">
        {phrase}
        <span aria-hidden className="contents">
          {phrase}
        </span>
      </div>
    </div>
  );
}
