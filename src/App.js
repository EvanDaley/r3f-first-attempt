import './App.css';
import Box from './components/Box';
import Stork from './Stork'
import { OrbitControls, Stats, Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react'

function App() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Suspense fallback={<Html>loading..</Html>}>
          <Stork/>
        </Suspense>

        <Box position={[1.2, 0, 0]} />
        <Box position={[-1.2, 2.2, 0]} />
        <Box position={[1.2, 2.2, 0]} />
        <Stats />
      </Canvas>
    </>
  );
}

export default App;
