import React from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
// import { createRipples } from "react-ripples"; 
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/';
// import TextField from '@mui/material/TextField/TextField';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import Stack from '@mui/material/Stack/Stack';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Button, Page, setOptions } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

function Modal({ children, text, setshowmodal, showmodal }) {
  const [openPicker, setOpenPicker] = React.useState(false);
    const [date, setDate] = React.useState(new Date());
    
    const show = () => {
        setOpenPicker(true);
    };
    
    const onClose = () => {
        setOpenPicker(false);
    };
    
    const inputProps = {
        className: 'md-mobile-picker-input',
        placeholder: 'Please Select...'
    };
    
    const boxInputProps = {
        className: 'md-mobile-picker-box-label',
        inputStyle: 'box',
        placeholder: 'Please Select...'
    };
    
  // const [value, setValue] = useState<Date | null>(
  //   new Date('2014-08-18T21:11:54')
  // );
  // const Ripples = createRipples({
  //   color: "white",
  //   during: 450,
  // });

  // const handleChange = (newValue: Date | null) => {
  //   setValue(newValue);
  // };
  const toggleModal = () => {
    setshowmodal((showmodal) => !showmodal);
  };
  return createPortal(
    <div className="modal-parent">
      <div className="backdrop" onClick={toggleModal}>
        {/* this text is inside backdrop with black bg */}
      </div>
      <div className="modal-content">
        <div className="modal-container">
        <div className="name-parent">
          <label>Name</label>
          <input autoFocus className="inputName" type="text" placeholder="Name" spellCheck="false" />
        </div>
        <div className="date-parent">
        <Page>
            <div className="mbsc-grid">
                <div className="mbsc-form-group">
                    <div className="mbsc-row">
                        <div className="mbsc-col-12">
                            {/* <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker with any inputs & show on focus/click</div> */}
                            <Datepicker controls={['date']} inputComponent="input" inputProps={inputProps} />
                        </div>
                    </div>
                </div>
                <div className="mbsc-form-group">
                    {/* <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-txt-muted md-mobile-picker-header">Disable <code>onClick/onFocus</code> and only show on button</div>
                        <div className="mbsc-col-8">
                            <Datepicker controls={['date']} inputComponent="input" inputProps={inputProps} showOnClick={false} showOnFocus={false} isOpen={openPicker} onClose={onClose} defaultValue={date} />
                        </div>
                        <div className="mbsc-col-4">
                            <Button variant="outline" color="primary" className="md-mobile-picker-button" onClick={show}>Show picker</Button>
                        </div>
                    </div> */}
                </div>
                {/* <div className="mbsc-form-group">
                    <div className="mbsc-row">
                        <div className="mbsc-col-12">
                            <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker with a Mobiscroll input</div>
                            <Datepicker  controls={['date']} inputProps={boxInputProps} />
                        </div>
                    </div>
                </div> */}
                {/* <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker inline in any page</div> */}
            </div>
            {/* <div className="md-mobile-picker-inline">
                <Datepicker display="inline" controls={['date']} />
            </div> */}
        </Page>
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
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
