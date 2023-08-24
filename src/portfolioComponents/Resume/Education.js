import React from "react";

export default function Education(props) {
  return (
    <ul className="resume-list-detailss">
      {props.data.map((edu) => (
        <li key={edu.year}>
          <div className="resume-list-items">
            <div className="list-items">
              <div className="resume-list-text">
                {edu.name}, {edu.place}
              </div>
              <div className="education">
                {edu.level} - {edu.percentage}
              </div>
            </div>
            <button className="year-button">{edu.year}</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
