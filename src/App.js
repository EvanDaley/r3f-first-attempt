import './App.css';
// import Monkey from './components/objects/Monkey'
import Robot from './components/objects/Robot'
import Glass from './components/objects/Glass'
import Box from './components/objects/Box'
import LoadingScreen from './components/html_scenes/LoadingScreen'
import { OrbitControls, Stats, Stage, Loader, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react'

// Environment options:
//   sunset
//   dawn
//   night
//   warehouse
//   forest
//   apartment`
//   studio
//   city
//   park
//   lobby

function App() {
  return (
    <>
      {/* <LoadingScreen/> */}

      <Canvas colorManagement={true} invalidateFrameloop pixelRatio={[1, 2]} camera={{ position: [0, 200, 2.75] }}>
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Suspense fallback={null}>
          <Stage environment="sunset" intensity={.5} contactShadow={true} shadows={true}>
          {/* <Glass></Glass> */}
            <Robot />
            {/* <Box position={[0,1,0]}/> */}
          </Stage>
        </Suspense>

        <PerspectiveCamera makeDefault />
        <OrbitControls target={[0,1,0]}/>
        <Stats />
      </Canvas>

      <Loader />
    </>
  );
}

export default App;
