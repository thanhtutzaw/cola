import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import style from "./DeleteModal.module.css";
function DeleteModal(props) {
  const [clear, setclear] = useState();
  //   const [editnamedate, seteditnamedate] = useState("");
  //   const [editdate, seteditdate] = useState("");
  // console.log(props.currentEditCard)
  const savedData = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    savedData.map((item) => {
      // console.log(item.id)
      // setcurrentEditCard(item.id)

      if (item.id === props.currentDeleteCard) {
        // console.log(item.id, props.currentDeleteCard)
        // seteditnamedate(item.namedate);
        // seteditdate(item.date);
        // seteditnamedate(JSON.stringify(item.namedate))
        // return {...item, namedate:'',date:'' }
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
    const updateDate = savedData.map((item) => {
      // const namedate = props.namedate;
      //   const date = props.date;
      // props.setnamedate(editnamedate)
      // props.setdate(editdate)

      if (item.id === props.currentDeleteCard) {
        // console.log(item.namedate, editnamedate);
        //  savedData.namedate = editnamedate
        //  props.setnamedate(editnamedate)

        return { ...item, namedate: "", date: "" };
      } else {
        return item;
      }
    });
    localStorage.setItem("data", JSON.stringify(updateDate));
    props.setdata(updateDate);
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
                {/* <button className={[style.cancelbtn ,style.deletemodalbutton]} onClick={CancelHandle}> */}
                CANCEL
              </button>
              <button className={style.okbtn} onClick={OkHandle}>
                OK
              </button>
            </div>
          </div>
          {/* <IoCloseOutline className={style.closebtn} onClick={toggleModal} /> */}
        </div>
      </div>
    </div>,
    document.getElementById("DeleteModal")
  );
}

export default DeleteModal;
