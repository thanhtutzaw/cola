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
{      
       props.namedate
      ?
      (<li
        onClick={(e) => {
        }}
      >
        <div className="content-children">
              <div>
              <p>name={props.namedate}</p>
              
              <p>date={props.date}</p>
              </div>
        </div>
      </li>)
      : 
      (<li
        onClick={(key) => {
          // showmodalWithId(props.id)
            props.setshowmodal((showmodal) => !showmodal);
            // console.log(props.id+"from map")

            // alert(props.id)
            // console.log(props.id)
        }}
      >
        <div className="content-children">
         
          
           
              <div>
                <GrAdd className="add-btn" />
                {/* <p>{props}</p> */}
              </div>
              

          
        </div>
      </li>)
}

     
            
    </div>
  );
}

export default Lists;
