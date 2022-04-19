import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

function DeleteModal(props) {
//   const [editnamedate, seteditnamedate] = useState("");
//   const [editdate, seteditdate] = useState("");
  // console.log(props.currentEditCard)
  const savedData = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    savedData.map((item) => {
      // console.log(item.id)
      // setcurrentEditCard(item.id)

      if (item.id === props.currentEditCard) {
        // seteditnamedate(item.namedate);
        // seteditdate(item.date);
        // seteditnamedate(JSON.stringify(item.namedate))
        // return {...item, editnamedate,editdate }
      }
      // seteditnamedate(item.namedate)

      // return {...item, namedate,date}
      else {
        // seteditnamedate("no")

        return item;
      }
      // seteditnamedate(editnamedate)
      // console.log(item.id,item.namedate,item.date)
    });
  }, []);

  const OkHandle = () => {
    // const updateDate = savedData.map((item) => {
    //   // const namedate = props.namedate;
    //   //   const date = props.date;
    //   // props.setnamedate(editnamedate)
    //   // props.setdate(editdate)

    //   if (item.id === props.currentEditCard) {
    //     console.log(item.namedate, editnamedate);
    //     //  savedData.namedate = editnamedate
    //     //  props.setnamedate(editnamedate)

    //     return { ...item, namedate: editnamedate, date: editdate };
    //   } else {
    //     return item;
    //   }
    // });
    // localStorage.setItem("data", JSON.stringify(updateDate));
    // props.setdata(updateDate)
    toggleModal();
  };
  const CancelHandle = () => {
    toggleModal();
  };

  const toggleModal = () => {
    props.setshowdeletemodal((prevstate) => !prevstate);
  };

  return createPortal(
    <div className="modal-parent">
      <div className="backdrop" onClick={toggleModal}>
        {/* this text is inside backdrop with black bg */}
      </div>
      <div className="content-modal-container">
        <div className="modal-content">
          <div className="modal-container">
Are you sure to Delete ?
            <button className="submit-btn" onClick={CancelHandle}>
              CANCEL
            </button>
            <button className="submit-btn" onClick={OkHandle}>
              OK
            </button>
          </div>
          {/* <IoCloseOutline className="close-btn" onClick={toggleModal} /> */}
        </div>
      </div>
    </div>,
    document.getElementById("DeleteModal")
  );
}

export default DeleteModal;
