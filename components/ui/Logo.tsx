type Props = {
  className?: string;
};

/**
 * Monograma de marca: "A" geométrica sobre fondo verde bosque. Vive como
 * componente (no raster) para reutilizarse nítido en cualquier tamaño
 * (navbar, footer, favicon exportado aparte en public/favicon.svg).
 */
export default function Logo({ className = "h-7 w-7" }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <rect width="100" height="100" rx="24" fill="var(--color-accent)" />
      <path
        d="M28 76 L48 24 L52 24 L72 76 L63 76 L58 62 L42 62 L37 76 Z M45.5 54 L54.5 54 L50 41 Z"
        fill="var(--color-bone)"
      />
    </svg>
  );
}
