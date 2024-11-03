import './App.css';
import ProgressBar from './components/ProgressBar.jsx';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import NikeAirMagModel from './components/Model.jsx';
import { OrbitControls, Environment } from '@react-three/drei';
import Text from './components/Text.jsx';

function App() {
  return (
    <>
      <div className="container">
        <div className="canvas-container">
          <Canvas camera={{ position: [3, 1, 2], fov: 40 }}>
            {/* Lighting */}
            <ambientLight intensity={1} />
            <directionalLight position={[2, 5, 3]} intensity={0.2} castShadow />
            <hemisphereLight skyColor="#6495ED" groundColor="#B2B2B2" intensity={0} />
            <pointLight position={[-3, 1, -3]} intensity={1} color="#6495ED" />

            {/* Environment map for reflections */}
            <Environment preset="city" background={false} />

            {/* Model and Controls */}
            <NikeAirMagModel position={[0, -0.4, -0.5]} scale={[2, 2, 2]} />
            <OrbitControls target={[0, 0, 0]} enableDamping={true} dampingFactor={0.1}/>
          </Canvas>
        </div>
        <div className="Text">
          <Text />
        </div>
      </div>
    </>
  );
}

export default App;
