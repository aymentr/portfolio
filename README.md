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
  components/      shared UI: Nav, Button, CinematicProductDisplay, CinematicVideo, ChapterBackdrop, Portrait, BrandLogo, ...
  sections/        one file per chapter (Hero, Founder, ATR, Denora, LegalSnap, Engineering, About, Philosophy, Contact)
```

## Dropping in the real assets

This build ships with **no fabricated identity, product UI, or brand
marks** — only what has actually been provided gets composited in. Every
real asset has a single, documented slot in `src/content/assets.ts`. Once a
file exists at the listed path, it's picked up automatically with zero code
changes; until then, the affected component shows a clearly-labelled
placeholder (images) or simply lets the procedural WebGL scene show through
(video) instead of an invented substitute.

```
public/
└── assets/
    ├── brand/
    │   └── atr-logo.svg                 the official ATR logo — used exactly as supplied, never redrawn
    │
    ├── founder/
    │   └── aymen-portrait.webp          Aymen's real photograph — never AI-substituted
    │
    ├── denora/
    │   ├── dashboard.webp
    │   ├── patients.webp
    │   ├── appointments.webp
    │   ├── treatments.webp
    │   └── odontogram.webp
    │
    ├── legalsnap/
    │   ├── dashboard.webp
    │   └── workflow.webp
    │
    └── cinematic/                        optional Seedance 2.5 environments (+ poster stills)
        ├── founder.mp4 / founder-poster.jpg
        ├── atr.mp4 / atr-poster.jpg
        ├── denora.mp4 / denora-poster.jpg
        ├── legalsnap.mp4 / legalsnap-poster.jpg
        ├── engineering.mp4 / engineering-poster.jpg
        ├── builder.mp4 / builder-poster.jpg
        └── future.mp4 / future-poster.jpg
```

To add, rename or reorder screenshots, edit the arrays in
`src/content/assets.ts` — `CinematicProductDisplay` renders whatever list
it's given, and every path above is referenced from that one file only
(never scattered through components).

## The point of light

`src/three/PointOfLight.tsx` renders the single recurring visual element
described in the design brief: a small luminous point that travels the
entire page along one continuous path (Aymen → ATR → Denora → LegalSnap →
Engineering → Aymen → Future), driven by whole-document scroll progress
(`src/context/ScrollProgressContext.tsx`). `ArchitectureNetwork.tsx` fades
in abstract node/line structures during the ATR and Engineering chapters
only. Everything here is procedural WebGL, standing in for the brief's
Seedance 2.5 cinematic renders until real footage is produced.

## Cinematic video layer

`CinematicVideo` (`src/components/CinematicVideo.tsx`) composites a real
Seedance clip when one exists at the paths above: muted, looping,
`playsInline`, played/paused via `IntersectionObserver` so off-screen clips
never burn bandwidth, and it renders **nothing** if the file is missing or
fails to load — the procedural point-of-light scene behind it shows through
untouched, so the site is complete before any footage exists. Under
`prefers-reduced-motion` it swaps to the poster still (or nothing).

`ChapterBackdrop` wraps `CinematicVideo` as a full-bleed section background
with a constant contrast scrim, used by Hero, Founder, ATR, Engineering,
About and Contact. `CinematicProductDisplay` takes the same clip via its
`cinematicVideo` prop and composites it behind the real product
screenshots for Denora and LegalSnap — the screenshot is always the
foreground source of truth; the video is only ever the environment around
it.

## SEO

`index.html` sets a real title, meta description and Open Graph tags, and
`public/robots.txt` allows full crawling. A `sitemap.xml` and `<link
rel="canonical">` are intentionally not included yet — both require the
production domain, and guessing one would bake a wrong URL into the site.
Add them once the site is deployed to its real domain (for a single-page
site, a sitemap's value is marginal anyway).

## Accessibility & performance

- `prefers-reduced-motion` disables Lenis, GSAP scroll animation, cinematic
  video autoplay, and swaps the WebGL scene for a static gradient
  (`three/StaticBackground.tsx`).
- The 3D scene is lazy-loaded (`React.lazy`) so it never blocks first paint;
  cinematic video clips only start loading once their section scrolls into
  view (except the Hero's, which is `priority`-loaded).
- Particle/node counts halve on narrow viewports.
- Single `<h1>`, sequential `<h2>`s, visible focus rings, skip-to-content
  link, alt text on every image (including placeholder states).
