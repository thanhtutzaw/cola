import React,{useEffect, useState} from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
// import { ReactDOM } from "react-dom";
// import Outside from "./Outside";

function Tools() {
  const [opentools, setopentools] = useState(false);

  // const { ref, isComponentVisible } = useComponentVisible(true);

  // useEffect(() => {
  //   document.addEventListener('click',()=>{
      
  //   })
  //   return () => {
      
  //   };
  // }, []);

  const handleTools = () => {
    setopentools((prevstate)=>!prevstate);
    

  };
  // document.onclick(()=>{
    // setopentools( (opentools)=> !opentools);
    // alert('clicked')

  // })



  return (
    // <Outside>
    <div className="dropdown">
    <nav className={opentools ? 'nav-active' : ''}>
      <div className="nav-icon-parent" onClick={handleTools}>
      <MdModeEdit className="nav-icon"  />

      </div>
    </nav>

      {opentools && (
        <div className="tools-parent">
          <div className="tools-container">
            <div className="edit-parent"><MdModeEdit className="edit-btn" /><span>Edit</span></div>
            <div className="delete-parent"><MdDelete className="delte-btn" /><span>Delete</span></div>
          </div>
        </div>
      ) }
</div>
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
