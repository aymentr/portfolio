import { nav } from '@/content/copy';

const sectionIdFor: Record<(typeof nav)[number], string> = {
  WORK: 'denora',
  ABOUT: 'about',
  EXPERIENCE: 'engineering',
  CONTACT: 'contact',
};

export function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-6 md:px-12">
      <a href="#top" className="font-display text-sm tracking-widest2 text-paper">
        AYMEN TROUDI
      </a>
      <nav aria-label="Primary">
        <ul className="flex gap-5 overflow-x-auto md:gap-8">
          {nav.map((item) => (
            <li key={item} className="shrink-0">
              <a
                href={`#${sectionIdFor[item]}`}
                className="text-xs tracking-widest2 text-mist/80 transition-colors duration-300 hover:text-paper"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
