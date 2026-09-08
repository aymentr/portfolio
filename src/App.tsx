import { lazy, Suspense } from 'react';
import { ScrollProgressProvider } from '@/context/ScrollProgressContext';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { StaticBackground } from '@/three/StaticBackground';
import { BackgroundBoundary } from '@/components/BackgroundBoundary';
import { Nav } from '@/components/Nav';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { Hero } from '@/sections/Hero';
import { Founder } from '@/sections/Founder';
import { ATR } from '@/sections/ATR';
import { Denora } from '@/sections/Denora';
import { LegalSnap } from '@/sections/LegalSnap';
import { Engineering } from '@/sections/Engineering';
import { About } from '@/sections/About';
import { Philosophy } from '@/sections/Philosophy';
import { Contact } from '@/sections/Contact';

// The WebGL scene (three.js + @react-three/fiber) is the heaviest slice of
// the bundle — load it lazily so the first paint stays fast (brief section
// 38). A static gradient with the point of light stands in until it's ready.
const CinematicBackground = lazy(() =>
  import('@/three/CinematicBackground').then((m) => ({ default: m.CinematicBackground })),
);

function Experience() {
  useSmoothScroll();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <BackgroundBoundary>
        <Suspense fallback={<StaticBackground />}>
          <CinematicBackground />
        </Suspense>
      </BackgroundBoundary>
      <ScrollProgressBar />
      <Nav />
      <main id="main" className="relative z-10">
        <Hero />
        <Founder />
        <ATR />
        <Denora />
        <LegalSnap />
        <Engineering />
        <About />
        <Philosophy />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  return (
    <ScrollProgressProvider>
      <Experience />
    </ScrollProgressProvider>
  );
}
