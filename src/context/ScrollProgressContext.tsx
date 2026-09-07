import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollProgressContext = createContext(0);

/**
 * Tracks scroll progress (0→1) across the entire document. This is the
 * single timeline the "point of light" travels along, giving every chapter
 * a shared sense of continuity instead of feeling like separate videos.
 */
export function ScrollProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => setProgress(self.progress),
    });

    return () => st.kill();
  }, []);

  return <ScrollProgressContext.Provider value={progress}>{children}</ScrollProgressContext.Provider>;
}

export function useGlobalScrollProgress() {
  return useContext(ScrollProgressContext);
}

/** The nine narrative chapters, in scroll order, each given an equal share of the timeline. */
export const CHAPTERS = [
  'hero',
  'founder-intro',
  'atr',
  'denora',
  'legalsnap',
  'engineering',
  'about',
  'philosophy',
  'contact',
] as const;

export type Chapter = (typeof CHAPTERS)[number];

/** Returns how "active" a chapter is (0→1) given the global progress. */
export function chapterIntensity(chapter: Chapter, progress: number, feather = 0.6): number {
  const index = CHAPTERS.indexOf(chapter);
  const span = 1 / CHAPTERS.length;
  const center = span * (index + 0.5);
  const distance = Math.abs(progress - center) / (span * feather);
  return Math.max(0, 1 - distance);
}
