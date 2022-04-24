import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

function EditModal(props) {
  const [editnamedate, seteditnamedate] = useState("");
  const [editdate, seteditdate] = useState("");
  // const [edityear, setedityear] = useState('');
  // const [editmonth, seteditmonth] = useState("");
  // const [editday, seteditday] = useState("");
  // console.log(props.currentEditCard)
  const savedData = JSON.parse(localStorage.getItem("data"));
  useEffect(() => {
    savedData.map((item) => {
      // console.log(item.id)
      // setcurrentEditCard(item.id)

      if (item.id === props.currentEditCard) {
        seteditnamedate(item.namedate);
        seteditdate(item.date);
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

//   function callFunction(inputValue) {
//     const inputDate = new Date(inputValue); //mm dd yy
//     let input = {
//       year: inputDate.getFullYear(),
//       month: inputDate.getMonth(),
//       day: inputDate.getDate(),
//     };
//     // console.log(input.year);
//     const todayDate = new Date();

//     let dyear = todayDate.getFullYear();
//     let dmonth = todayDate.getMonth() + 1;
//     let dday = todayDate.getDate();
//     let myYear = dyear - input.year;
//     setedityear(myYear)

//     if (dmonth >= input.month) {
//       seteditmonth( dmonth - input.month);
//     } else {
//       setedityear(myYear - 1)
//       seteditmonth( 12 + dmonth - input.month);
//     }


//     if(dday >= input.day){
//     seteditday(dday - input.day);
// }
// else{
//     // seteditmonth(month - 1)
//     // let days = months[dmonth - 2];
//     let myday = dday - input.day;
//     seteditday(myday)
//     if(editmonth < 0){
//         seteditmonth(11)
//         setedityear(edityear - 1)
//     }
// }
    
//     // console.log(year);
//   }

  const submitEditHandle = () => {
    // callFunction(props.date)
    const updateDate = savedData.map((item) => {
      // const namedate = props.namedate;
      //   const date = props.date;
      // props.setnamedate(editnamedate)
      // props.setdate(editdate)

      if (item.id === props.currentEditCard) {
        // console.log(item.namedate, editnamedate);
        //  savedData.namedate = editnamedate
        //  props.setnamedate(editnamedate)

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
                  // updateEdit()
                  // setnamedate(e.target.value);
                }}
                // onChange={(e)=>{ props.setnamedate(e.target.value)}}
                // value={props.modalId}
                // onChange={(e)=>{props.setnamedate(e.target.value)}}
                autoFocus
                className="inputName"
                type="text"
                placeholder="Name"
                spellCheck="false"
                // value={props.nameDate}
                // onChange={ ()=>{value = e.target.value}}
                // value={e.target.value}
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
