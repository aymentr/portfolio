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
        <p className="max-w-md text-lg leading-relaxed text-mist/60">{atr.body}</p>
        <div className="relative flex w-full max-w-sm items-center justify-center py-4">
          {/* A soft glow sized to the logo itself — enough to lift the logo's
              own dark text off the dark scene without reading as a card or
              dominating the section. The asset itself is untouched. */}
          <div className="absolute -inset-3 rounded-xl bg-paper/95 blur-sm" aria-hidden="true" />
          <BrandLogo className="relative w-full" />
        </div>
      </div>
    </section>
  );
}
