import { denora } from '@/content/copy';
import { denoraScreenshots } from '@/content/assets';
import { SectionHeading } from '@/components/SectionHeading';
import { CinematicProductDisplay } from '@/components/CinematicProductDisplay';

export function Denora() {
  return (
    <section id="denora" className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 md:py-48">
      <SectionHeading eyebrow={denora.eyebrow} align="center">
        {denora.headline}
      </SectionHeading>
      <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-mist">{denora.body}</p>
      <div className="mt-16">
        <CinematicProductDisplay
          product="denora"
          label={denora.headline}
          screenshots={denoraScreenshots}
          tone={denora.tone}
        />
      </div>
    </section>
  );
}
