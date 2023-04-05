import React from "react";
export default function SummaryInput() {
  return (
    <form>
      <p className="info-header">Edit your Personal Information:</p>
      <div className="personal-input">
        <div className="label">
          <lable htmlFor="name">Profile Summary:</lable>
          <textarea placeholder="Enter summary" className="summary-input" />
        </div>
        <button className="summary-btn">Submit</button>
      </div>
    </form>
  );
}
