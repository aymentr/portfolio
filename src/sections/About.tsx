import { about } from '@/content/copy';
import { cinematic } from '@/content/assets';
import { SectionHeading } from '@/components/SectionHeading';
import { ChapterBackdrop } from '@/components/ChapterBackdrop';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

export function About() {
  const ref = useRevealAnimation<HTMLDivElement>({ delay: 0.1 });

  return (
    <section id="about" className="relative mx-auto max-w-4xl px-6 py-32 md:px-12 md:py-48">
      <ChapterBackdrop src={cinematic.builder.src} poster={cinematic.builder.poster} />
      <SectionHeading eyebrow={about.eyebrow}>{about.headline}</SectionHeading>
      <div ref={ref} className="mt-8">
        <p className="max-w-xl text-lg leading-relaxed text-mist/60">{about.body}</p>
      </div>
    </section>
  );
}
