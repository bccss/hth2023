import React, { useEffect, useRef } from 'react';
import "../stylesheets/Sponsors.css";

import mlhLogo from '../../assets/images/mlh-logo.png';
import schillerLogo from '../../assets/images/schiller-logo.png';

const Sponsors = () => {
  const sponsorList = [
    { name: 'Sponsor1', logoSrc: mlhLogo },
    { name: 'Sponsor2', logoSrc: schillerLogo },
    // Add more sponsors as needed
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const sponsorLogos = scrollRef.current;
    let scrollAmount = 0;

    const scrollSponsors = () => {
      scrollAmount += 1; // Adjust speed by changing this value
      sponsorLogos.scrollLeft = scrollAmount;
      if (scrollAmount >= sponsorLogos.scrollWidth - sponsorLogos.clientWidth) {
        scrollAmount = 0;
      }
      requestAnimationFrame(scrollSponsors);
    };

    scrollSponsors();
  }, []);

  return (
    <div className="section" id="Sponsors">
      <div className="sponsors-container">
        <div className="row-sponsor">
          <h1 id="sponsor-header">sponsors</h1>
          <div className="container">
            <div id="sponsor-logos" ref={scrollRef}>
              {sponsorList.map(sponsor => (
                <div key={sponsor.name} className="sponsor-logo-container">
                  <img src={sponsor.logoSrc} alt={`${sponsor.name} Logo`} />
                </div>
              ))}
            </div>
          </div>
          <p className="description">
            If you'd like to sponsor this event, please contact us at &nbsp;
            <a href="mailto:bccss@gmail.com">bccssociety@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
