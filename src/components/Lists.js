import React ,{useState} from "react";
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
  const [birthday, setbirthday] = useState("");
  return (
    <div
      className="content-card"
    >
      {(birthday) ?
      (<li
      // onClick={(e)=>{
        // console.log(e.target.value)
        // props.setshowmodal((showmodal) => !showmodal)
      // }}
      >
        <div className="content-children">
            {birthday}
        </div>

      </li>)
      : (<li
        onClick={(e)=>{
          // console.log(e.target.value)
          props.setshowmodal((showmodal) => !showmodal)
        }}
        >
          <div className="content-children">
            <GrAdd className="add-btn" />
            
          </div>
  
        </li>)

      }
    </div>
  );
}

export default Lists;
