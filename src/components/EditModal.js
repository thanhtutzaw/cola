import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

function EditModal(props) {
  const [editnamedate, seteditnamedate] = useState('');
  const [editdate, seteditdate] = useState('');
  // console.log(props.currentEditCard)
  const savedData = JSON.parse(localStorage.getItem('data'))
  useEffect(() => {
    savedData.map( (item)=> {

      // console.log(item.id)
      // setcurrentEditCard(item.id)

      if(item.id === props.currentEditCard){
        seteditnamedate(item.namedate)
        seteditdate(item.date)
        // seteditnamedate(JSON.stringify(item.namedate))
        // return {...item, editnamedate,date } 
        
      }
          // seteditnamedate(item.namedate)
          
        // return {...item, namedate,date}
      else {
        // seteditnamedate("no")

        return item;
      }
      // seteditnamedate(editnamedate)
      // console.log(item.id,item.namedate,item.date)
    }) 
  }, []);
  const submitEditHandle = () => {
    
    const updateDate = savedData.map( item => {
      if(item.id === props.currentEditCard){
       localStorage.setItem('data',editnamedate,editdate)
        return {...item, editnamedate,editdate}
      }else {
        return item;
      }
    })
    // props.setdata(updateDate)
    toggleModal()

  };

  const toggleModal = () => {
    props.setshoweditmodal((prevstate)=> !prevstate)

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
              value={editnamedate}
                onChange={(e) => {
                  seteditnamedate(e.target.value)
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
                  seteditdate(e.target.value)
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
