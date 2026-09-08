import { useState } from 'react';
import { atrLogo } from '@/content/assets';

/**
 * Renders the real ATR Business Solutions logo asset, exactly as provided —
 * never recreated, redesigned or AI-generated (brief: "ATR Business
 * Solutions — Real Logo Asset"). Falls back to the company name set in the
 * site's own typography until the real file is placed at atrLogo.src, since
 * a generated stand-in logo would violate that rule.
 */
export function BrandLogo({ className = '' }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <p className={`font-display tracking-tightest text-paper ${className}`}>ATR BUSINESS SOLUTIONS</p>
    );
  }

  return (
    <img
      src={atrLogo.src}
      alt={atrLogo.alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
