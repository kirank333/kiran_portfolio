import React from "react";
import ProgressBar from "./ProgressBar";

export default function Programming(props) {
  return (
    <ul className="resume-list-details">
      {props.data.map((pro) => (
        <li key={pro.name}>
          <div className="resume-list-items">
            <div className="list-items">
              <div className="resume-list-text">{pro.name}</div>
             
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
