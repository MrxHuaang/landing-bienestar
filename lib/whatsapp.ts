import { WHATSAPP_NUMBER, whatsappMessages, type WhatsAppIntent } from "./config";

/**
 * Construye una URL wa.me con mensaje prellenado.
 * Acepta una intención conocida o un mensaje libre.
 */
export function buildWhatsAppUrl(
  intentOrMessage: WhatsAppIntent | string = "general",
): string {
  const message =
    intentOrMessage in whatsappMessages
      ? whatsappMessages[intentOrMessage as WhatsAppIntent]
      : intentOrMessage;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
