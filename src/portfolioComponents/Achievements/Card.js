import React from 'react';

export default function Card(props) {
  return (
    <div className="project-card-container">
      <div className="face face1">
        <div className="shine"> </div>
        <div className="project-image-container">
          <img
            src={require(`../../assets/Achievements/${props.data.image}`)}
            alt={props.data.name}
          />
        </div>
      </div>
      <div className="face face2">
        <div className="project-description-container">
          {props.data.description}
        </div>
        <div className="project-button-container">
          <a href={props.data.demo}>
            <button className="live-demo-button"> Live Demo </button>
          </a>
          <a href={props.data.code}>
            <button className="github-button"> Code </button>
          </a>
        </div>
      </div>
    </div>
  );
}
