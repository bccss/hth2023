import React, { useState, useEffect, useRef } from "react";
import { Users, Github, Code, Database, Cog } from 'lucide-react';
import "../stylesheets/Events.css";

function Events() {
  const [cards] = useState([
    {
      title: "First General Meeting",
      time: new Date("2024-09-04T19:30:00"),
      text: "Kick off the semester in style! Get the inside scoop on our fall lab series, Hack-the-Heights, and our action-packed calendar for the year.",
      location: "245 Beacon St. 205",
      Icon: Users
    },
    {
      title: "Intro to GitHub",
      time: new Date("2024-09-11T19:00:00"),
      text: "Unlock the power of collaboration! Master GitHub essentials and set yourself up for success in your coding journey and future hackathons.",
      location: "245 Beacon St. 214",
      Icon: Github
    },
    {
      title: "Frontend in HTML/CSS",
      time: new Date("2024-09-18T19:00:00"),
      text: "Craft stunning web experiences! Learn to build responsive and scalable frontends that will make your applications stand out from the crowd.",
      location: "245 Beacon St. 214",
      Icon: Code
    },
    {
      title: "Backend Development",
      time: new Date("2024-09-25T19:30:00"),
      text: "Power up your apps from behind the scenes! Discover how to create robust backends that handle data, logic, and user interactions with ease.",
      location: "245 Beacon St. 205",
      Icon: Code
    },
    {
      title: "All About Databases",
      time: new Date("2024-10-02T19:00:00"),
      text: "Dive into the world of databases! Learn how to design efficient database schemas, write powerful queries, and integrate database operations into your applications.",
      location: "245 Beacon St. 214",
      Icon: Database
    }
  ]);

  const timelineRef = useRef(null);

  const shouldRenderCard = (card) => {
    return card.time > new Date();
  }

  const formatTime = (date) => {
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

  const formatDate = (date) => {
    return date.toLocaleString('en-US', { month: 'long', day: 'numeric' });
  }

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
      <h1 className="events-heading">← events →</h1>
      <div className="events-description">
        Not completely ready for a hackathon yet? No problem, attend one of our pre-hack workshops to learn all that you need.
      </div>
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline">
          {cards.filter(shouldRenderCard).map((card, index) => (
            <div key={index} className="timeline-item">
              <div className="card">
                <div className="card-header">
                  <div className="card-icon">
                    <card.Icon size={48} />
                  </div>
                  <div className="card-details">
                    <h3>{card.title}</h3>
                    <p>{formatDate(card.time) + ", " + formatTime(card.time)}</p>
                    <p>{card.location}</p>
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