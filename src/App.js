import './App.css';
import Monkey from './components/Monkey'
import { OrbitControls, Stats, Html, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react'

// Environment options:
//   sunset
//   dawn
//   night
//   warehouse
//   forest
//   apartment
//   studio
//   city
//   park
//   lobby

function App() {
  return (
    <>
      <Canvas colorManagement={true} invalidateFrameloop pixelRatio={[1, 2]} camera={{ position: [0, 0, 2.75] }}>
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Suspense fallback={<Html>loading..</Html>}>
          <Stage environment="sunset" intensity={.5} contactShadow={true} shadows={true}>
            <Monkey />

          </Stage>
        </Suspense>
        <Stats />
      </Canvas>
    </>
  );
}

export default App;
