import React from "react";
import "../styles/header.css";

export default function Profile({ profileSum }) {
  return (
    <div className="container">
      <div className="profile">
        <h2 className="sub-header">Profile Summary</h2>
        <p className="summary">{profileSum}</p>
        <hr />
      </div>
    </div>
  );
}
