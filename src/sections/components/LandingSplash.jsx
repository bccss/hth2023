import React, { useEffect, useState } from 'react';
import '../stylesheets/LandingSplash.css';
import background from '../../assets/images/background.svg';

const LandingSplash = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-10-06') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <div className="landing-splash-container">
        <div className="content-wrapper">
          <div className="paradise">
            <span className="paradise-text">paradise</span>
          </div>
          <div className="subtitle">Boston College's Annual Hackathon</div>
          <div className="subtitle">October 5-6</div>
        </div>
        {/* <div className="countdown-widget">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div> */}
      </div>
    </div>
  );
};

export default LandingSplash;
