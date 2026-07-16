/**
 * Fuente única de datos de contacto, redes y servicios.
 * Copy preservado verbatim del sitio original.
 */

export const site = {
  name: "Angela Sophia",
  role: "Psicóloga",
  domain: "https://psicologaangelasophia.com",
  gaId: "G-FQLW35RE9H",
} as const;

export const contact = {
  email: "contacto@angelasophia.com",
  phone: "+57 321 584 1483",
  location: "Pereira, Risaralda, Colombia",
  schedule: {
    weekdays: "Lunes - Viernes: 9:00 - 18:00",
    weekend: "Sábado: 10:00 - 14:00",
  },
} as const;

/** Número en formato wa.me (sin símbolos). */
export const WHATSAPP_NUMBER = "573215841483";

export const social = {
  instagram: "https://www.instagram.com/soyangelacordoba/",
  tiktok: "https://www.tiktok.com/@psic.angelasophia",
  youtube: "https://youtube.com/@soyangelacordoba?si=GS9VyeXm9OdK0Ktc",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
} as const;

/** Comunidad de WhatsApp para los talleres online. */
export const WHATSAPP_COMMUNITY_URL =
  "https://chat.whatsapp.com/IYZ5LL4yjSn1jbCoX3ycQZ";

/** Mensajes prellenados por intención (del sitio original). */
export const whatsappMessages = {
  general:
    "Hola, me gustaría obtener más información sobre tus servicios.",
  individual:
    "Hola, estoy interesad@ en agendar una sesión de acompañamiento individual. ¿Podrías brindarme más información?",
  online:
    "Hola, me interesa el acompañamiento online. ¿Qué plataforma utilizas y cómo podemos agendar una sesión?",
  grupal:
    "Hola, quiero obtener información sobre los próximos talleres grupales. ¿Qué temáticas están disponibles y cuándo inician?",
  consulta:
    "Hola, me gustaría agendar una consulta inicial gratuita para conocer qué servicio se adapta mejor a mis necesidades.",
} as const;

export type WhatsAppIntent = keyof typeof whatsappMessages;

export const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Servicios", href: "#services" },
  { name: "Contacto", href: "#contact" },
] as const;
