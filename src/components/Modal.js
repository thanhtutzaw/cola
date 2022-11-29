import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import EditModal from "./EditModal";

function Modal(props) {
  const [namedate, setnamedate] = useState("");
  const [date, setdate] = useState("");
  <EditModal
    namedate={namedate}
    setnamedate={setnamedate}
    setdate={setdate}
    date={date}
  />;
  const submitHandle = () => {
    const updateDate = props.data.map((item) => {
      if (item.id === props.currentCard) {
        return { ...item, namedate, date };
      }

      else {
        return item;
      }
    });
    props.setdata(updateDate);
    toggleModal();
  };

  const toggleModal = () => {
    props.setshowmodal((showmodal) => !showmodal);
  };

  return createPortal(
    <div className="modal-parent">
      
      <div className="backdrop" onClick={toggleModal}>
      </div>

      <div className="content-modal-container">
        <div className="modal-content">
          <div className="modal-container">
            <div className="name-parent">
              <input
                onChange={(e) => {
                  setnamedate(e.target.value);
                }}
                autoFocus
                className="inputName"
                type="text"
                placeholder="Name"
                spellCheck="false"
              />
            </div>
            <div className="date-parent">
              <input
                className="date-input"
                type="date"
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              ></input>
            </div>

            <button className="submit-btn" onClick={submitHandle}>
              Submit
            </button>
          </div>
          <IoCloseOutline className="close-btn" onClick={toggleModal} />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;