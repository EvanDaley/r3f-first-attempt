import LinesRobot from './objects/LinesRobot'
import AbstractSphere from './objects/AbstractSphere'
import { OrbitControls, Stats, Stage, Loader, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect, Suspense } from 'react';

export default function ThreeCanvas() {
  const environmentOptions = [
    'sunset',
    'dawn',
    'night',
    'warehouse',
    'forest',
    'apartment',
    'studio',
    'city',
    'park',
    'lobby',
  ]

  const [count, setCount] = useState(0);

  // Experiment - Changing scenes every 1 second:
  // useEffect(() => {
  //   setInterval(
  //     () => { setCount(1) },
  //     2000
  //   )

  //   setTimeout(
  //     () => { 
  //       setInterval(
  //         () => { setCount(0) },
  //         2000
  //       )
  //       setCount(0)
  //      },
  //     1000
  //   )
  // }, []);

  return (
    <>
      <Canvas colorManagement={true} invalidateFrameloop pixelRatio={[1, 2]}>
        <PerspectiveCamera makeDefault position={[1, 6, 10]} />

        {/* <directionalLight position={[-10, -10, -5]} intensity={1} /> */}
        {/* <ambientLight /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}

        <Suspense fallback={null}>
          <Stage adjustCamera={false} environment={environmentOptions[0]} intensity={.5} contactShadow={true} shadows={true}>
            { count === 0 ? <LinesRobot /> : null }
            { count === 1 ? <AbstractSphere /> : null }
            {/* <AbstractSphere/> */}
          </Stage>
        </Suspense>

        {/* <Stats /> */}
        <OrbitControls target={[0, 1, 0]} />
      </Canvas>

      <Loader />
    </>
  );
}

