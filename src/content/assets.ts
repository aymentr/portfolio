/**
 * Single source of truth for every real, provided asset the site composites
 * into its cinematic environments (brief section 03: real brand assets >
 * real product assets > real photography > Seedance > three.js/CSS > GSAP —
 * never reversed).
 *
 * Nothing here is fabricated. Each entry points at a file that does not yet
 * exist in this repository — drop the real file at the path below (create
 * the folder if needed) and the corresponding section picks it up
 * automatically with no code changes. Until a file exists, the affected
 * component renders a clearly-labelled placeholder instead of a fake image
 * or video, per the brief's rule against fabricating identity, product UI
 * or brand assets.
 */

/**
 * Prefixes a public/-relative path with Vite's configured base URL, so
 * these paths resolve correctly whether the site is served from a domain
 * root or a subpath (e.g. https://aymentr.github.io/portfolio/). Vite only
 * rewrites root-absolute paths it can statically see (index.html, imports)
 * — plain string literals like the ones below need this done by hand.
 */
function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`.replace(/([^:])\/\/+/g, '$1/');
}

export interface AssetSlot {
  /** Path relative to /public the real file should be placed at. */
  src: string;
  /** Accessible alt text to use once the real asset is in place. */
  alt: string;
}

export const founderPortrait: AssetSlot = {
  src: withBase('assets/founder/aymen-portrait.webp'),
  alt: 'Aymen Troudi, founder and software engineer',
};

export const atrLogo: AssetSlot = {
  src: withBase('assets/brand/atr-logo.svg'),
  alt: 'ATR Business Solutions logo',
};

export const denoraScreenshots: AssetSlot[] = [
  { src: withBase('assets/denora/dashboard.webp'), alt: 'Denora dashboard' },
  { src: withBase('assets/denora/patients.webp'), alt: 'Denora patient records' },
  { src: withBase('assets/denora/appointments.webp'), alt: 'Denora appointments view' },
  { src: withBase('assets/denora/treatments.webp'), alt: 'Denora treatment planning' },
  { src: withBase('assets/denora/odontogram.webp'), alt: 'Denora odontogram' },
];

export const legalSnapScreenshots: AssetSlot[] = [
  { src: withBase('assets/legalsnap/dashboard.webp'), alt: 'LegalSnap dashboard' },
  { src: withBase('assets/legalsnap/workflow.webp'), alt: 'LegalSnap case workflow' },
];

/**
 * Optional Seedance 2.5 cinematic environments — one continuous visual
 * universe, per brief section 24/32. Each is optional — sections fall back
 * to the procedural WebGL "point of light" environment when a file is
 * absent, so the site is complete and premium with or without the
 * generated footage. Seedance handles world/camera/light/atmosphere only;
 * it never generates the logo, screenshots, portrait or any readable text.
 */
export const cinematic = {
  founder: { src: withBase('assets/cinematic/founder.mp4'), poster: withBase('assets/cinematic/founder-poster.jpg') },
  atr: { src: withBase('assets/cinematic/atr.mp4'), poster: withBase('assets/cinematic/atr-poster.jpg') },
  denora: { src: withBase('assets/cinematic/denora.mp4'), poster: withBase('assets/cinematic/denora-poster.jpg') },
  legalsnap: {
    src: withBase('assets/cinematic/legalsnap.mp4'),
    poster: withBase('assets/cinematic/legalsnap-poster.jpg'),
  },
  engineering: {
    src: withBase('assets/cinematic/engineering.mp4'),
    poster: withBase('assets/cinematic/engineering-poster.jpg'),
  },
  builder: { src: withBase('assets/cinematic/builder.mp4'), poster: withBase('assets/cinematic/builder-poster.jpg') },
  future: { src: withBase('assets/cinematic/future.mp4'), poster: withBase('assets/cinematic/future-poster.jpg') },
} as const;

export type CinematicKey = keyof typeof cinematic;
