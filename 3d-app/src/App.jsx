import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import NikeAirMagModel from './components/Model.jsx';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <>
      {/* 3D Model Canvas */}
      <div className="canvas-container">
        <Canvas camera={{ position: [3, 1, 0], fov: 50 }}>
          {/* Ambient Light */}
          <ambientLight intensity={0.6} />
          {/* Directional Light */}
          <directionalLight position={[2, 5, 2]} intensity={1} castShadow />
          {/* Point Light */}
          <pointLight position={[-3, 1, -3]} intensity={0.5} color="#FFD700" />

          {/* Model and Controls */}
          <NikeAirMagModel position={[0, -0.5, 0]} scale={[2, 2, 2]}  />
          <OrbitControls />
        </Canvas>
      </div>
      <div>
        
      </div>

    </>
  );
}

export default App;
