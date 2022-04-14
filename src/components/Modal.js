import React, { useState } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

function Modal(props) {
  const toggleModal = () => {
    props.setshowmodal((showmodal) => !showmodal);
  };

  return createPortal(
    <div className="modal-parent">
      <div className="backdrop" onClick={toggleModal}>
        {/* this text is inside backdrop with black bg */}
      </div>
      <div className="content-modal-container">
        <div className="modal-content">
          <div className="modal-container">
            <div className="name-parent">
              <input
                autoFocus
                className="inputName"
                type="text"
                placeholder="Name"
                spellCheck="false"
              />
            </div>
            <div className="date-parent">
              <input className="date-input" type="date"></input>
            </div>

            <button className="submit-btn">Submit</button>
          </div>
          <IoCloseOutline className="close-btn" onClick={toggleModal} />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
