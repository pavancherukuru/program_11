import React from "react";
import Git from "./assets/icon-git.png";
import Js from "./assets/icon-javscript.png";
import sass from "./assets/icon-sass.png";
import storybook from "./assets/icon-storybook.png";
import nest from "./assets/icon-nest.png";
import socket from "./assets/icon-socket.png";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills-section">
      <h1>
        My<strong>Skills</strong>
      </h1>
      <div className="skills-grid">
        <div className="skills-row">
          <button>
            <img src={Git} alt="logo" />
            Git
          </button>
          <button>
            <img src={Js} alt="logo" />
            Javascript
          </button>
          <button>
            <img src={sass} alt="logo" />
            Sass
          </button>
          <button>
            <img src={nest} alt="logo" />
            Next js
          </button>
          <button>
            <img src={storybook} alt="logo" />
            Storybook
          </button>
        </div>
        <div className="skills-row">
          <button>
            <img src={nest} alt="logo" />
            Next Js
          </button>
          <button>
            <img src={Git} alt="logo" />
            Git
          </button>
          <button>
            <img src={storybook} alt="logo" />
            Storybook
          </button>
          <button>
            <img src={socket} alt="logo" />
            Socket
          </button>
          <button>
            <img src={sass} alt="logo" />
            Sass
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
