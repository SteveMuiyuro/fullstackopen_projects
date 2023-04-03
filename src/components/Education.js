import React from "react";
export default function Education({ school, year, course }) {
  return (
    <div className="container">
      <div className="education">
        <h2 className="sub-header">Education</h2>
        <div className="edu">
          <h3>School: </h3> {school}
          <h3>Course: </h3> {course}
          <h3>Year: </h3> {year}
        </div>
        <hr />
      </div>
    </div>
  );
}
