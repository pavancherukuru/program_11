import React from "react";
import "./projects.css";
import project1 from "./assets/image.png";
import project2 from "./assets/image1.png";
import project3 from "./assets/image2.png";
const Projects = () => {
  return (
    <div className="projects-section">
      <h1 className="projects-heading">
        My <strong>Projects</strong>
      </h1>
      <div className="project-item">
        <img
          src={project1}
          alt="Crypto Screener Application"
          className="project-image"
        />
        <div className="project-text">
          <div className="project-number">01</div>
          <h2 className="project-title">Crypto Screener Application</h2>
          <p className="project-description">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
          <a
            href="#"
            className="project-link"
            aria-label="Crypto Screener Application link"
          >
            Link
          </a>
        </div>
      </div>

      <div className="project-item reverse">
        <div className="project-text">
          <div className="project-number">02</div>
          <h2 className="project-title">
            Euphoria - Ecommerce (Apparels) Website Template
          </h2>
          <p className="project-description">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
          <a
            href="#"
            className="project-link"
            aria-label="Euphoria Ecommerce Website Template link"
          >
            Link
          </a>
        </div>
        <img
          src={project2}
          alt="Euphoria Ecommerce Website Template"
          className="project-image"
        />
      </div>

      <div className="project-item">
        <img
          src={project3}
          alt="Blog Website Template"
          className="project-image"
        />
        <div className="project-text">
          <div className="project-number">03</div>
          <h2 className="project-title">Blog Website Template</h2>
          <p className="project-description">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
          <a
            href="#"
            className="project-link"
            aria-label="Blog Website Template link"
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
