import React from 'react';
import "../stylesheets/Sponsors.css";

import mlhLogo from '../../assets/images/mlh-logo.png';
import schillerLogo from '../../assets/images/schiller-logo.png';

const Sponsors = () => {
  const sponsorList = [
    { name: 'Major League Hacking', logoSrc: mlhLogo },
    { name: 'Schiller Institute for Integrated Science and Society', logoSrc: schillerLogo },
  ];

  return (
    <div className="sponsors-container" id="Sponsors">
      <h2 className="sponsors-heading">← sponsors →</h2>
      <div className="sponsors-grid">
        {sponsorList.map(sponsor => (
          <div key={sponsor.name} className="sponsor-item">
            <div className="sponsor-logo">
              <img src={sponsor.logoSrc} alt={`${sponsor.name} Logo`} />
            </div>
            <p className="sponsor-name">{sponsor.name}</p>
          </div>
        ))}
      </div>
      <p className="sponsors-contact">
        If you'd like to sponsor this event, please contact us at{' '}
        <a href="mailto:bcssociety@gmail.com">bcssociety@gmail.com</a>
      </p>
    </div>
  );
};

export default Sponsors;