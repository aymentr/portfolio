import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PointOfLightProps {
  /** 0→1 position along the whole-site travel path. */
  progress: number;
}

/**
 * THE POINT OF LIGHT — the single recurring visual element described in
 * brief section 12. It represents an idea, and travels the entire site:
 * Aymen → ATR → Denora → LegalSnap → Engineering → Aymen → Future.
 */
export function PointOfLight({ progress }: PointOfLightProps) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const target = useRef(new THREE.Vector3());

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(2.6, 0.6, -3.5), // hero — beside Aymen, clear of the headline
        new THREE.Vector3(1.6, 0.8, -4), // founder intro — the idea sets off
        new THREE.Vector3(-2.2, 1.4, -7), // ATR — into the ecosystem
        new THREE.Vector3(2.6, -0.6, -9), // Denora — calm, human
        new THREE.Vector3(-2.8, 0.9, -11), // LegalSnap — structured, colder
        new THREE.Vector3(0, 2.1, -13), // engineering — converges upward
        new THREE.Vector3(-1.4, 0.2, -10), // back to Aymen
        new THREE.Vector3(0.6, 0.6, -6), // philosophy
        new THREE.Vector3(0, 0, -3), // future — fills the frame
      ]),
    [],
  );

  useFrame((state, delta) => {
    const p = curve.getPointAt(Math.min(Math.max(progress, 0.0001), 0.9999));
    target.current.lerp(p, 1 - Math.pow(0.001, delta));
    group.current?.position.copy(target.current);

    if (core.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.2) * 0.08;
      core.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={group}>
      <pointLight color="#eef4ff" intensity={5} distance={10} decay={2} />
      <mesh ref={core}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#f7faff" toneMapped={false} />
      </mesh>
      {/* Layered additive halo — a cheap, physically-plausible glow without a postprocessing pipeline. */}
      <mesh scale={3.2}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#dbe7f5" transparent opacity={0.35} depthWrite={false} toneMapped={false} />
      </mesh>
      <mesh scale={7}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#9db3c9" transparent opacity={0.16} depthWrite={false} toneMapped={false} />
      </mesh>
      <mesh scale={9}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#5b7c99" transparent opacity={0.05} depthWrite={false} toneMapped={false} />
      </mesh>
    </group>
  );
}
