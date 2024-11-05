import React, { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

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

    const predefinedPosition = [0, -0.5, -1]; 
    const predefinedScale = [1, 1, 1]; 

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01; 

            const time = clock.getElapsedTime();
            meshRef.current.position.y = Math.sin(time) * 0.5; 
        }
    });

    return <primitive ref={meshRef} object={scene} position={predefinedPosition} scale={predefinedScale} />;
}

export default Import;
