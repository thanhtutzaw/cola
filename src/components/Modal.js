import React from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

function Modal({ setshowmodal, showmodal }) {
  const toggleModal = () => {
    setshowmodal((showmodal) => !showmodal);
  };
  return createPortal(
    <div className="modal-parent">
      <div
        className="backdrop"
        onClick={toggleModal} 
      >
        {/* this text is inside backdrop with black bg */}
      </div>
      <div className="modal-content">
        <h1>hay</h1>
        <IoCloseOutline className="close-btn" onClick={toggleModal} />
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
