import { Component, type ReactNode } from 'react';
import { StaticBackground } from '@/three/StaticBackground';

interface Props {
  children: ReactNode;
}

interface State {
  failed: boolean;
}

/**
 * Guards the WebGL background. If the browser can't create a WebGL context
 * (older devices, WebGL disabled, some in-app browsers) the three.js Canvas
 * throws during mount — without a boundary that error unwinds the whole
 * React tree and the entire page renders blank. Here we catch it and fall
 * back to the static gradient + point of light, so the site's content is
 * always visible regardless of GPU capability.
 */
export class BackgroundBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    // Non-fatal: the page stays fully usable on the static fallback.
    console.warn('WebGL background unavailable, using static fallback.', error);
  }

  render() {
    if (this.state.failed) return <StaticBackground />;
    return this.props.children;
  }
}
