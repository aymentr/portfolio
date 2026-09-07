/**
 * Design tokens for the cinematic portfolio.
 * These mirror the CSS custom properties defined in index.css so components
 * can reference the same values in JS (e.g. for three.js colors, GSAP timelines).
 */

export const color = {
  void: '#08090b',
  graphite: '#101114',
  charcoal: '#17181c',
  metal: '#2a2c31',
  paper: '#f4f3f0',
  mist: 'rgba(244, 243, 240, 0.62)',
  cool: '#5b7c99',
  violet: '#5d5a78',
  point: '#eef4ff',
} as const;

export const breakpoint = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1600,
} as const;

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '2rem',
  lg: '4rem',
  xl: '8rem',
  '2xl': '12rem',
  '3xl': '18rem',
} as const;

export const radius = {
  sm: '2px',
  md: '4px',
  lg: '8px',
  full: '999px',
} as const;

export const zIndex = {
  base: 0,
  scene: 10,
  content: 20,
  nav: 40,
  overlay: 50,
  cursor: 60,
} as const;

export const shadow = {
  soft: '0 40px 120px -40px rgba(0, 0, 0, 0.65)',
  contact: '0 2px 24px rgba(0, 0, 0, 0.5)',
} as const;
