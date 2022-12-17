import React from "react";
import "../styles/About.css";
import Avatar from "../assets/profile.jpg";

import Resume from "../assets/resume.pdf";
function About() {
  return (
    <div className="contentBackground">
      <div className="contentOne">
        <div
          className="imageSize"
          style={{ backgroundImage: `url(${Avatar})` }}
        ></div>
        <a href={Resume} target="_blank" download="resume">
          <button id="download">Download Resume</button>
        </a>
      </div>
      <div className="contentText">
        <h1>Frontend Developer.</h1>
        <h3>i'm George, Frontend Developer </h3>
        <p>
          Hello! i am freelancer Front-End Web Developer from Georgia, Tbilisi.{" "}
          <br />
          I enjoy building everything from small business sites to rich <br />
          interactive web apps, i'm excited to make the leap and continue <br />
          refining my skills with the right company.
        </p>
      </div>
    </div>
  );
}

export default About;
