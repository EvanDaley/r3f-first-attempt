import { OrbitControls, Loader, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

import Intro from './scenes/01_Intro';
import FrontendPreview from './scenes/02_FrontendPreview';

export default function ThreeCanvas({ sceneIndex }) {
  const scenes = [Intro, FrontendPreview] // references to components

  return (
    <>
      <Canvas colorManagement={true} invalidateFrameloop pixelRatio={[1, 2]}>

        <Suspense fallback={null}>
          {React.createElement(scenes[sceneIndex])}
        </Suspense>

        {/* <Stats /> */}
        <PerspectiveCamera makeDefault position={[8, 4, 13]} />
        <OrbitControls target={[1, 1, 0]} />

      </Canvas>

      <Loader />
    </>
  );
}

