import React, { useEffect, useState } from "react";
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
  const editButtonHandle = () => {
    props.setshoweditmodal((showeditmodal)=> !showeditmodal)
  }
  const handleTools = () => {
    props.setcurrentEditCard(props.id);
    setopentools((prevstate) => !prevstate);
  };
  // document.onclick(()=>{
  // setopentools( (opentools)=> !opentools);
  // alert('clicked')

  // })

  return (
    <>
      

      <div className="dropdown">
        <nav className={opentools ? "nav-active" : ""}>
          <div className="nav-icon-parent" onClick={handleTools}>
            <MdModeEdit className="nav-icon" />
          </div>
        </nav>

        {opentools && (
          <div className="tools-parent">
            <div className="tools-container">
              <div onClick={editButtonHandle} className="edit-parent">
                <MdModeEdit className="edit-btn" />
                <span>Edit</span>
              </div>
              <div className="delete-parent">
                <MdDelete className="delte-btn" />
                <span>Delete</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Tools;
