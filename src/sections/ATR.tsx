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
        <div className="relative flex w-full max-w-sm items-center justify-center">
          {/* A soft backing sized to hug the wordmark itself, not the logo's
              transparent bounding box. The clip trims the PNG's large empty
              top margin (~12%) and sits flush at the sides so the white reads
              as a subtle lift behind the ink, never a card. Asset untouched. */}
          <div
            className="absolute inset-x-0 bottom-1 top-4 rounded-lg bg-paper/95 blur-[2px]"
            aria-hidden="true"
          />
          <BrandLogo className="relative w-full" />
        </div>
      </div>
    </section>
  );
}
