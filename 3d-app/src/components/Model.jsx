import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export default function NikeAirMagModel(props) {
  const { scene } = useGLTF(import.meta.env.BASE_URL + 'src/assets/NikeAirMag/shoe.gltf');
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      

      // Apply metallic and shiny properties to the model's materials
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
