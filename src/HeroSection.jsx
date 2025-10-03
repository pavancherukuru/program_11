import React from "react";
import "./Hero.css";

import Banner from "./assets/Banner.png";

const HeroSection = () => {
  return (
    <section>
      <div className="banner">
        <h4>
          Hello I'm <span>Evren Shah.</span>
          <br />
          Frontend Developer Based in<span>India</span>.
        </h4>
        <p className="text">
          I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </p>
      </div>
      {/* Removed social buttons as per user request */}
      <div className="banner2">
        <div className="banner1">
          <img src={Banner} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
