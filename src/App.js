import './App.css';
import ThreeCanvas from './components/three_components/ThreeCanvas'
import HTMLContent from './components/html_components/HTMLContent'
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setInterval(
  //     () => { setCount(1) },
  //     3000
  //   )

  //   setTimeout(
  //     () => { 
  //       setInterval(
  //         () => { setCount(0) },
  //         3000
  //       )
  //       setCount(0)
  //      },
  //     1500
  //   )
  // }, []);

  return (
    <>
      <HTMLContent sceneIndex={count}/>
      <ThreeCanvas sceneIndex={count}/>
    </>
  );
}

export default App;
