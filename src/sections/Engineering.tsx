import { engineering } from '@/content/copy';
import { cinematic } from '@/content/assets';
import { SectionHeading } from '@/components/SectionHeading';
import { ChapterBackdrop } from '@/components/ChapterBackdrop';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

export function Engineering() {
  const ref = useRevealAnimation<HTMLUListElement>({ stagger: 0.03, delay: 0.1 });

  return (
    <section id="engineering" className="relative mx-auto max-w-4xl px-6 py-32 md:px-12 md:py-48">
      <ChapterBackdrop src={cinematic.engineering.src} poster={cinematic.engineering.poster} />
      <SectionHeading eyebrow={engineering.eyebrow}>{engineering.headline}</SectionHeading>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist/60">{engineering.body}</p>

      <ul ref={ref} className="mt-14 flex flex-wrap gap-x-3 gap-y-3" aria-label="Technologies used across the products">
        {engineering.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-mist/90 transition-colors duration-300 hover:border-cool/50 hover:text-paper"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
