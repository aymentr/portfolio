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
        <div className="flex w-full max-w-sm items-center justify-center rounded-lg bg-paper px-10 py-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.65)]">
          <BrandLogo className="w-full" />
        </div>
      </div>
    </section>
  );
}
