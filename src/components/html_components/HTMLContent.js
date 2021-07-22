// HTMLContent.js
// Throw all the raw HTML content here. This is all rendered outside the context of the canvas,
// so don't try to do anything fancy with Three.js.

import Menu from './Menu'

export default function HTMLContent({ sceneIndex }) {
  const htmlStyle = {
    height: '100%',
    width: '100%',
    zIndex: -1000,
    position: 'absolute',
    pointerEvents: 'none'
  }

  const sceneBackgrounds = [
    'linear-gradient(90deg, #134E5E 10%, #71B280 90%)',
    'linear-gradient(90deg, #56135e 10%, #b3708d 90%)'
  ]

  return (
    <div className="html-content-container" style={
      {
        ...htmlStyle,
        backgroundImage: sceneBackgrounds[sceneIndex]
      }
    }>
      <Menu/>

    </div>
  )
}