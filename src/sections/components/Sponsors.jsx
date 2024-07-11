import React from 'react';
import "../stylesheets/Sponsors.css"

import mlhLogo from '../../assets/images/mlh-logo.png';
import schillerLogo from '../../assets/images/schiller-logo.png';

// Need to be updated for 2024
const Sponsors = () => {
  const sponsorList = [
    { name: 'Sponsor', logoSrc: mlhLogo },
    { name: 'Sponsor', logoSrc: schillerLogo },
    // ... add more sponsors when needed
  ];

  return (
    <div className="section" id="Sponsors">
      <div className="sponsors-container">
        <div className="row-sponsor">
          <h1 id="sponsor-header">SPONSORS</h1>
          <div className="container">
            <div id="sponsor-logos">
              {sponsorList.map(sponsor => (
                <div key={sponsor.name} className="sponsor-logo-container">
                  <img src={sponsor.logoSrc} alt={`${sponsor.name} Logo`} />
                  {/*<span className="sponsor-names">{sponsor.name}</span>*/}
                </div>
              ))}
            </div>
          </div>
          <p className="description">
            If you'd like to sponsor this event, please contact us at &nbsp;
            <a href="mailto:bccss@gmail.com">
              bccssociety@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;