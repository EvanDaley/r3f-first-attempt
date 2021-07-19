// Header
// This contains the menu.

import { HamburgerButton } from "react-hamburger-button";
import React, { useState } from 'react';

function MenuContent() {
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
            <button style={buttonStyle}>Home</button>
          </ol>
          <ol style={overlayContentStyle}>
            <button style={buttonStyle}>About Me</button>
          </ol>
          <ol style={overlayContentStyle}>
            <button style={buttonStyle}>Get in Touch</button>
          </ol>
        </ul>
      </div>
    </div>
  )
}

export default function HTMLContent() {
  const [inMenu, setInMenu] = useState(false);

  const handleClick = () => setInMenu(!inMenu)

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

      {inMenu ? <MenuContent /> : null}
    </>
  )
}