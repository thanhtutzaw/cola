import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
function Header() {
  let theme;
  const [darkmode, setdarkmode] = useState(
    localStorage.getItem("dark") === "true"
  );

  if (localStorage) {
    theme = localStorage.getItem("dark");
  }
  useEffect(() => { }, [darkmode]);

  useEffect(() => {
    if (darkmode === false) {
      document.documentElement.removeAttribute("dark", "true");
    } else {
      document.documentElement.setAttribute("dark", "true");
    }
  }, [darkmode]);

  const darkmodetoggle = () => {
    if (darkmode) {
      setdarkmode((prevstate) => !prevstate);
      localStorage.setItem("dark", "false");
    } else {
      setdarkmode((prevstate) => !prevstate);
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
