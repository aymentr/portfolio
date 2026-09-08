import { founder } from '@/content/copy';
import { cinematic } from '@/content/assets';
import { SectionHeading } from '@/components/SectionHeading';
import { ChapterBackdrop } from '@/components/ChapterBackdrop';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

/**
 * THE FOUNDER (brief section 10) — a quiet, architectural chapter that
 * establishes Aymen as the person behind everything that follows, before
 * the point of light carries the experience into ATR. Distinct from the
 * Hero: the Hero states the mission in large type, this section lingers on
 * the founder himself.
 */
export function Founder() {
  const ref = useRevealAnimation<HTMLDivElement>({ delay: 0.1 });

  return (
    <section id="founder" className="relative mx-auto max-w-4xl px-6 py-32 md:px-12 md:py-48">
      <ChapterBackdrop src={cinematic.founder.src} poster={cinematic.founder.poster} />
      <SectionHeading eyebrow={founder.eyebrow}>{founder.headline}</SectionHeading>
      <div ref={ref} className="mt-8">
        <p className="max-w-xl text-lg leading-relaxed text-mist/60 md:text-xl">{founder.body}</p>
      </div>
    </section>
  );
}
