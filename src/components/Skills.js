import React from "react";

export default function Skill({ skill }) {
  return (
    <div className="container">
      <div className="skill">
        <h2 className="sub-header">Skills:</h2>
        <div className="sk">
          <ul className="list-items">{skill}</ul>
        </div>
      </div>
    </div>
  );
}
