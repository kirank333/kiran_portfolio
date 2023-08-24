 import React from "react";

export default function Project(props) {
  return (
    <ul className="resume-list-details">
      {props.data.map((pro) => (
        <li key={pro.name}>
          <div className="resume-list-items">
            <div className="list-items">
              <div className="resume-list-text">{pro.name}</div>
              <div className="project-description">{pro.description}</div>
            </div>
            <button className="year-button">{pro.year}</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
