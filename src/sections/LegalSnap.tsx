import { legalsnap } from '@/content/copy';
import { legalSnapScreenshots, cinematic } from '@/content/assets';
import { SectionHeading } from '@/components/SectionHeading';
import { CinematicProductDisplay } from '@/components/CinematicProductDisplay';

export function LegalSnap() {
  return (
    <section id="legalsnap" className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 md:py-48">
      <SectionHeading eyebrow={legalsnap.eyebrow} align="center">
        {legalsnap.headline}
      </SectionHeading>
      <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-mist/60">{legalsnap.body}</p>
      <div className="mt-16">
        <CinematicProductDisplay
          product="legalsnap"
          label={legalsnap.headline}
          screenshots={legalSnapScreenshots}
          tone={legalsnap.tone}
          cinematicVideo={cinematic.legalsnap}
        />
      </div>
    </section>
  );
}
