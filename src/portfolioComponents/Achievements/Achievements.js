import React from 'react';
import './Achievements.css';
import Line from '../Line/Line';
import data from '../Resume/data';
import Card from './Card';

export default function Achievements(props) {
  return (
    <div className="achievements-container" id="achievements">
      <div className="header-container">
        <h1>{props.header}</h1>
        <h5>{props.subheader}</h5>
      </div>
      <Line></Line>
      <div className="projects-container">
        {data.projects.map((proj, i) => (
          <div key={i}>
            <Card data={proj}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}
