import React, { useState, useEffect, useRef } from "react";
import "../stylesheets/Events.css";

import converseIcon from '../../assets/icons/converse.png';
import zagaranIcon from '../../assets/icons/zagaran.png';
import githubIcon from '../../assets/icons/github.png';
import swiftIcon from '../../assets/icons/swift.png';
import bobrossIcon from '../../assets/icons/bobross.png';

function Events() {
  const [cards] = useState([
    {
      title: "Workshop: GitHub",
      time: "Nov 4, 1:30 P.M. - 2:45 P.M.",
      text: "Discover how to collaborate on GitHub with hands-on examples; perfect for beginners, but open to all!",
      imgSrc: githubIcon
    },
    {
      title: "Speaker Event: Converse",
      time: "Nov 4, 2:45 P.M. - 3:30 P.M.",
      text: "Hear BC Grad and Converse Product Manager, Talia Kaplanian, dive into her career journey, the ins and outs of product management, and navigating the tech landscape!",
      imgSrc: converseIcon
    },
    {
      title: "Speaker Event: Zagaran",
      time: "Nov 4, 4:15 P.M. - 5:00 P.M.",
      text: "Join senior software engineer Noah Houghton from Zagaran as he shares insights into startup life and the world of software engineering!",
      imgSrc: zagaranIcon
    },
    {
      title: "Workshop: Swift",
      time: "Nov 4, 5:30 P.M. - 6:15 P.M.",
      text: "Dive into iOS development with Swift; tailored for intermediates, but open to all – master your app game!",
      imgSrc: swiftIcon
    },
    {
      title: "Bob Ross Painting",
      time: "Nov 4, 8:00 P.M. - 9:00 P.M.",
      text: "Channel your inner Bob Ross through Windows Paint while watching Bob Ross on Twitch – a hilarious masterpiece in the making!",
      imgSrc: bobrossIcon,
    }
  ]);

  const timelineRef = useRef(null);

  useEffect(() => {
    const options = {
      root: timelineRef.current,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1.05)';
        } else {
          entry.target.style.opacity = '0.5';
          entry.target.style.transform = 'scale(1)';
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const items = timelineRef.current.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="container" id="Events">
      <h1 className="events-heading">←workshops→</h1>
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline">
          {cards.map((card, index) => (
            <div key={index} className="timeline-item">
              <div className="card">
                <div className="card-header">
                  <div className="card-image">
                    <img src={card.imgSrc} alt={card.title} />
                  </div>
                  <div className="card-details">
                    <h3>{card.title}</h3>
                    <p>{card.time}</p>
                  </div>
                </div>
                <div className="card-content">
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
