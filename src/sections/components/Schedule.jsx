import React from 'react';
import '../stylesheets/Schedule.css';

function Schedule() {
  const saturdayEvents = [
    {
      title: 'Sign In',
      time: '11:30 am - 12 pm',
      location: '245 Beacon St. 3rd Floor',
      type: 'important',
    },
    {
      title: 'Opening Ceremony',
      time: '12 pm - 12:30 pm',
      location: '245 Beacon St. Room 501',
      type: 'important',
    },
    {
        title: 'CMT Careers Table',
        time: '12 pm - 2 pm',
        location: '245 Beacon St. 3rd Floor',
        type: 'sponsor',
    },
    {
        title: 'Dell Careers Table',
        time: '1 pm - 4 pm',
        location: '245 Beacon St. 3rd Floor',
        type: 'sponsor',
    },
    {
      title: 'Lunch',
      time: '1 pm - 1:30 pm',
      location: '245 Beacon St. 3rd Floor',
      type: 'meal',
    },
    {
        title: 'Careers In Tech Panel',
        time: '3 pm - 4 pm',
        location: '245 Beacon St. Room 501',
        type: 'workshop',
    },
    {
        title: 'Natural Language Processing Workshop',
        time: '5 pm - 6 pm',
        location: '245 Beacon St. Room 501',
        type: 'workshop',
    },
    {
      title: 'Dinner',
      time: '7 pm - 7:30 pm',
      location: '245 Beacon St. 3rd Floor',
      type: 'meal',
    },
    {
        title: 'The Social Network Movie Screening',
        time: '10 pm - 12 am',
        location: '245 Beacon St. Room 107',
        type: 'social',
    },
  ];

  const sundayEvents = [
      {
        title: 'Breakfast',
        time: '8:30 am - 9:00 am',
        location: '245 Beacon St. 1st Floor',
        type: 'meal',
      },
      {
        title: 'Project Submission Deadline',
        time: '12:30 pm',
        location: 'Devpost',
        type: 'important',
      },
      {
        title: 'Project Showcase',
        time: '12:30 pm - 1:30 pm',
        location: '245 Beacon St. Room 107',
        type: 'important',
      },
      {
        title: 'Winners Announced',
        time: '2:00 pm',
        location: '245 Beacon St. Room 107',
        type: 'important',
      },
  ];

  const renderEvent = (event) => {
    return (
      <div className={`event-item event-${event.type}`} key={event.title}>
        <h3>{event.title}</h3>
        <p>{event.time} | {event.location}</p>
      </div>
    );
  };

  return (
    <div className="schedule-container" id="Schedule">
      <h1>← schedule →</h1>
      <div className="schedule-key">
        <div className="key-item">
          <div className="key-color key-important"></div> Important Times
        </div>
        <div className="key-item">
          <div className="key-color key-workshop"></div> Workshops
        </div>
        <div className="key-item">
          <div className="key-color key-social"></div> Social Activities
        </div>
        <div className="key-item">
          <div className="key-color key-sponsor"></div> Sponsor Tables
        </div>
        <div className="key-item">
          <div className="key-color key-meal"></div> Meals
        </div>
      </div>
      <div className="schedule-columns">
        <div className="schedule-day">
          <h2>Saturday 10/5</h2>
          {saturdayEvents.map(renderEvent)}
        </div>
        <div className="schedule-day">
          <h2>Sunday 10/6</h2>
          {sundayEvents.map(renderEvent)}
        </div>
      </div>
    </div>
  );
}

export default Schedule;