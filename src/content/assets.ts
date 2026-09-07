/**
 * Single source of truth for every real, provided asset the site composites
 * into its cinematic environments (brief section 45: real assets always win
 * over generated content).
 *
 * Nothing here is fabricated. Each entry points at a file that does not yet
 * exist in this repository — drop the real file at the path below (create
 * the folder if needed) and the corresponding section will pick it up
 * automatically with no code changes. Until a file exists, the affected
 * section renders a clearly-labelled placeholder instead of a fake image,
 * per the brief's rule against fabricating identity, product UI or brand
 * assets.
 */

export interface AssetSlot {
  /** Path relative to /public the real file should be placed at. */
  src: string;
  /** Accessible alt text to use once the real asset is in place. */
  alt: string;
}

export const portrait: AssetSlot = {
  src: '/assets/aymen-portrait.jpg',
  alt: 'Aymen Troudi, founder and software engineer',
};

export const atrLogo: AssetSlot = {
  src: '/assets/atr-logo.svg',
  alt: 'ATR Business Solutions logo',
};

export const denoraScreenshots: AssetSlot[] = [
  { src: '/assets/denora/dashboard.png', alt: 'Denora dashboard' },
  { src: '/assets/denora/appointments.png', alt: 'Denora appointments view' },
  { src: '/assets/denora/patient-timeline.png', alt: 'Denora patient treatment timeline' },
];

export const legalSnapScreenshots: AssetSlot[] = [
  { src: '/assets/legalsnap/dashboard.png', alt: 'LegalSnap dashboard' },
  { src: '/assets/legalsnap/workspace.png', alt: 'LegalSnap case workspace' },
];

/**
 * Optional cinematic video backgrounds (the Seedance 2.5 chapter renders
 * described in the brief). Each is optional — sections fall back to the
 * procedural WebGL "point of light" environment when a file is absent, so
 * the site is complete and premium with or without the generated footage.
 */
export const cinematicVideo = {
  founder: '/assets/video/01-founder.mp4',
  atr: '/assets/video/02-atr.mp4',
  denora: '/assets/video/03-denora.mp4',
  legalsnap: '/assets/video/04-legalsnap.mp4',
  engineering: '/assets/video/05-engineering.mp4',
  builder: '/assets/video/06-builder.mp4',
  future: '/assets/video/07-future.mp4',
};
