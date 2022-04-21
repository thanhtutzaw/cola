import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
function Header() {
  // const [darkmode, setdarkmode] = useState(
  //   localStorage.getItem("dark") === "true"
  // );
  let theme;
  const [darkmode, setdarkmode] = useState(
    localStorage.getItem("dark") === "true"
    // localStorage.getItem('dark')
  );

  if (localStorage) {
    theme = localStorage.getItem("dark");
  }
 
    // if (theme === "true") {
    //   document.documentElement.setAttribute("dark", "false");
    // } else {
    //   document.documentElement.setAttribute("dark", "true");
    // }
  
  // useEffect(() => {
  //   if (theme === "true") {
  //     document.documentElement.setAttribute("dark", "false");
  //   } else {
  //     document.documentElement.setAttribute("dark", "true");
  //   }
  // }, []);
  // useEffect(() => {
  //   console.log(theme)
  //   if (theme === "false") {
  //     document.documentElement.setAttribute("dark", "false");
  //   } else {
  //     document.documentElement.setAttribute("dark", "true");
  //   }
  // }, [theme]);

  useEffect(() => {}, [darkmode]);

  useEffect(() => {
    // localStorage.setItem("dark", darkmode);

    if (darkmode === false) {
      document.documentElement.removeAttribute("dark", "true");
      // localStorage.setItem('dark','false')
    } else {
      document.documentElement.setAttribute("dark", "true");
      // localStorage.setItem('dark','true')
    }
  }, [darkmode]);

  const darkmodetoggle = () => {
    if (darkmode) {
      // alert('false')
      setdarkmode((prevstate) => !prevstate);
      // document.documentElement.removeAttribute("dark", "true");
      localStorage.setItem("dark", "false");
    } else {
      // alert('true')
      setdarkmode((prevstate) => !prevstate);
      // document.documentElement.setAttribute("dark", "true");
      localStorage.setItem("dark", "true");
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
