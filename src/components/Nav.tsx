import { useEffect, useState } from 'react';
import { nav } from '@/content/copy';

const sectionIdFor: Record<(typeof nav)[number], string> = {
  WORK: 'denora',
  ABOUT: 'about',
  EXPERIENCE: 'engineering',
  CONTACT: 'contact',
};

const sectionIds = Object.values(sectionIdFor);

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Fade a translucent backdrop in once the user leaves the hero, so the nav
  // stays legible over bright cinematic frames without hiding them at rest.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight whichever mapped section is currently in view.
  useEffect(() => {
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-colors duration-500 ease-cinematic ${
        scrolled || menuOpen
          ? 'border-b border-white/5 bg-void/70 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <a
          href="#top"
          className="whitespace-nowrap font-display text-sm font-medium tracking-widest2 text-paper"
          onClick={() => setMenuOpen(false)}
        >
          AYMEN TROUDI
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-8">
            {nav.map((item) => {
              const id = sectionIdFor[item];
              const active = activeId === id;
              return (
                <li key={item}>
                  <a
                    href={`#${id}`}
                    aria-current={active ? 'true' : undefined}
                    className={`text-xs tracking-widest2 transition-colors duration-300 ${
                      active ? 'text-paper' : 'text-mist/70 hover:text-paper'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="relative z-50 flex h-9 w-9 items-center justify-center md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-paper transition-all duration-300 ease-cinematic ${
                menuOpen ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-6 bg-paper transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-paper transition-all duration-300 ease-cinematic ${
                menuOpen ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        hidden={!menuOpen}
        className="md:hidden"
      >
        <nav aria-label="Primary" className="flex min-h-[100svh] flex-col justify-center gap-2 px-6 pb-16">
          {nav.map((item) => {
            const id = sectionIdFor[item];
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-5 font-display text-3xl font-medium tracking-tightest text-paper transition-colors duration-300 hover:text-cool"
              >
                {item}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
