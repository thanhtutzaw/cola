import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import style from "./DeleteModal.module.css";
function DeleteModal(props) {
  const [clear, setclear] = useState();
  const savedData = JSON.parse(localStorage.getItem("data"));
  useEffect(() => {
    savedData.map((item) => {
      if (item.id === props.currentDeleteCard) {
      }
      else {
        return item;
      }
    });
  }, []);
  const OkHandle = () => {
    const updateDate = savedData.map((item) => {
      if (item.id === props.currentDeleteCard) {
        return { ...item, namedate: "", date: "" };
      } else {
        return item;
      }
    });
    localStorage.setItem("data", JSON.stringify(updateDate));
    props.setdata(updateDate);
    toggleModal();
  };
  const CancelHandle = () => {
    toggleModal();
  };
  const toggleModal = () => {
    props.setshowdeletemodal((prevstate) => !prevstate);
  };
  return createPortal(
    <div className={style.modalparent}>
      <div className={style.backdrop} onClick={toggleModal}>
        {/* this text is inside backdrop with black bg */}
      </div>
      <div className={style.contentmodalcontainer}>
        <div className={style.modalcontent}>
          <div className={style.modalcontainer}>
            Are you sure you want to Delete ?
            <div className={style.btnContainer}>
              <button className={style.cancelbtn} onClick={CancelHandle}>
                Cancel
              </button>
              <button className={style.okbtn} onClick={OkHandle}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("DeleteModal")
  );
}
export default DeleteModal;
