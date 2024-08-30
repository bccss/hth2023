import React from "react";
import { Lightbulb, Users, Code } from 'lucide-react';
import "../stylesheets/About.css";

function About() {
  return (
    <div className="container" id="About">
      <h1 className="about-heading">about!</h1>
      <p className="about-description">
        Join us on October 5th to 6th for a weekend of hacking, learning, and exploration!
      </p>
      <div className="icon-container">
        <div className="icon-card">
          <Lightbulb size={50} />
          <h3 className="icon-text">Innovation</h3>
          <p className="card-description">
            Develop innovative software or hardware in a team or as an individual.
          </p>
        </div>
        <div className="icon-card">
          <Users size={50} />
          <h3 className="icon-text">Community</h3>
          <p className="card-description">
            Build enduring connections in the Boston College CS community.
          </p>
        </div>
        <div className="icon-card">
          <Code size={50} />
          <h3 className="icon-text">Learning</h3>
          <p className="card-description">
            Enhance your technical skills and bring creative ideas to life in your project. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;