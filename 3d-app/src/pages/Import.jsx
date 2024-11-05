import React, { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { Leva, useControls } from 'leva';

function Import() {
    const navigate = useNavigate();
    const [modelUrl, setModelUrl] = useState(null); 
    const [showModel, setShowModel] = useState(false); 

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file); 
            setModelUrl(url);
            setShowModel(true);
        }
    };

    const resetImport = () => {
        setModelUrl(null);
        setShowModel(false);
    };

    return (
        <div className="import-container">
            {!showModel ? (
                <div className="import">
                    <h1>Import your 3D model (.glb)</h1>
                    <input type="file" accept=".glb" onChange={handleFileChange} />
                    <div className='back' onClick={() => navigate('/')}><h2>Go back to Nike air mag</h2></div>
                </div>
            ) : (
                <div className="model-display">
                    <Canvas style={{ height: '80vh', width: '100%' }}>
                        <ambientLight intensity={1} />
                        <directionalLight position={[0, 10, 10]} />
                        <Model url={modelUrl} />
                        <OrbitControls />
                    </Canvas>
                    <Leva collapsed />
                    <div className="import-another" onClick={resetImport}>
                        <p>Import another 3D object</p>
                    </div>
                </div>
            )}
        </div>
    );
}

function Model({ url }) {
    const { scene } = useGLTF(url); 
    const meshRef = React.useRef();

    // Leva controls
    const { x, y, scale, rotationSpeed, floatingSpeed } = useControls({
        x: { value: 0, min: -5, max: 5, step: 0.1 },
        y: { value: -0.5, min: -5, max: 5, step: 0.1 },
        scale: { value: 1, min: 0.1, max: 5, step: 0.1 },
        rotationSpeed: { value: 0.01, min: 0, max: 0.1, step: 0.01 },
        floatingSpeed: { value: 0.5, min: 0, max: 5, step: 0.1 }
    });

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += rotationSpeed;
            const time = clock.getElapsedTime();
            meshRef.current.position.y = y + Math.sin(time * floatingSpeed) * 0.5;
        }
    });

    return (
        <primitive
            ref={meshRef}
            object={scene}
            position={[x, y, -1]} 
            scale={[scale, scale, scale]} 
        />
    );
}

export default Import;
