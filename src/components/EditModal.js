import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

function EditModal(props) {
  const [editnamedate, seteditnamedate] = useState("");
  const [editdate, seteditdate] = useState("");
  const savedData = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    savedData.map((item) => {
      if (item.id === props.currentEditCard) {
        seteditnamedate(item.namedate);
        seteditdate(item.date);
      }
      else {
        return item;
      }

    });
  }, []);
  const submitEditHandle = () => {
    const updateDate = savedData.map((item) => {

      if (item.id === props.currentEditCard) {
        return { ...item, namedate: editnamedate, date: editdate };
      } else {
        return item;
      }
    });
    localStorage.setItem("data", JSON.stringify(updateDate));
    props.setdata(updateDate)
    toggleModal();
  };
  const backdropHandle = () => {
    submitEditHandle()
  }
  const toggleModal = () => {
    props.setshoweditmodal((prevstate) => !prevstate);
  };

  return createPortal(
    <div className="modal-parent">
      <div className="backdrop" onClick={backdropHandle}>
        {/* this text is inside backdrop with black bg */}
      </div>
      <div className="content-modal-container">
        <div className="modal-content">
          <div className="modal-container">
            <div className="name-parent">
              <input
                value={editnamedate}
                onChange={(e) => {
                  seteditnamedate(e.target.value);
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
                value={editdate}
                className="date-input"
                type="date"
                onChange={(e) => {
                  seteditdate(e.target.value);
                  // callFunction(e.target.value)
                }}
              ></input>
            </div>
            <button className="submit-btn" onClick={submitEditHandle}>
              Submit
            </button>
          </div>
          <IoCloseOutline className="close-btn" onClick={toggleModal} />
        </div>
      </div>
    </div>,
    document.getElementById("EditModal")
  );
}

export default EditModal;
