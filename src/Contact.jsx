import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-form">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Your website (if exists)" />
        <textarea placeholder="How can I help?*" rows="4" />
        <button className="contact-button">Get In Touch</button>
        <div className="social-icons">
          <button className="social-btn">📘</button>
          <button className="social-btn">📸</button>
          <button className="social-btn">🐦</button>
          <button className="social-btn">🎮</button>
        </div>
      </div>
      <div className="contact-info">
        <h1>
          Let’s <strong>talk for</strong> <br />
          Something special
        </h1>
        <p>
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <p className="contact-details">
          <strong>Youremail@gmail.com</strong> <br />
          1234567890
        </p>
      </div>
    </div>
  );
};

export default Contact;
