import React, { useState } from "react";
import "./Header.css";
import download from "./assets/download.png";
import logo from "./assets/logo 1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="header">
        <div className="class">
          <img src={logo} className="personal" alt="logo"></img>
          <strong className="personal1">Personal</strong>
        </div>
        <div className={`taskbar ${menuOpen ? "open" : ""}`}>
          <h4>About Me</h4>
          <h4>Skills</h4>
          <h4>Projects</h4>
          <h4>Contact Me</h4>
          <div className="button">
            Resume
            <span>
              <img src={download} alt="logo"></img>
            </span>
          </div>
        </div>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
      </div>
    </div>
  );
};

export default Header;
