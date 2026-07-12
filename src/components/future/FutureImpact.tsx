"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import { useStore } from "@/store/useStore";
import * as THREE from "three";

function NetworkNodes() {
  const reducedMotion = useStore((state) => state.reducedMotion);
  const groupRef = useRef<THREE.Group>(null);

  const nodes: { pos: [number, number, number], label: string, color: string }[] = [
    { pos: [0, 2, 0], label: "Human Wellbeing", color: "#9A6BFF" },
    { pos: [-2, -1, 1], label: "Sustainable Growth", color: "#65F5B5" },
    { pos: [2, -1, 1], label: "Responsible Intelligence", color: "#39E7FF" },
    { pos: [0, -2, -1], label: "Planetary Exploration", color: "#FFB86B" }
  ];

  const lines = [
    [0, 1], [0, 2], [1, 2], [1, 3], [2, 3]
  ];

  useFrame((state, delta) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={groupRef}>
      {lines.map(([start, end], i) => (
        <Line 
          key={i}
          points={[nodes[start].pos, nodes[end].pos]} 
          color="#ffffff" 
          opacity={0.2} 
          transparent 
          lineWidth={1}
        />
      ))}
      
      {nodes.map((node, i) => (
        <group key={i} position={node.pos}>
          <mesh>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshBasicMaterial color={node.color} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshBasicMaterial color={node.color} transparent opacity={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function FutureImpact() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center py-24 bg-brand-surface overflow-hidden border-t border-brand-white/10">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <NetworkNodes />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        </Canvas>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 relative z-10 pointer-events-none text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-brand-white">
          THE FUTURE IS NOT <br className="hidden md:block" /> ONE INVENTION
        </h2>
        <p className="text-xl text-brand-muted max-w-2xl mx-auto">
          It is a network of choices, systems, communities, and technologies working together.
        </p>
      </div>
    </section>
  );
}
