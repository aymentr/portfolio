/**
 * Typography scale. Display type carries the cinematic weight of the site,
 * so it is intentionally large, tight and restrained in variety.
 */

export const fontDisplay = "'Neue Montreal', 'Suisse Int\\'l', 'Inter', -apple-system, sans-serif";
export const fontBody = "'Suisse Int\\'l', 'Inter', -apple-system, sans-serif";

export const type = {
  display1: {
    fontSize: 'clamp(2.75rem, 8vw, 8.5rem)',
    lineHeight: 0.96,
    letterSpacing: '-0.03em',
    fontWeight: 500,
  },
  display2: {
    fontSize: 'clamp(2rem, 5vw, 4.5rem)',
    lineHeight: 1.02,
    letterSpacing: '-0.025em',
    fontWeight: 500,
  },
  heading: {
    fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)',
    lineHeight: 1.15,
    letterSpacing: '-0.01em',
    fontWeight: 500,
  },
  eyebrow: {
    fontSize: '0.75rem',
    lineHeight: 1,
    letterSpacing: '0.32em',
    fontWeight: 500,
    textTransform: 'uppercase' as const,
  },
  body: {
    fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
    lineHeight: 1.6,
    letterSpacing: '0',
    fontWeight: 400,
  },
  small: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
    letterSpacing: '0.01em',
    fontWeight: 400,
  },
};
