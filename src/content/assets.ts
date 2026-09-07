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

export interface AssetSlot {
  /** Path relative to /public the real file should be placed at. */
  src: string;
  /** Accessible alt text to use once the real asset is in place. */
  alt: string;
}

export const founderPortrait: AssetSlot = {
  src: '/assets/founder/aymen-portrait.webp',
  alt: 'Aymen Troudi, founder and software engineer',
};

export const atrLogo: AssetSlot = {
  src: '/assets/brand/atr-logo.svg',
  alt: 'ATR Business Solutions logo',
};

export const denoraScreenshots: AssetSlot[] = [
  { src: '/assets/denora/dashboard.webp', alt: 'Denora dashboard' },
  { src: '/assets/denora/patients.webp', alt: 'Denora patient records' },
  { src: '/assets/denora/appointments.webp', alt: 'Denora appointments view' },
  { src: '/assets/denora/treatments.webp', alt: 'Denora treatment planning' },
  { src: '/assets/denora/odontogram.webp', alt: 'Denora odontogram' },
];

export const legalSnapScreenshots: AssetSlot[] = [
  { src: '/assets/legalsnap/dashboard.webp', alt: 'LegalSnap dashboard' },
  { src: '/assets/legalsnap/workflow.webp', alt: 'LegalSnap case workflow' },
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
  founder: { src: '/assets/cinematic/founder.mp4', poster: '/assets/cinematic/founder-poster.jpg' },
  atr: { src: '/assets/cinematic/atr.mp4', poster: '/assets/cinematic/atr-poster.jpg' },
  denora: { src: '/assets/cinematic/denora.mp4', poster: '/assets/cinematic/denora-poster.jpg' },
  legalsnap: { src: '/assets/cinematic/legalsnap.mp4', poster: '/assets/cinematic/legalsnap-poster.jpg' },
  engineering: { src: '/assets/cinematic/engineering.mp4', poster: '/assets/cinematic/engineering-poster.jpg' },
  builder: { src: '/assets/cinematic/builder.mp4', poster: '/assets/cinematic/builder-poster.jpg' },
  future: { src: '/assets/cinematic/future.mp4', poster: '/assets/cinematic/future-poster.jpg' },
} as const;

export type CinematicKey = keyof typeof cinematic;
