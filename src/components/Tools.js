import React, { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
// import { ReactDOM } from "react-dom";
// import Outside from "./Outside";
function Tools(props) {
  const [opentools, setopentools] = useState(false);
  const editButtonHandle = () => {
    props.setshoweditmodal((showeditmodal) => !showeditmodal)
    setopentools((prevstate) => !prevstate);
  }
  const deleteButtonHandle = () => {
    props.setshowdeletemodal((prevstate) => !prevstate)
    setopentools((prevstate) => !prevstate);
  }
  const handleTools = () => {
    props.setcurrentEditCard(props.id);
    props.setcurrentDeleteCard(props.id);
    setopentools((prevstate) => !prevstate);
  }
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
              <div onClick={deleteButtonHandle} className="delete-parent">
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
