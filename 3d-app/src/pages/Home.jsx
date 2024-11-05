import React, { useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import NikeAirMagModel from '../components/Model.jsx';
import { OrbitControls, Environment } from '@react-three/drei';
import Text from '../components/Text.jsx';

function Home() {
  const cameraPositions = [
    [3, 1, -1],
    [0, 1, 3],
    [3, 1, 2],
    [0, 2, -4],
    [-3, 1, 2],
    [-2, -1, 1],
    [2, 0, 2],
  ];

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = parseInt(entry.target.dataset.index);
          setCurrentSection(sectionIndex);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll("#info");

    sections.forEach((section, index) => {
      section.setAttribute("data-index", index);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <div className="canvas-container">
        <Canvas camera={{ position: cameraPositions[0], fov: 40 }}>
          {/* Lighting */}
          <ambientLight intensity={1} />
          <directionalLight position={[2, 5, 3]} intensity={0.2} castShadow />
          <hemisphereLight skyColor="#6495ED" groundColor="#B2B2B2" intensity={0} />
          <pointLight position={[-3, 1, -3]} intensity={1} color="#6495ED" />

          {/* Environment map for reflections */}
          <Environment preset="city" background={false} />

          {/* Model and Controls */}
          <NikeAirMagModel position={[0, -0.4, -0.5]} scale={[2, 2, 2]} />
          <OrbitControls target={[0, 0, 0]} enableDamping={true} dampingFactor={0.1} />

          {/* Update camera position based on currentSection */}
          <CameraController targetPosition={cameraPositions[currentSection]} />
        </Canvas>
      </div>
      <div className="Text">
        <Text />
        <div className='end'>
          <h2>Import your 3D model <a href="/import">Here</a></h2>
        </div>
      </div>
    </div>
  );
}

function CameraController({ targetPosition }) {
  const { camera } = useThree();

  useFrame(() => {
    if (camera) {
      camera.position.lerp(
        { x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] },
        0.1
      );
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  });

  return null;
}

export default Home;
