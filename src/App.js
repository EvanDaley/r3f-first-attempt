import './App.css';
import ThreeCanvas from './components/three_components/ThreeCanvas'
import ThreeCanvas2 from './components/three_components/ThreeCanvas2'
import HTMLContent from './components/html_components/HTMLContent'

import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(
      () => {setCount(1)},
      4000
    )

    setTimeout(
      () => {setCount(0)},
      9000
    )
  }, []);

  return (
    <>
      <HTMLContent />
      {/* <ThreeCanvas /> */}
      { count === 0 ? <ThreeCanvas/>  : null}
      { count === 1 ? <ThreeCanvas2/>  : null}
    </>
  );
}

export default App;
