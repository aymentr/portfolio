import { useReducedMotion } from '@/hooks/useReducedMotion';
import { CinematicScene } from './CinematicScene';
import { StaticBackground } from './StaticBackground';

/** Picks the interactive WebGL environment or its static equivalent. */
export function CinematicBackground() {
  const reducedMotion = useReducedMotion();
  return reducedMotion ? <StaticBackground /> : <CinematicScene />;
}
