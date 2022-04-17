import React,{useEffect, useState} from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
// import { ReactDOM } from "react-dom";
// import Outside from "./Outside";

function Tools(props) {
  const [opentools, setopentools] = useState(false);
  // const { ref, isComponentVisible } = useComponentVisible(true);

  // useEffect(() => {
  //   document.addEventListener('click',()=>{
      
  //   })
  //   return () => {
      
  //   };
  // }, []);

  const handleTools = () => {
    setopentools(prevstate => !prevstate);

  };
  // document.onclick(()=>{
    // setopentools( (opentools)=> !opentools);
    // alert('clicked')

  // })



  return (
    // <Outside>
    <nav>
      <MdModeEdit className="nav-icon" onClick={handleTools} />

      {opentools && (
        <div className="tools-parent">
          <div className="tools-container">
            <div><MdModeEdit className="edit-btn" /><span>Edit</span></div>
            <div><MdDelete className="delte-btn" /><span>Delete</span></div>
          </div>
        </div>
      ) }
    </nav>

    // </Outside>

// <div ref={ref}>
// {isComponentVisible && 
// (
// <nav>
//     //   <MdModeEdit className="nav-icon" onClick={handleTools} />

//     //   {opentools && (
//         <div className="tools-parent">
//           <div className="tools-container">
//             <div><MdModeEdit className="edit-btn" /><span>Edit</span></div>
//             <div><MdDelete className="delte-btn" /><span>Delete</span></div>
//           </div>
//         </div>
//       ) }
//     </nav>
// )}
// </div>
  );
}

export default Tools;
