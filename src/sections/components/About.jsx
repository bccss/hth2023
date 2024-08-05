import React from "react";
import { FaRegLightbulb, FaHandshake, FaLaptopCode } from "react-icons/fa";
import "../stylesheets/About.css";

function About() {
  return (
    <div className="about-container" id="About">
      <h1 className="about-heading">about!</h1>
      <p className="about-description">
        Join us on October 5th to 6th for a weekend of hacking, learning, and exploration!
      </p>
      <div className="icon-container">
        <div className="icon-card">
          <FaRegLightbulb size={50} color="var(--secondary-background-color)" />
          <p className="icon-text">Innovation</p>
          <p className="card-description">
            Develop innovative software or hardware in a team or as an individual.
          </p>
        </div>
        <div className="icon-card">
          <FaHandshake size={50} color="var(--secondary-background-color)" />
          <p className="icon-text">Community</p>
          <p className="card-description">
            Build enduring connections in the Boston College CS community.
          </p>
        </div>
        <div className="icon-card">
          <FaLaptopCode size={50} color="var(--secondary-background-color)" />
          <p className="icon-text">Learning</p>
          <p className="card-description">
            Enhance your technical skills and bring creative ideas to life in your project. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
