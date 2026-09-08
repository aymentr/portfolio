import { atr } from '@/content/copy';
import { cinematic } from '@/content/assets';
import { SectionHeading } from '@/components/SectionHeading';
import { BrandLogo } from '@/components/BrandLogo';
import { ChapterBackdrop } from '@/components/ChapterBackdrop';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

export function ATR() {
  const ref = useRevealAnimation<HTMLDivElement>({ delay: 0.15 });

  return (
    <section id="atr" className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 md:py-48">
      <ChapterBackdrop src={cinematic.atr.src} poster={cinematic.atr.poster} />
      <SectionHeading eyebrow={atr.eyebrow}>{atr.headline}</SectionHeading>
      <div ref={ref} className="mt-16 flex flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
        <p className="max-w-md text-lg leading-relaxed text-mist">{atr.body}</p>
        <div className="relative flex w-full max-w-sm items-center justify-center py-10">
          {/* An oversized, blurred plaque — only its feathered edges are soft;
              the area directly behind the logo stays solid, so the logo's own
              dark wordmark reads against the dark scene without altering the
              asset itself. */}
          <div className="absolute -inset-4 rounded-2xl bg-paper blur-xl" aria-hidden="true" />
          <BrandLogo className="relative w-full" />
        </div>
      </div>
    </section>
  );
}
