import { CinematicVideo } from './CinematicVideo';

interface ChapterBackdropProps {
  src?: string;
  poster?: string;
  priority?: boolean;
}

/**
 * Full-bleed Seedance environment for one chapter section. Must be
 * rendered as the first child of a `relative`-positioned section (with no
 * z-index of its own) so it paints behind that section's content purely by
 * DOM order — the same section still sits above the page's global
 * procedural WebGL scene via <main>'s stacking context, so nothing here
 * needs its own z-index. When no clip is provided yet, this renders an
 * empty, pointer-events-none div and the procedural scene behind the whole
 * page shows through untouched.
 */
export function ChapterBackdrop({ src, poster, priority }: ChapterBackdropProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <CinematicVideo
        src={src}
        poster={poster}
        priority={priority}
        className="h-full w-full object-cover opacity-70"
      />
      {/* Constant contrast scrim: text must stay readable no matter what the real footage looks like. */}
      <div className="absolute inset-0 bg-void/45" />
    </div>
  );
}
