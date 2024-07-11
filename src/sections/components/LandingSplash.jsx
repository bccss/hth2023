import React from 'react';
import '../stylesheets/LandingSplash.css';

// Needs to be updated for 2024
const LandingSplash = () => {

  const handleRegisterClick = () => {
    // Redirects the user to the Google Form
    window.open("", "_blank");
  };

  return (
    <div className="landing-splash-container">
      <div className="content-wrapper">
        <div className="year">2024</div>
        <div className="title">
          <span className="hack">Hack</span>
          <span className="the"> the </span>
          <span className="heights">Heights</span>
        </div>
        <div className="info">
          <span className="bc">Boston College</span>
          <span className="date">
            <span className="desktop-date">Date</span>
            <span className="mobile-date">Date</span>
          </span>
        </div>
        <button className="register" onClick={handleRegisterClick}>Deprecated</button>
      </div>
    </div>
  );
};

export default LandingSplash;
