# Aymen Troudi — Founder & Software Engineer

A cinematic single-page portfolio for Aymen Troudi — founder of ATR Business
Solutions, Denora and LegalSnap. Built as one continuous scroll experience
with a recurring "point of light" motif tying every chapter together, rather
than a stack of disconnected sections.

## Stack

React + TypeScript + Vite, Tailwind CSS, GSAP + ScrollTrigger, Lenis
(smooth scroll), Three.js via React Three Fiber.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build
npm run lint
```

## Project structure

```
src/
  design-system/   design tokens, typography scale, motion vocabulary
  content/         all copy (copy.ts) and real-asset paths (assets.ts)
  context/         global scroll-progress provider driving the 3D scene
  hooks/           useSmoothScroll, useRevealAnimation, useParallax, useScrollProgress, useReducedMotion
  three/           the WebGL "point of light" environment (R3F)
  components/      shared UI: Nav, Button, CinematicProductDisplay, Portrait, BrandLogo, ...
  sections/        one file per chapter (Hero, FounderIntro, ATR, Denora, LegalSnap, Engineering, About, Philosophy, Contact)
```

## Dropping in the real assets

This build ships with **no fabricated identity, product UI, or brand
marks** — only what has actually been provided gets composited in. Every
real asset has a single, documented slot in `src/content/assets.ts`. Once a
file exists at the listed path, it's picked up automatically with zero code
changes; until then, the affected component shows a clearly-labelled
placeholder instead of an invented substitute.

| Asset | Path | Used by |
|---|---|---|
| Aymen's real photograph | `public/assets/aymen-portrait.jpg` | Hero, About |
| ATR Business Solutions logo (official file, used as-is — never redrawn) | `public/assets/atr-logo.svg` | ATR section |
| Denora screenshots | `public/assets/denora/*.png` | Denora section (`CinematicProductDisplay`) |
| LegalSnap screenshots | `public/assets/legalsnap/*.png` | LegalSnap section (`CinematicProductDisplay`) |
| Cinematic (Seedance-generated) video chapters, optional | `public/assets/video/0X-*.mp4` | Referenced in `content/assets.ts`; the procedural WebGL scene is the environment until these exist |

To add or rename screenshots, edit the arrays in `src/content/assets.ts` —
`CinematicProductDisplay` renders whatever list it's given.

## The point of light

`src/three/PointOfLight.tsx` renders the single recurring visual element
described in the design brief: a small luminous point that travels the
entire page along one continuous path (Aymen → ATR → Denora → LegalSnap →
Engineering → Aymen → Future), driven by whole-document scroll progress
(`src/context/ScrollProgressContext.tsx`). `ArchitectureNetwork.tsx` fades
in abstract node/line structures during the ATR and Engineering chapters
only. Everything here is procedural WebGL, standing in for the brief's
Seedance 2.5 cinematic renders until real footage is produced and dropped
into `public/assets/video/`.

## Accessibility & performance

- `prefers-reduced-motion` disables Lenis, GSAP scroll animation, and swaps
  the WebGL scene for a static gradient (`three/StaticBackground.tsx`).
- The 3D scene is lazy-loaded (`React.lazy`) so it never blocks first paint.
- Particle/node counts halve on narrow viewports.
- Single `<h1>`, sequential `<h2>`s, visible focus rings, skip-to-content
  link, alt text on every image (including placeholder states).
