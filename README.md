# Ángela Sophia — Psicóloga en Pereira

Landing page para el consultorio de psicología de Ángela Sophia, construida con Next.js (App Router).

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion / GSAP para animaciones
- Lenis para scroll suave

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `app/` — rutas, layout, metadata, sitemap y robots
- `components/sections/` — secciones de la landing (Hero, About, Services, Contact)
- `components/layout/` — Navbar y Footer
- `components/ui/` — componentes reutilizables (botones, reveal, marquee)
- `lib/config.ts` — datos de contacto, redes y textos de WhatsApp, fuente única de verdad

## Build

```bash
npm run build
npm start
```
