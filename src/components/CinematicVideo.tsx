import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CinematicVideoProps {
  /** May point at a file that doesn't exist yet — see brief section 35. */
  src?: string;
  poster?: string;
  /** Skip the IntersectionObserver gate and load eagerly (above-the-fold clips). */
  priority?: boolean;
  className?: string;
}

/**
 * A real Seedance cinematic environment, composited as a full-bleed,
 * silent, looping background layer. Never the site's only environment —
 * every section that uses this also renders the procedural WebGL "point of
 * light" scene behind it, so the experience is complete before any footage
 * exists. Renders nothing at all when the clip is missing or fails to
 * load, letting that procedural scene show through untouched.
 */
export function CinematicVideo({ src, poster, priority = false, className = '' }: CinematicVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(priority);
  const [failed, setFailed] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = videoRef.current;
    if (priority || !el) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || reducedMotion) return;

    if (inView) {
      el.play().catch(() => {
        // Autoplay can be blocked by the browser; the poster frame (or the
        // procedural scene behind it) still carries the shot.
      });
    } else {
      el.pause();
    }
  }, [inView, reducedMotion]);

  if (!src || failed) return null;

  if (reducedMotion) {
    return poster ? (
      <img src={poster} alt="" aria-hidden="true" className={className} onError={() => setFailed(true)} />
    ) : null;
  }

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload={priority ? 'auto' : 'none'}
      aria-hidden="true"
      onError={() => setFailed(true)}
    />
  );
}
