import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "whatsapp" | "outline" | "ghost" | "glass";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 font-medium rounded-full overflow-hidden transition-[transform,background-color,box-shadow,color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_12px_32px_-14px_rgba(224,81,31,0.75)] hover:bg-accent-deep hover:-translate-y-0.5",
  whatsapp:
    "bg-whatsapp text-white shadow-[0_12px_32px_-14px_rgba(31,170,83,0.7)] hover:bg-whatsapp-deep hover:-translate-y-0.5",
  outline:
    "bg-transparent text-ink border border-ink/25 hover:border-accent hover:text-accent-deep hover:-translate-y-0.5",
  ghost: "bg-transparent text-accent-deep hover:bg-accent-soft/60",
  glass: "glass text-ink hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[0.95rem] px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  /** Muestra el brillo (shimmer) al hover. */
  shimmer?: boolean;
};

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type AsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

type ButtonProps = AsButton | AsLink;

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    shimmer = true,
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const inner = (
    <>
      {shimmer && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if ("href" in props && props.href) {
    const isExternal = /^https?:\/\//.test(props.href);
    return (
      <a
        href={props.href}
        target={props.target ?? (isExternal ? "_blank" : undefined)}
        rel={props.rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        aria-label={props["aria-label"]}
        className={classes}
      >
        {inner}
      </a>
    );
  }

  const {
    variant: _v,
    size: _s,
    children: _c,
    className: _cn,
    shimmer: _sh,
    href: _h,
    type = "button",
    ...rest
  } = props as AsButton & { href?: undefined };
  void [_v, _s, _c, _cn, _sh, _h];

  return (
    <button type={type} className={classes} {...rest}>
      {inner}
    </button>
  );
}
