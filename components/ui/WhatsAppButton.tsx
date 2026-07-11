import Button from "./Button";
import { WhatsAppIcon } from "./icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { WhatsAppIntent } from "@/lib/config";

type Props = {
  intent?: WhatsAppIntent | string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "whatsapp" | "outline" | "ghost" | "glass";
  className?: string;
  "aria-label"?: string;
};

/** CTA que abre WhatsApp con un mensaje prellenado según la intención. */
export default function WhatsAppButton({
  intent = "general",
  children,
  size = "md",
  variant = "whatsapp",
  className,
  ...rest
}: Props) {
  return (
    <Button
      href={buildWhatsAppUrl(intent)}
      variant={variant}
      size={size}
      className={className}
      aria-label={rest["aria-label"]}
    >
      <WhatsAppIcon className="h-[1.15em] w-[1.15em]" />
      {children}
    </Button>
  );
}
