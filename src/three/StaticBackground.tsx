/**
 * Non-WebGL fallback used under prefers-reduced-motion. Keeps the dark,
 * architectural mood and a single static point of light without any
 * camera movement, particle drift, or animation.
 */
export function StaticBackground() {
  return (
    <div
      className="fixed inset-0 z-0 bg-void"
      aria-hidden="true"
      style={{
        background:
          'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(238,244,255,0.10), transparent 60%), radial-gradient(ellipse 120% 80% at 50% 100%, rgba(91,124,153,0.08), transparent 70%), #08090b',
      }}
    />
  );
}
