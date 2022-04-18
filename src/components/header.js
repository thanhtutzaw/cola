import React, {useState,useEffect} from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
function Header() {

  const [darkmode, setdarkmode] = useState(
    localStorage.getItem("dark") === "true"
  );
  let theme;
  if (localStorage) {
    theme = localStorage.getItem("dark");
  }
  useEffect(() => {
    if (theme === "true") {
      // alert(`${theme} from local is dark-true`)
      document.documentElement.removeAttribute("dark", "true");
    } else {
      // alert(`${theme} dark-false from local is `)
      document.documentElement.setAttribute("dark", "true");
    }
  }, [theme]);
  
  useEffect(() => {
    if (darkmode === true) {
      document.documentElement.removeAttribute("dark", "true");
    } else {
      document.documentElement.setAttribute("dark", "true");
    }
  }, [darkmode]);

  useEffect(() => {
    localStorage.setItem("dark", darkmode);
  }, [darkmode]);

  
  if (localStorage) {
    theme = localStorage.getItem("dark");
  }
  const darkmodetoggle = () => {
    if (darkmode) {
      setdarkmode((darkmode) => !darkmode);
      document.documentElement.removeAttribute("dark", "true");
      localStorage.setItem("dark", false);
    } else {
      setdarkmode((darkmode) => !darkmode);
      document.documentElement.setAttribute("dark", "true");
      localStorage.setItem("dark", true);
    }
  };

  return (
    <header className="row">
      <h1 className="logo">Cola</h1>
      {theme === "false" ? (
      <MdLightMode onClick={darkmodetoggle} className="button light-icon" />
      ) : (
        <MdDarkMode onClick={darkmodetoggle} className="button dark-icon" />
      )}
    </header>
  );
}

export default Header;
