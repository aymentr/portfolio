import { atr } from '@/content/copy';
import { SectionHeading } from '@/components/SectionHeading';
import { BrandLogo } from '@/components/BrandLogo';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

export function ATR() {
  const ref = useRevealAnimation<HTMLDivElement>({ delay: 0.15 });

  return (
    <section id="atr" className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 md:py-48">
      <SectionHeading eyebrow={atr.eyebrow}>{atr.headline}</SectionHeading>
      <div ref={ref} className="mt-16 flex flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
        <p className="max-w-md text-lg leading-relaxed text-mist">{atr.body}</p>
        <div className="flex h-32 w-full max-w-xs items-center justify-center rounded-md border border-white/10 bg-graphite/60 px-8 backdrop-blur-sm">
          <BrandLogo className="max-h-16 w-auto" />
        </div>
      </div>
    </section>
  );
}
