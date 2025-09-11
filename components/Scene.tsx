// src/components/Scene.tsx
'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

const Model = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  // Use Framer Motion's useScroll to get scroll progress
  const { scrollYProgress } = useScroll();

  // useFrame runs on every rendered frame
  useFrame(() => {
    // scrollYProgress.get() returns a value from 0 to 1
    // We'll link this to the mesh's rotation
    meshRef.current.rotation.x = scrollYProgress.get() * Math.PI * 2;
    meshRef.current.rotation.y = scrollYProgress.get() * Math.PI * 1.5;
  });

  return (
    <Torus ref={meshRef} args={[1.5, 0.4, 32, 100]}>
      <meshStandardMaterial color="#00ffff" roughness={0.3} />
    </Torus>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Model />
    </Canvas>
  );
};

export default Scene;