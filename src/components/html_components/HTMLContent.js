// HTMLContent.js
// Throw all the raw HTML content here. This is all rendered outside the context of the canvas,
// so don't try to do anything fancy with Three.js.

import Menu from './Menu'

export default function HTMLContent({ sceneIndex }) {
  return (
    <div className="html-content-container">
      <Menu />
    </div>
  )
}