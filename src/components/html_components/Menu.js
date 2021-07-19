// Header
// This contains the menu.

import { HamburgerButton } from "react-hamburger-button";
import React, { useState } from 'react';

function MenuContent({ setSelection }) {
  const overlayStyle = {
    pointerEvents: "auto",
    height: "100%",
    width: "100%",
    position: "fixed",
    zIndex: "1",
    top: "0",
    left: "0",
    backgroundImage: "linear-gradient(90deg, #134E5E 10%, #71B280 90%)",
    overflowX: "hidden",
    transition: "0.1s"
  }

  const overlayContentStyle = {
    position: "relative",
    top: "25%",
    width: "100%",
    textAlign: "center",
    marginTop: "48px",
    fontSize: "40px"
  }

  const buttonStyle = {
    color: "white",
    fontSize: '40px',
    background: "none",
    border: "none",
    padding: "0!important",
    fontFamily: "arial, sans-serif",
    textDecoration: "none",
    cursor: "pointer",
  }

  return (
    <div style={overlayStyle}>
      <div style={overlayContentStyle}>
        <ul>
          <ol style={overlayContentStyle}>
            <button style={buttonStyle} onClick={() => setSelection('home')}>Home</button>
          </ol>
          <ol style={overlayContentStyle}>
            <button style={buttonStyle} onClick={() => setSelection('about-me')}>About Me</button>
          </ol>
          <ol style={overlayContentStyle}>
            <button style={buttonStyle} onClick={() => setSelection('get-in-touch')}>Get in Touch</button>
          </ol>
        </ul>
      </div>
    </div>
  )
}

// TODO: Move this out into a seperate component.
function AboutMe() {
  const overlayStyle = {
    pointerEvents: "auto",
    height: "100%",
    width: "100%",
    position: "fixed",
    zIndex: "1",
    top: "0",
    left: "0",
    backgroundColor: "black",
    color: "white",
    overflowX: "hidden",
    transition: "0.1s"
  }

  const overlayContentStyle = {
    display: "flex",
    position: "relative",
    top: "25%",
    width: "100%",
    textAlign: "left",
    marginTop: "48px",
    fontSize: "25px",
  }

  return (
    <div style={overlayStyle}>
      <div style={overlayContentStyle}>
        <div style={{ width: "30%", display: "inline", textAlign: "right", marginRight: "20px" }}>
          <p>[Image]</p>
        </div>
        <div style={{ width: "50%", display: "inline" }}>
          <p>My name is Evan Daley and I'm a Lead Software Engineer at Two Barrels LLC. </p>
          <p>I consider myself to be an experienced developer, leader and architect. My strongest proficiencies are JavaScript, Vue, React, Rails, AWS, Docker, and SQL. </p>
          <p>In my free time, I like to exercise, sleep, and dig into different technologies like R, Kubernetes, GCP, and three.js. Lately I've been a bit obsessed with three.js and react-three-fiber, so thats why this site exists. </p>
        </div>
      </div>
    </div>
  )
}

export default function HTMLContent() {
  const [inMenu, setInMenu] = useState(false);
  const [selection, setSelection] = useState('');

  const handleClick = () => {
    setInMenu(!inMenu)
    setSelection('')
  }

  const headerStyle = {
    pointerEvents: "none",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: "2",
    width: "100%",
    padding: "40px",
    position: "fixed",
  };

  return (
    <>
      <div style={headerStyle}>
        <div style={{ right: "24px", pointerEvents: "auto" }}>
          <HamburgerButton
            open={inMenu}
            onClick={handleClick.bind(this)}
            width={25}
            height={20}
            strokeWidth={2.5}
            color='white'
            animationDuration={0.5}
          />
        </div>
      </div>

      {inMenu ? <MenuContent setSelection={setSelection} /> : null}
      {selection === 'about-me' ? <AboutMe /> : null}
    </>
  )
}