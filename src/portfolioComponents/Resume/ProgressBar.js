import React from "react";

export default function ProgressBar({ progress }) {
  const Parentdiv = {
    height: "2.5vh",
    width: "100%",
    backgroundColor: "#dadada",
    borderRadius: 50,
  };

  const Childdiv = {
    height: "80%",
    width: `${progress}%`,
    backgroundColor: "#1e1f30",
    borderRadius: 40,
    padding: "1.5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const progresstext = {
    fontSize: "0.8rem",
    color: "#ffffff",
    fontWeight: 400,
  };
  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
}
