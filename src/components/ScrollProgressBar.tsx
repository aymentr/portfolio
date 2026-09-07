import { useGlobalScrollProgress } from '@/context/ScrollProgressContext';

/** Subtle top-of-viewport progress line — the only chrome besides the nav. */
export function ScrollProgressBar() {
  const progress = useGlobalScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-40 h-px w-full bg-white/5" aria-hidden="true">
      <div
        className="h-full bg-paper/70"
        style={{ width: `${progress * 100}%`, transition: 'width 0.1s linear' }}
      />
    </div>
  );
}
