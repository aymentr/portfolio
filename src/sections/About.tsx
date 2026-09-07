import { about } from '@/content/copy';
import { Portrait } from '@/components/Portrait';
import { SectionHeading } from '@/components/SectionHeading';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

export function About() {
  const ref = useRevealAnimation<HTMLDivElement>({ delay: 0.1 });

  return (
    <section id="about" className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-32 md:grid-cols-[0.5fr_1fr] md:px-12 md:py-48">
      <Portrait className="aspect-[3/4] w-full rounded-md" />
      <div>
        <SectionHeading eyebrow={about.eyebrow}>{about.headline}</SectionHeading>
        <div ref={ref} className="mt-8">
          <p className="max-w-xl text-lg leading-relaxed text-mist">{about.body}</p>
        </div>
      </div>
    </section>
  );
}
