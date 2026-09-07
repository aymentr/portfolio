import { founderIntro } from '@/content/copy';
import { SectionHeading } from '@/components/SectionHeading';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

export function FounderIntro() {
  const ref = useRevealAnimation<HTMLDivElement>({ delay: 0.1 });

  return (
    <section id="founder-intro" className="relative mx-auto max-w-4xl px-6 py-32 md:px-12 md:py-48">
      <SectionHeading eyebrow={founderIntro.eyebrow}>{founderIntro.headline}</SectionHeading>
      <div ref={ref} className="mt-10">
        <p className="max-w-2xl text-lg leading-relaxed text-mist md:text-xl">{founderIntro.body}</p>
      </div>
    </section>
  );
}
