import React from "react";
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
    <div
      className="content-card"
    >
      <li
      onClick={(e)=>{
        // console.log(e.target.value)
        props.setshowmodal((showmodal) => !showmodal)
      }}
        // onClick={() => {
        //   // alert('heyu')
        //   props.setshowmodal((showmodal) => !showmodal);
        // }}
      >
        <div className="content-children">
          <GrAdd className="add-btn" />
          
        </div>
        {/* <p>{props.text}</p> */}
      </li>
    </div>
  );
}

export default Lists;
