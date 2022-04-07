import React from "react";
import { GrAdd } from "react-icons/gr";

function Lists(props) {
  return (
    <div className="content-card">
      <li>
        <GrAdd className="add-btn" />
        <p>{props.text}</p>
        <p>{props.second}</p>
      </li>
    </div>
  );
}

export default Lists;
