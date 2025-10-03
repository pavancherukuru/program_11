import React from "react";
import "./Experience.css";
import Google from "./assets/google.png";
import Youtube from "./assets/youtube.png";
import Apple from "./assets/apple.png";

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="experience-heading">
        My <strong>Experience</strong>
      </h2>
      <div className="experience-cards">
        <div className="experience-card">
          <div className="experience-header">
            <img src={Google} alt="Google logo" className="experience-logo" />
            <div className="experience-title-date">
              <h4 className="job-title">Lead Software Engineer at Google</h4>
              <span className="job-date">Nov 2019 - Present</span>
            </div>
          </div>
          <p className="job-description">
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <img src={Youtube} alt="Youtube logo" className="experience-logo" />
            <div className="experience-title-date">
              <h4 className="job-title">Software Engineer at Youtube</h4>
              <span className="job-date">Jan 2017 - Oct 2019</span>
            </div>
          </div>
          <p className="job-description">
            At Youtube, I served as a Software Engineer, focusing on the design
            and implementation of backend systems for the social media giant's
            dynamic platform. Working on projects that involved large-scale data
            processing and user engagement features, I leveraged my expertise to
            ensure seamless functionality and scalability.
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <img src={Apple} alt="Apple logo" className="experience-logo" />
            <div className="experience-title-date">
              <h4 className="job-title">Junior Software Engineer at Apple</h4>
              <span className="job-date">Jan 2016 - Dec 2017</span>
            </div>
          </div>
          <p className="job-description">
            During my tenure at Apple, I held the role of Software Architect,
            where I played a key role in shaping the architecture of
            mission-critical software projects. Responsible for designing
            scalable and efficient systems, I provided technical leadership to a
            cross-functional team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
