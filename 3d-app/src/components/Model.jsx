import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function NikeAirMagModel(props) {
  const { scene } = useGLTF(import.meta.env.BASE_URL + 'src/assets/NikeAirMag/shoe.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.y = -0.4 + Math.sin(time * 2) * 0.1;
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.metalness = 1;
          child.material.roughness = 0;
        }
      });
    }
  }, []);

  return (
    <primitive
      ref={meshRef}
      object={scene}
      {...props}
    />
  );
}
