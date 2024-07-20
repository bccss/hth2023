import React, { useState, useEffect, useRef } from "react";
import "../stylesheets/Events.css";

import firstMeeting from '../../assets/icons/firstmeeting.png';
import frontend from '../../assets/icons/html.png';
import githubIcon from '../../assets/icons/github.png';
import flask from '../../assets/icons/flask.png';
import MySQL from '../../assets/icons/mysql.png';

function Events() {
  const [cards] = useState([
    {
      title: "First General Meeting",
      time: "September 4th",
      text: "Learn about Hack the Heights and our club! ",
      imgSrc: firstMeeting
    },
    {
      title: "Intro to GitHub",
      time: "September 11th",
      text: "Learn about how to use GitHub, specifically for your future hackathon project!",
      imgSrc: githubIcon
    },
    {
      title: "Frontend in HTML/CSS",
      time: "September 18th",
      text: "Learn all about how to make a responsive, and scaleable frontend for a web application",
      imgSrc: frontend
    },
    {
      title: "Backend in Flask",
      time: "September 25th",
      text: "Learn how to extract, transform, and load data in a user facing application",
      imgSrc: flask
    },
    {
      title: "All About Databases",
      time: "October 2nd",
      text: "Leverage MySQL to store, update, and delete your own data",
      imgSrc: MySQL
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
      <div className="events-description">Not completely ready for a hackathon yet? Not problem, attend one of our pre-hack workshops to learn all that you need.</div>
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
