import React from 'react';
import "../stylesheets/Sponsors.css"

// Need to be updated for 2024 
import auth0Logo from '../../assets/images/auth0-logo.png';
import fidelityInvestmentsLogo from '../../assets/images/fidelity-investments-logo.png';
import goDaddyRegistryLogo from '../../assets/images/godaddy-registry-logo.png';
import googleLogo from '../../assets/images/google-logo.png';
import hederaLogo from '../../assets/images/hedera-logo.png';
import kintoneLogo from '../../assets/images/kintone-logo.png';
import mlhLogo from '../../assets/images/mlh-logo.png';
import mongoDBLogo from '../../assets/images/mongodb-logo.png';
import mysteriousLogo from '../../assets/images/mysterious-logo.png';
import schillerLogo from '../../assets/images/schiller-logo.png';
import starknetLogo from '../../assets/images/starknet-logo.png';

// Need to be updated for 2024
const Sponsors = () => {
  const sponsorList = [
    { name: 'Sponsor', logoSrc: auth0Logo },
    { name: 'Sponsor', logoSrc: fidelityInvestmentsLogo },
    { name: 'Sponsor', logoSrc: goDaddyRegistryLogo },
    { name: 'Sponsor', logoSrc: googleLogo },
    { name: 'Sponsor', logoSrc: hederaLogo },
    { name: 'Sponsor', logoSrc: kintoneLogo },
    { name: 'Sponsor', logoSrc: mlhLogo },
    { name: 'Sponsor', logoSrc: mongoDBLogo },
    { name: 'Sponsor', logoSrc: mysteriousLogo },
    { name: 'Sponsor', logoSrc: schillerLogo },
    { name: 'Sponsor', logoSrc: starknetLogo },
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