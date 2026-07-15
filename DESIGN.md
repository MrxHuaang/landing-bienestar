# Design System — Angela Sophia

Editorial grotesco (ref. AIM / Obys Agency), plano, cálido. Fuente de verdad de
tokens: `app/globals.css` (@theme) y `lib/motion.ts` (motion). Este documento
los describe; el código manda.

## Color

Estrategia: committed — verde bosque carga la identidad sobre base hueso.
Plano siempre: sin gradientes decorativos ni orbes.

| Token | Valor | Uso |
|---|---|---|
| `--color-bone` | `#eceae3` | Fondo del body |
| `--color-paper` | `#f4f2ec` | Superficie elevada, hover de filas, base del glass |
| `--color-sand` | `#dfd8c8` | Neutro secundario |
| `--color-ink` | `#14201a` | Texto principal (verde casi negro) |
| `--color-ink-soft` | `#3a453d` | Texto de párrafo |
| `--color-muted` | `#626a60` | Secundario / metadatos |
| `--color-line` | `#c9c3b4` | Reglas hairline (1px) |
| `--color-accent` | `#2f5d4e` | Acento verde bosque: índices, links hover, barra progreso |
| `--color-accent-deep` | `#21473a` | Hover del acento, iconos sobre accent-soft |
| `--color-accent-soft` | `#d8e3dd` | Chips e iconos circulares |
| `--color-whatsapp` | `#1faa53` | Solo CTAs de WhatsApp |

## Tipografía

- **Display**: Bricolage Grotesque 600–800 (`--font-bricolage`). Titulares,
  índices, wordmark.
- **Cuerpo**: Instrument Sans (`--font-instrument`).
- Escala fluida (clases en globals.css): `.text-mega` (hasta 9.5rem, hero y
  wordmark únicamente) → `.text-display` → `.text-h1` → `.text-h2` →
  `.text-lead`. Tracking negativo crece con el tamaño (−0.03 a −0.045em).
- Labels: `.label` / `.label-sm` uppercase tracked — parte de la gramática
  indexada de la marca.

## Gramática de marca

- **Índices**: `E01` (hero), `S01` (servicios), `P01` (principios), `01–03`
  (secciones). Numeración deliberada estilo AIM: siempre acento, siempre
  `.index` (tabular nums).
- **Reglas hairline**: `.rule` (border-top 1px line) abre cada bloque.
- **Glass**: `.glass` / `.glass-strong` / `.glass-dark` — material estándar
  para nav, captions de retrato, CTAs secundarios, panel de contacto.
- **Grano**: `.grain` overlay global al 5%.

## Motion (tokens en `lib/motion.ts` + `@theme`)

Filosofía: una coreografía de entrada (hero) + scroll continuo. Nada de
fade-up uniforme por sección.

| Token | Valor | Uso |
|---|---|---|
| `DUR.fast` / `--dur-fast` | 150ms | Feedback (press, color) |
| `DUR.base` / `--dur-base` | 300ms | Estados (hover, menús) |
| `DUR.slow` / `--dur-slow` | 500ms | Layout (drawer, panel) |
| `DUR.hero` / `--dur-hero` | 900ms | Entradas coreografiadas |
| `EASE.out` / `--ease-soft` | cubic-bezier(0.22,1,0.36,1) | Default (quint) |
| `EASE.expo` / `--ease-expo` | cubic-bezier(0.16,1,0.3,1) | Reveals decididos |

Materiales por efecto:
- **Mask reveal por líneas** (SplitText + overflow clip): titulares.
- **Clip-path inset + scale interno**: revelado de retratos.
- **Scroll-driven** (GSAP scrub): drift horizontal de líneas del hero,
  parallax interno de imágenes, wordmark del footer, rail de progreso.
- **Velocity-reactive**: marquee acelera/invierte según velocidad de scroll.
- **Magnetic** (spring hacia el cursor): CTAs primarios y iconos sociales.
- Exits al ~75% de la duración de entrada. Prohibido bounce/elastic.

Reduced motion: coreografías GSAP no se montan (gate en `useGsapReady`),
Framer usa `MotionConfig reducedMotion="user"`, marquee queda estático.
Contenido nunca se oculta detrás de una animación.

## Layout

- Contenedor: `max-w-6xl`, padding lateral 5/8.
- Ritmo vertical: `.section-y` = clamp(4.5rem → 9rem).
- Grid editorial de 12 columnas en desktop; filas indexadas con hairlines en
  vez de cards. `min-w-0` obligatorio en celdas con texto display.
