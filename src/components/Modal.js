import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import EditModal from "./EditModal";

function Modal(props) {
  const [namedate, setnamedate] = useState("");
  const [date, setdate] = useState("");
  // const [year, setyear] = useState('');
  // const [month, setmonth] = useState("");
  // const [day, setday] = useState("");
  <EditModal
    namedate={namedate}
    setnamedate={setnamedate}
    setdate={setdate}
    date={date}
  />;
  // useEffect(() => {
  //   updateDate()
  // }, []);

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
//     setyear(myYear)

//     if (dmonth >= input.month) {
//       setmonth( dmonth - input.month);
//     } else {
//       setyear(myYear - 1)
//       setmonth( 12 + dmonth - input.month);
//     }


//     if(dday >= input.day){
//     setday(dday - input.day);
// }
// else{
//     // setmonth(month - 1)
//     // let days = months[dmonth - 2];
//     let myday = dday - input.day;
//     setday(myday)
//     if(month < 0){
//         setmonth(11)
//         setyear(year - 1)
//     }
// }
    
//     // console.log(year);
//   }
  const submitHandle = () => {
    // callFunction(date)
    const updateDate = props.data.map((item) => {
      if (item.id === props.currentCard) 
      {
        return { ...item, namedate, date };
      } 
      
      else 
      {
        return item;
      }
    });
    props.setdata(updateDate);

    // localStorage.setItem('name',input)
    toggleModal();
  };

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
                  // callFunction(e.target.value)
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
