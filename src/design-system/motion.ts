/**
 * Central motion vocabulary. Every GSAP timeline and CSS transition should
 * pull durations/eases from here so pacing stays consistent across chapters.
 */

export const ease = {
  cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
  soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
  linear: 'none',
} as const;

export const duration = {
  instant: 0.2,
  fast: 0.5,
  base: 0.9,
  slow: 1.6,
  cinematic: 2.4,
} as const;

/** Scroll-progress checkpoints used by cinematic sections (see brief section 36). */
export const scrollBeats = {
  begin: 0,
  approach: 0.3,
  reveal: 0.6,
  dominate: 0.8,
  transition: 1,
} as const;
