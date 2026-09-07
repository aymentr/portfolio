import { useEffect, useRef, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ease, duration } from '@/design-system/motion';
import { useReducedMotion } from './useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  /** Stagger delay between children of the ref'd element, in seconds. */
  stagger?: number;
  y?: number;
  delay?: number;
}

/** Fades + rises children of the returned ref into view on scroll. */
export function useRevealAnimation<T extends HTMLElement>({
  stagger = 0.08,
  y = 28,
  delay = 0,
}: RevealOptions = {}): RefObject<T> {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(el.children, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(el.children, { opacity: 0, y });
      gsap.to(el.children, {
        opacity: 1,
        y: 0,
        duration: duration.slow,
        delay,
        ease: ease.cinematic,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      });
    }, el);

    return () => ctx.revert();
  }, [reducedMotion, stagger, y, delay]);

  return ref;
}
