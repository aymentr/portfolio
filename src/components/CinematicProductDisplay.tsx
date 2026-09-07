import { useState } from 'react';
import type { AssetSlot } from '@/content/assets';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface CinematicProductDisplayProps {
  product: 'denora' | 'legalsnap';
  label: string;
  screenshots: AssetSlot[];
  tone: 'calm' | 'analytical';
}

function ProductScreen({ shot, tone, index }: { shot: AssetSlot; tone: 'calm' | 'analytical'; index: number }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={[
        'relative aspect-[16/10] w-full overflow-hidden rounded-md border',
        tone === 'calm' ? 'border-cool/25' : 'border-violet/30',
      ].join(' ')}
      style={{
        boxShadow: '0 40px 100px -30px rgba(0,0,0,0.7)',
        transform: `translateY(${index % 2 === 0 ? '0' : '2rem'}) scale(${1 - index * 0.02})`,
      }}
    >
      {!failed ? (
        <img
          src={shot.src}
          alt={shot.alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-charcoal px-6 text-center"
          role="img"
          aria-label={`${shot.alt} — screenshot not yet provided`}
        >
          <span className="h-px w-10 bg-mist/40" />
          <p className="font-display text-sm tracking-widest2 text-mist/70">REAL SCREENSHOT PENDING</p>
          <p className="text-xs text-mist/50">{shot.alt}</p>
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            tone === 'calm'
              ? 'linear-gradient(180deg, rgba(91,124,153,0.08), transparent 40%)'
              : 'linear-gradient(180deg, rgba(93,90,120,0.1), transparent 40%)',
        }}
      />
    </div>
  );
}

/**
 * Reusable cinematic product presentation (brief section 28). Real product
 * truth (screenshots) always takes priority over generated content — this
 * component only ever composites the provided assets, never fabricates a
 * product UI. Until real screenshots are dropped into src/content/assets.ts'
 * target paths, each slot shows a clearly-labelled placeholder rather than
 * an invented interface.
 */
export function CinematicProductDisplay({ product, label, screenshots, tone }: CinematicProductDisplayProps) {
  const [ref, progress] = useScrollProgress<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-product={product}
      className="relative mx-auto grid max-w-5xl gap-6 md:grid-cols-2"
      style={{
        opacity: Math.min(1, progress * 3),
        transform: `translateY(${(1 - Math.min(1, progress * 2.2)) * 24}px)`,
      }}
    >
      {screenshots.map((shot, i) => (
        <div key={shot.src} className={screenshots.length === 1 ? 'md:col-span-2' : ''}>
          <ProductScreen shot={shot} tone={tone} index={i} />
        </div>
      ))}
      <span className="sr-only">{label} product interface</span>
    </div>
  );
}
