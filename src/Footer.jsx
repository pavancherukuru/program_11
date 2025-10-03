import React from "react";
import "./footer.css";
import personalIcon from "./assets/logo 1.png"; // example icon path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <button className="personal-button">
          <img
            src={personalIcon}
            alt="Personal Icon"
            className="personal-icon"
          />
          Personal
        </button>
      </div>
      <div className="footer-right">
        <p>@ 2019-2023 Personal</p>
        <p>Made in Figma</p>
      </div>
    </footer>
  );
};

export default Footer;
