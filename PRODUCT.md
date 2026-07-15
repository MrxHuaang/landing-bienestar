# Product

## Register

brand

## Users

Personas en Pereira (Colombia) y remotas buscando acompañamiento psicológico:
adultos y adolescentes lidiando con ansiedad, autoestima o momentos de crisis.
Llegan desde Instagram/TikTok de la psicóloga, en móvil la mayoría, con una
sola decisión por tomar: escribir o no escribir por WhatsApp. Estado emocional
sensible — la página debe transmitir calma y competencia, nunca presión.

## Product Purpose

Landing de conversión única: presentar a Angela Sophia (psicóloga) y llevar al
visitante a agendar una primera sesión gratuita vía WhatsApp. No hay más
funnel: una página, un CTA repetido con intenciones distintas (consulta,
individual, online, comunidad de talleres).

## Brand Personality

Cálida, editorial, segura. La referencia visual aprobada es AIM (Obys Agency):
tipografía grotesca a gran escala, retícula con reglas hairline, índices
numerados como gramática de marca (E01/S01/P01), mucho aire. La calidez viene
del verde bosque + hueso, el retrato y el copy en primera persona — no de
suavizar la tipografía.

## Anti-references

- Corporativo/frío ("página de EPS"). Nada de azul clínico ni stock genérico.
- "Template de PowerPoint antiguo": paleta naranja plana + cards genéricas
  idénticas (feedback explícito del cliente — ya se eliminó).
- Gradientes decorativos y orbes difuminados de fondo. Color plano siempre.
- Landing genérica de AI: fade-up idéntico en cada sección, hero-metric, cards
  con icono+título+texto repetidas.

## Design Principles

1. **Una decisión, muchas puertas** — todo camino termina en WhatsApp; cada CTA
   lleva mensaje prellenado según contexto.
2. **La tipografía es la imagen** — titulares mega-escala hacen el trabajo
   visual; las fotos son puntuales (retrato) y editoriales.
3. **Sistema indexado como voz** — índices E01/S01/P01 + reglas hairline son la
   gramática deliberada de la marca (préstamo AIM), no scaffolding.
4. **Movimiento con propósito de agencia** — una coreografía de entrada bien
   ensayada + scroll continuo (marquee, parallax, drift) en vez de
   micro-animaciones dispersas.
5. **Calma técnica** — glassmorphism como material estándar (nav, captions,
   paneles), grano sutil, todo plano y sin ruido.

## Accessibility & Inclusion

- `prefers-reduced-motion`: coreografías GSAP no se montan; Framer Motion vía
  `MotionConfig reducedMotion="user"`; contenido siempre visible por defecto.
- Contraste: tinta #14201a sobre hueso #eceae3 (≥13:1); muted #626a60 solo en
  texto secundario grande.
- Todo CTA es `<a>`/`<button>` real con focus-visible de 2px en acento.
- Español colombiano, tuteo cálido (copy original del cliente, preservado).
