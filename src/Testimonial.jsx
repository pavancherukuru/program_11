import React from "react";
import "./testimonial.css";
import evrenAvatar from "./assets/Frame 18.png"; // example avatar image path
import floraAvatar from "./assets/Frame 18 (1).png"; // example avatar image path
import quoteIcon from "./assets/Frame 18 (2).png"; // example quote icon image path

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h1 className="testimonial-heading">
        My <strong>Testimonial</strong>
      </h1>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="avatar-wrapper">
            <img src={evrenAvatar} alt="Evren Shah" className="avatar" />
            <img src={quoteIcon} alt="Quote Icon" className="quote-icon" />
          </div>
          <p className="testimonial-text">
            I recently had to jump on 10+ different calls across eight different
            countries to find the right owner.
          </p>
          <div className="testimonial-name">Evren Shah</div>
          <div className="testimonial-role">Designer</div>
        </div>

        <div className="testimonial-card active">
          <div className="avatar-wrapper">
            <img src={floraAvatar} alt="Flora Sheen" className="avatar" />
            <img src={quoteIcon} alt="Quote Icon" className="quote-icon" />
          </div>
          <p className="testimonial-text">
            I recently had to jump on 10+ different calls across eight different
            countries to find the right owner.
          </p>
          <div className="testimonial-name">Flora Sheen</div>
          <div className="testimonial-role">Designer</div>
        </div>

        <div className="testimonial-card">
          <div className="avatar-wrapper">
            <img src={evrenAvatar} alt="Evren Shah" className="avatar" />
            <img src={quoteIcon} alt="Quote Icon" className="quote-icon" />
          </div>
          <p className="testimonial-text">
            I recently had to jump on 10+ different calls across eight different
            countries to find the right owner.
          </p>
          <div className="testimonial-name">Evren Shah</div>
          <div className="testimonial-role">Designer</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
