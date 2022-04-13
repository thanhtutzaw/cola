import React,{useState} from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
// import { createRipples } from "react-ripples"; 
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/';
// import TextField from '@mui/material/TextField/TextField';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import Stack from '@mui/material/Stack/Stack';


function Modal() {
  const [showmodal, setshowmodal] = useState(false);

  const toggleModal = () => {
    setshowmodal((showmodal) => !showmodal);
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
          <input autoFocus className="inputName" type="text" placeholder="Name" spellCheck="false" />
        </div>
        <div className="date-parent">
        <input className="date-input" type="date"></input>
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </Stack>
        </LocalizationProvider> */}
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
