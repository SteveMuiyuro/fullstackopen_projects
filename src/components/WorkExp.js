import React from "react";
import "../styles/header.css";

export default function WorkExp({ company, title, period, roles }) {
  return (
    <div class="container">
      <div className="work-exp">
        <button className="work-btn">Edit</button>
        <h2 className="sub-header">Work Experience</h2>
        <div className="wex">
          <h3>Company: </h3>
          {company}
          <h3>Title: </h3>
          {title}
          <h3>Period: </h3>
          {period}
          <h3>Roles: </h3>
          {roles}
        </div>
        <hr />
      </div>
    </div>
  );
}
