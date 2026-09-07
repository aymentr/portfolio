import { contact } from '@/content/copy';
import { cinematic } from '@/content/assets';
import { Button } from '@/components/Button';
import { ChapterBackdrop } from '@/components/ChapterBackdrop';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

export function Contact() {
  const ref = useRevealAnimation<HTMLDivElement>({ stagger: 0.12, delay: 0.1 });

  return (
    <section id="contact" className="relative flex min-h-[90svh] flex-col items-center justify-center px-6 py-32 text-center md:px-12">
      <ChapterBackdrop src={cinematic.future.src} poster={cinematic.future.poster} />
      <div ref={ref} className="relative">
        <h2 className="max-w-3xl font-display text-[clamp(2.25rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-tightest text-paper">
          {contact.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg text-mist">{contact.body}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${contact.email}`} variant="primary">
            {contact.ctaPrimary}
          </Button>
          <Button href="#denora" variant="ghost">
            {contact.ctaSecondary}
          </Button>
        </div>
      </div>
      <p className="mt-24 text-xs tracking-widest2 text-mist/40">
        © {new Date().getFullYear()} AYMEN TROUDI
      </p>
    </section>
  );
}
