import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function NikeAirMagModel(props) {
  const { scene } = useGLTF(import.meta.env.BASE_URL + 'src/assets/NikeAirMag/shoe.gltf');
  const meshRef = useRef();

  // Floating animation
  useEffect(() => {
    const floatingAnimation = () => {
      if (meshRef.current) {
        meshRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.1; // Change the multiplier to adjust floating height
      }
      requestAnimationFrame(floatingAnimation);
    };
    floatingAnimation();
  }, []);

  // Scroll-based animation
  useFrame((state) => {
    const scrollY = state.camera.position.y; // You might want to map this to your scroll position
    if (meshRef.current) {
      // Example: Rotate the model based on scroll position
      meshRef.current.rotation.y += scrollY * 0.00; // Adjust multiplier for rotation speed
    }
  });

  return <primitive ref={meshRef} object={scene} scale={[2, 2, 2]} {...props} />;
}
