"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useStore } from "@/store/useStore";
import * as THREE from "three";

function RotatingCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const reducedMotion = useStore((state) => state.reducedMotion);

  useFrame((state, delta) => {
    if (!meshRef.current || reducedMotion) return;
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={reducedMotion ? 0 : 2} rotationIntensity={reducedMotion ? 0 : 1} floatIntensity={reducedMotion ? 0 : 2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial
          color="#39E7FF"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh scale={0.8}>
        <icosahedronGeometry args={[2, 2]} />
        <MeshDistortMaterial
          color="#5271FF"
          distort={reducedMotion ? 0 : 0.4}
          speed={reducedMotion ? 0 : 2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export function HeroArtifact() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#39E7FF" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#9A6BFF" />
        <RotatingCore />
      </Canvas>
    </div>
  );
}
