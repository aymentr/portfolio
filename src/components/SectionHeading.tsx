import type { ReactNode } from 'react';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

interface SectionHeadingProps {
  eyebrow: string;
  children: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, children, align = 'left' }: SectionHeadingProps) {
  const ref = useRevealAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className={align === 'center' ? 'text-center' : 'text-left'}>
      <p className="mb-5 font-display text-xs tracking-widest2 text-cool">{eyebrow}</p>
      <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-tightest text-paper">
        {children}
      </h2>
    </div>
  );
}
