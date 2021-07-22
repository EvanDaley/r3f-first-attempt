import LinesRobot from './objects/LinesRobot'
import Stork from './objects/Stork'
import Monkey from './objects/Monkey'
import AbstractSphere from './objects/AbstractSphere'
import { OrbitControls, Stats, Stage, Loader, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react'

export default function ThreeCanvas2() {
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

  return (
    <>
      <Canvas colorManagement={true} invalidateFrameloop pixelRatio={[1, 2]}>
        <PerspectiveCamera makeDefault position={[1, 6, 10]} />

        {/* <directionalLight position={[-10, -10, -5]} intensity={1} /> */}
        {/* <ambientLight /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}

        <Suspense fallback={null}>
          <Stage adjustCamera={false} environment={environmentOptions[0]} intensity={.5} contactShadow={true} shadows={true}>
            {/* <LinesRobot /> */}
            <AbstractSphere/>
            {/* <Stork/> */}
            {/* <Monkey/> */}
          </Stage>
        </Suspense>

        {/* <Stats /> */}
        <OrbitControls target={[0, 1, 0]} />
      </Canvas>

      <Loader />
    </>
  );
}

