import { useState } from 'react';
import { portrait } from '@/content/assets';

interface PortraitProps {
  className?: string;
}

/**
 * Renders Aymen's real photograph. Per the brief's absolute rule, no
 * AI-generated substitute is ever used here — if the real file is not yet
 * present at the configured path, a restrained placeholder silhouette is
 * shown instead of a fabricated face.
 */
export function Portrait({ className = '' }: PortraitProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-graphite ${className}`}
        role="img"
        aria-label="Portrait of Aymen Troudi — photograph not yet provided"
      >
        <div className="flex flex-col items-center gap-3 text-mist/50">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.2" />
            <path d="M4 20c1.8-4 5-6 8-6s6.2 2 8 6" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <p className="text-xs tracking-widest2">PORTRAIT PENDING</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={portrait.src}
      alt={portrait.alt}
      loading="eager"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
