/**
 * Synchronous WebGL capability probe. react-three-fiber's <Canvas> builds
 * its own internal renderer root, so a failure to create a WebGL context
 * throws outside the main React tree's error boundaries and takes the whole
 * page down. Detecting support up front lets us render the static fallback
 * instead of ever mounting the Canvas on a device that can't support it.
 */
export function supportsWebGL(): boolean {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    return gl != null;
  } catch {
    return false;
  }
}
