import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { ParticleField } from './ParticleField';
import { PointOfLight } from './PointOfLight';
import { ArchitectureNetwork } from './ArchitectureNetwork';
import { useGlobalScrollProgress, chapterIntensity } from '@/context/ScrollProgressContext';

function Rig({ progress }: { progress: number }) {
  const { camera, mouse } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    // Slow controlled forward dolly across the whole page — never a sudden cut.
    const z = 6 - progress * 10;
    camera.position.z += (z - camera.position.z) * 0.04;
    camera.position.x += (mouse.x * 0.35 - camera.position.x) * 0.02;
    camera.position.y += (mouse.y * 0.2 - camera.position.y) * 0.02;

    target.current.set(0, 0, camera.position.z - 6);
    camera.lookAt(target.current);
  });

  return null;
}

function SceneContents() {
  const progress = useGlobalScrollProgress();
  const atrIntensity = chapterIntensity('atr', progress);
  const engineeringIntensity = chapterIntensity('engineering', progress);
  const isCompact = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      <color attach="background" args={['#08090b']} />
      <fogExp2 attach="fog" args={['#08090b', 0.055]} />
      <ambientLight intensity={0.15} />
      <Rig progress={progress} />
      <ParticleField count={isCompact ? 350 : 900} />
      <PointOfLight progress={progress} />
      <ArchitectureNetwork intensity={atrIntensity} origin={[-1.5, 0.5, -7]} nodeCount={isCompact ? 8 : 14} />
      <ArchitectureNetwork
        intensity={engineeringIntensity}
        origin={[1.2, -0.3, -13]}
        nodeCount={isCompact ? 10 : 20}
      />
    </>
  );
}

/**
 * Fixed full-viewport WebGL background that runs behind the entire page,
 * standing in for the Seedance cinematic environments until real footage is
 * composited in. One continuous scene, not per-section clips — the "one
 * visual universe" the brief calls for (section 03).
 */
export function CinematicScene() {
  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        dpr={[1, typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 1.5]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        camera={{ fov: 45, position: [0, 0, 6] }}
      >
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
    </div>
  );
}
