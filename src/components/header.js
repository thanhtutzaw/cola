import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
function Header({ darkmode, setdarkmode }) {

  const darkmodetoggle = () => {
    setdarkmode((darkmode) => !darkmode);
    if(darkmode){
        console.log('changed to light mode')
    }
    else{
        
        console.log('changed to dark mode')
    }
  };

  return (
    <header className="row">
      <h1 className="logo">Cola</h1>

      {darkmode ? (
        <MdLightMode onClick={darkmodetoggle} className="button light-icon" />
      ) : (
        <MdDarkMode onClick={darkmodetoggle} className="button dark-icon" />
      )}
    </header>
  );
}

export default Header;
