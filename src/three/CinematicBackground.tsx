import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { CinematicScene } from './CinematicScene';
import { StaticBackground } from './StaticBackground';
import { supportsWebGL } from './supportsWebGL';

/** Picks the interactive WebGL environment or its static equivalent. */
export function CinematicBackground() {
  const reducedMotion = useReducedMotion();
  // Probe WebGL on the client after mount. Until then, and whenever it's
  // unavailable, we show the static gradient rather than risk mounting a
  // Canvas that can't create a context (which would blank the whole page).
  const [webglReady, setWebglReady] = useState(false);

  useEffect(() => {
    setWebglReady(supportsWebGL());
  }, []);

  if (reducedMotion || !webglReady) return <StaticBackground />;
  return <CinematicScene />;
}
