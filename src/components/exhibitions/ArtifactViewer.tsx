"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial, Sparkles } from "@react-three/drei";
import { useStore } from "@/store/useStore";
import * as THREE from "three";
import { Exhibition } from "@/lib/data/exhibitions";

function AbstractModel({ themeColor, type }: { themeColor: string; type: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Group>(null);
  const reducedMotion = useStore((state) => state.reducedMotion);

  useFrame((state, delta) => {
    if (!meshRef.current || !coreRef.current || reducedMotion) return;
    
    // Base slow rotation on inner core
    coreRef.current.rotation.y += delta * 0.2;
    coreRef.current.rotation.x += delta * 0.1;

    // Pointer-based tilt (approx 5-8 degrees) on outer group
    const targetX = (state.pointer.y * Math.PI) / 24;
    const targetY = (state.pointer.x * Math.PI) / 24;

    // Lerp towards the target rotation for smooth feel
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.1);
  });

  return (
    <group ref={meshRef}>
      <Float speed={reducedMotion ? 0 : 2} rotationIntensity={reducedMotion ? 0 : 0.5} floatIntensity={reducedMotion ? 0 : 1}>
        <group ref={coreRef}>
          {type === "01" && (
            <mesh>
              <torusGeometry args={[1.5, 0.4, 16, 100]} />
              <meshStandardMaterial color={themeColor} wireframe opacity={0.6} transparent />
            </mesh>
          )}
          {type === "02" && (
            <mesh>
              <octahedronGeometry args={[2, 2]} />
              <MeshWobbleMaterial color={themeColor} factor={reducedMotion ? 0 : 1} speed={reducedMotion ? 0 : 2} />
            </mesh>
          )}
          {type === "03" && (
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color={themeColor} wireframe />
            </mesh>
          )}
          {type === "04" && (
            <mesh>
              <torusKnotGeometry args={[1, 0.3, 100, 16]} />
              <meshStandardMaterial color={themeColor} metalness={0.8} roughness={0.2} />
            </mesh>
          )}
          {type === "05" && (
            <mesh>
              <sphereGeometry args={[1.5, 32, 32]} />
              <meshStandardMaterial color={themeColor} transparent opacity={0.8} />
            </mesh>
          )}
        </group>
      </Float>
      {!reducedMotion && (
        <Sparkles count={50} scale={5} size={2} speed={0.4} color={themeColor} />
      )}
    </group>
  );
}

export function ArtifactViewer({ exhibition }: { exhibition: Exhibition }) {
  return (
    <div className="w-full h-full relative group" data-interactive="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color={exhibition.theme.accent} />
        <AbstractModel themeColor={exhibition.theme.accent} type={exhibition.number} />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none rounded-2xl border border-brand-white/10 group-hover:border-brand-white/30 transition-colors duration-500 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]" />
    </div>
  );
}
