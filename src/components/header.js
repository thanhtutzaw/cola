import React, { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
function Header({ darkmode, setdarkmode }) {
  let theme;
  if (localStorage) {
    theme = localStorage.getItem("dark");
  }
  const darkmodetoggle = () => {
    //  setdarkmode((darkmode)=> !darkmode)
    // (theme == true) ? setdarkmode(theme) : setdarkmode(theme)
    // console.log(theme)
    // setdarkmode((darkmode) => !darkmode);
    // console.log(theme)
    // setdarkmode( localStorage.getItem('dark'))
    if (darkmode) {
      setdarkmode((darkmode) => !darkmode);
      // console.log('changed to light mode')
      // if(theme == 'false'){

      //   document.documentElement.removeAttribute('dark','true')
      // }
      document.documentElement.removeAttribute('dark','true')
      localStorage.setItem("dark", false);
    } else {
      setdarkmode((darkmode) => !darkmode);
      // console.log('changed to dark mode')
      document.documentElement.setAttribute('dark','true')
      localStorage.setItem("dark", true);
    }
    // if(theme == false){
    //   document.documentElement.removeAttribute('dark','true')
    // }
    // if(theme == 'true'){
    //   alert('true')
    //   document.documentElement.removeAttribute('dark','true')

    // }
  };
// let documentElement = document.documentElement.hasAttribute('dark','true')
  return (
    <header className="row">
      <h1 className="logo">Cola</h1>
      {theme == "false" ? (
        <MdLightMode onClick={darkmodetoggle} className="button light-icon" />
      ) : (
        <MdDarkMode onClick={darkmodetoggle} className="button dark-icon" />
      )}

      {/* {darkmode ? (
        <MdLightMode onClick={darkmodetoggle} className="button light-icon" />
      ) : (
        <MdDarkMode onClick={darkmodetoggle} className="button dark-icon" />
      )} */}
    </header>
  );
}

export default Header;
