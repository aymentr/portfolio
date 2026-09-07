import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ArchitectureNetworkProps {
  /** 0→1 visibility, driven by how "active" the ATR/Engineering chapters are. */
  intensity: number;
  origin?: [number, number, number];
  nodeCount?: number;
}

/**
 * Abstract geometric structure representing "ideas becoming systems becoming
 * products" (ATR, brief section 25) and "complex systems made understandable"
 * (Engineering, section 29). Deliberately non-literal: no code, no UI, no
 * dashboards — just nodes and connections.
 */
export function ArchitectureNetwork({ intensity, origin = [0, 0, -7], nodeCount = 14 }: ArchitectureNetworkProps) {
  const group = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      arr.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 4,
        ),
      );
    }
    return arr;
  }, [nodeCount]);

  const lineGeometry = useMemo(() => {
    const positions: number[] = [];
    nodes.forEach((n, i) => {
      const next = nodes[(i + 1) % nodes.length];
      positions.push(n.x, n.y, n.z, next.x, next.y, next.z);
      if (i % 3 === 0) {
        const cross = nodes[(i + 5) % nodes.length];
        positions.push(n.x, n.y, n.z, cross.x, cross.y, cross.z);
      }
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [nodes]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.015;
    const opacity = Math.min(intensity, 1);
    group.current.visible = opacity > 0.01;
    group.current.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        (child.material as THREE.MeshBasicMaterial).opacity = 0.5 * opacity;
      }
      if (child instanceof THREE.LineSegments) {
        (child.material as THREE.LineBasicMaterial).opacity = 0.28 * opacity;
      }
    });
  });

  return (
    <group ref={group} position={origin}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#5b7c99" transparent opacity={0} />
      </lineSegments>
      {nodes.map((n, i) => (
        <mesh key={i} position={n}>
          <icosahedronGeometry args={[0.05, 0]} />
          <meshBasicMaterial color="#dfe6ef" transparent opacity={0} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}
