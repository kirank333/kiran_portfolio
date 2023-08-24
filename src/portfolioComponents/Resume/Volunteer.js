import React from "react";

export default function Volunteer(props) {
  return (
    <ul className="resume-list-detailss">
      {props.data.map((vol) => (
        <li key={vol.year}>
          <div className="resume-list-items">
            <div className="list-items">
              <div className="resume-list-text">{vol.name}</div>
              <div className="education">{vol.level}</div>
            </div>
            <button className="year-button">{vol.year}</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
