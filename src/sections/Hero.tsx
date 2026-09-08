import { hero } from '@/content/copy';
import { cinematic } from '@/content/assets';
import { Button } from '@/components/Button';
import { ChapterBackdrop } from '@/components/ChapterBackdrop';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

export function Hero() {
  const ref = useRevealAnimation<HTMLDivElement>({ stagger: 0.12, delay: 0.2 });

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end px-6 pb-20 pt-32 md:px-12 md:pb-28">
      <ChapterBackdrop src={cinematic.founder.src} poster={cinematic.founder.poster} priority />
      <div ref={ref} className="relative w-full max-w-4xl">
        <p className="mb-6 font-display text-xs tracking-widest2 text-cool">{hero.founderLabel}</p>
        <h1 className="font-display text-[clamp(2.75rem,8vw,8.5rem)] font-medium leading-[0.96] tracking-tightest text-paper">
          {hero.headline}
        </h1>
        <p className="mt-8 max-w-md text-balance text-base text-mist/60 md:text-lg">{hero.sub}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#denora" variant="primary">
            {hero.ctaPrimary}
          </Button>
          <Button href="#contact" variant="ghost">
            {hero.ctaSecondary}
          </Button>
        </div>
      </div>

      <span className="sr-only">
        Aymen Troudi — Founder & Software Engineer. Founder of ATR Business Solutions, Denora and LegalSnap.
      </span>
    </section>
  );
}
