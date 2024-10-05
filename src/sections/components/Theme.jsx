import React from "react";
import { Recycling, People, Favorite, School, Security, Store } from '@mui/icons-material';
import "../stylesheets/Theme.css";

function Theme() {
  const subthemes = [
    {
      title: "Sustainable Living",
      description: "Creating eco-friendly solutions for a greener, healthier future.",
      Icon: Recycling
    },
    {
      title: "Inclusive Communities",
      description: "Fostering belonging and ensuring everyone’s voice is heard.",
      Icon: People
    },
    {
      title: "Neighborhood Health",
      description: "Addressing the physical and mental well-being of the local population.",
      Icon: Favorite
    },
    {
      title: "Local Education",
      description: "Providing tools and platforms for enriching educational opportunities in the community.",
      Icon: School
    },
    {
      title: "Community Safety",
      description: "Innovating ways to make our local spaces safer and more connected.",
      Icon: Security
    },
    {
      title: "Small Business Support",
      description: "Empowering local entrepreneurs and building strong economies at the neighborhood level.",
      Icon: Store
    }
  ];

  const projectIdeas = [
    {
      title: "Sustainability Apps",
      description: "Develop apps or tools to encourage eco-friendly living at the local level, like waste reduction or community-driven recycling programs."
    },
    {
      title: "Community Volunteer Networks",
      description: "Build a platform that connects people to local volunteer opportunities, helping neighborhoods grow stronger together."
    },
    {
      title: "Neighborhood Well-Being Dashboard",
      description: "Create tools to monitor and improve key aspects of local life, from public health to safety and happiness."
    },
    {
      title: "Local Skill Exchange",
      description: "Launch a system where neighbors can exchange services and skills, strengthening community bonds."
    },
    {
      title: "Revitalizing Hometown Heritage",
      description: "Design ways to preserve local history or enhance the cultural footprint of your community."
    }
  ];

  return (
    <div className="container" id="Theme">
      <h1 className="theme-heading">&larr; theme &rarr;</h1>
      <div className="theme-description">
        <h1><strong>PARADISE BEGINS HERE</strong></h1>
        <p>
          At Boston College, we are called to <strong>"set the world aflame"</strong> through acts of service, leadership, and innovation. But before we can ignite global change, we must <strong>start with our own communities.</strong> <strong>Paradise Begins Here</strong> is a challenge to create solutions that make a tangible difference in our local surroundings, knowing that the flames of positive change can spread from <strong>one neighborhood to the next.</strong> Whether it's improving local education, building sustainable initiatives, or fostering inclusive communities, paradise begins with small, purposeful actions <strong>right here at home.</strong>
        </p>
      </div>
      <div className="subthemes-container">
        <h3>Subthemes</h3>
        <div className="subthemes">
          {subthemes.map((subtheme, index) => (
            <div key={index} className="subtheme-card">
              <div className="subtheme-icon">
                <subtheme.Icon style={{ fontSize: 50 }} />
              </div>
              <h4>{subtheme.title}</h4>
              <p>{subtheme.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="project-directions-container">
        <h3>Potential Project Directions</h3>
        <ul className="project-ideas">
          {projectIdeas.map((idea, index) => (
            <li key={index}>
              <strong>{idea.title}:</strong> {idea.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Theme;