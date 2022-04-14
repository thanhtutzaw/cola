import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
// import Ripples from "react-ripples";
// import Modal from "./Modal";

// const MyRipples = createRipples({
//   color: 'purple',
//   during:450,
// })
function Lists(props) {
  // let isnull = props.isnull;
  // const [showmodal, setshowmodal] = useState(isnull);

  return (
    <div className="content-card">
      <li
        onClick={(e) => {
          props.setshowmodal((showmodal) => !showmodal);
        }}
      >
        <div className="content-children">
          {/* <GrAdd className="add-btn" /> */}
          <div>
            {props.item == null ? (
              <div>
              <p>null</p>
            </div>
            ) : (
              <div>
                <p>id={props.id}</p>
                <p>name={props.nameDate}</p>
                <p>date={props.date}</p>
              </div>
              
            )}
          </div>
        </div>
      </li>

      {/* )} */}
    </div>
  );
}

export default Lists;
