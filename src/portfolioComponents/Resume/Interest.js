import React from "react";

export default function Interest(props) {
  return (
    <ul className="resume-list-details">
      {props.data.map((int) => (
        <li key={int.name}>
          <div className="resume-list-items">
            <div className="list-items">
              <div className="resume-list-text">{int.name}</div>
              <div className="project-description">{int.interest}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
