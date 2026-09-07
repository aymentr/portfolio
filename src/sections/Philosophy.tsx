import { philosophy } from '@/content/copy';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

export function Philosophy() {
  const ref = useRevealAnimation<HTMLDivElement>({ stagger: 0.25 });

  return (
    <section id="philosophy" className="relative flex min-h-[70vh] items-center justify-center px-6 py-32 text-center md:px-12">
      <div ref={ref}>
        <p className="font-display text-[clamp(1.75rem,4.5vw,3.5rem)] font-medium leading-tight tracking-tightest text-mist/60">
          {philosophy.lineOne}
        </p>
        <p className="mt-2 font-display text-[clamp(1.75rem,4.5vw,3.5rem)] font-medium leading-tight tracking-tightest text-paper">
          {philosophy.lineTwo}
        </p>
      </div>
    </section>
  );
}
