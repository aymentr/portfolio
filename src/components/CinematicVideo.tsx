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
  // Once a clip has actually produced frames we never treat it as "missing"
  // again. Mobile browsers release the video decoder while the tab is
  // backgrounded (screen lock, app switch) and fire an `error` on resume —
  // that must not permanently remove a clip that was playing fine.
  const loadedOnce = useRef(false);

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

    const resume = () => {
      // Only drive playback for a clip that's on-screen and a tab that's
      // actually visible; otherwise leave it paused.
      if (!inView || document.visibilityState !== 'visible') return;
      const play = () => el.play().catch(() => {});
      // If the decoder was released while backgrounded the element loses its
      // buffered data — reload before replaying so it repaints instead of
      // sitting on a blank frame.
      if (el.readyState < 2) {
        try {
          el.load();
        } catch {
          /* no-op */
        }
      }
      play();
    };

    if (inView) resume();
    else el.pause();

    // Re-assert playback when the tab becomes visible again (returning from a
    // screen lock or app switch) or is restored from the back/forward cache.
    document.addEventListener('visibilitychange', resume);
    window.addEventListener('pageshow', resume);
    return () => {
      document.removeEventListener('visibilitychange', resume);
      window.removeEventListener('pageshow', resume);
    };
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
      poster={poster}
      muted
      loop
      playsInline
      preload={priority ? 'auto' : 'none'}
      aria-hidden="true"
      onLoadedData={() => {
        loadedOnce.current = true;
      }}
      onError={() => {
        // A clip that never produced frames is genuinely missing/unsupported —
        // hide it so the procedural scene shows through. A clip that HAS played
        // before hit a transient decoder loss (backgrounding); keep it mounted
        // and let the visibility/`pageshow` handler recover it on resume.
        if (!loadedOnce.current) setFailed(true);
      }}
    >
      {/* WebM/VP9 first: smaller and royalty-free. Falls back to the MP4 for
          browsers without VP9 support. If a clip has no .webm companion this
          source simply 404s and the browser moves on to the next one. */}
      <source src={src.replace(/\.mp4$/i, '.webm')} type="video/webm" />
      <source src={src} type="video/mp4" />
    </video>
  );
}
