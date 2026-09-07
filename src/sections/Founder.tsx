import { founder } from '@/content/copy';
import { cinematic } from '@/content/assets';
import { Portrait } from '@/components/Portrait';
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
    <section
      id="founder"
      className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-32 md:grid-cols-[0.45fr_1fr] md:px-12 md:py-48"
    >
      <ChapterBackdrop src={cinematic.founder.src} poster={cinematic.founder.poster} />
      <Portrait className="aspect-[3/4] w-full rounded-md" />
      <div>
        <SectionHeading eyebrow={founder.eyebrow}>{founder.headline}</SectionHeading>
        <div ref={ref} className="mt-8">
          <p className="max-w-xl text-lg leading-relaxed text-mist md:text-xl">{founder.body}</p>
        </div>
      </div>
    </section>
  );
}
