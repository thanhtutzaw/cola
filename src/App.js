import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/header";
import Today from "./components/today";
import Content from "./components/Content";
function App() {
  const [darkmode, setdarkmode] = useState(
    localStorage.getItem("dark") === "true"
  );
  let theme;
  if (localStorage) {
    theme = localStorage.getItem("dark");
  }
  useEffect(() => {
    if(theme == 'true'){
      // alert(`${theme} from local is dark-true`)
      document.documentElement.removeAttribute("dark", "true");
    }else{
      // alert(`${theme} dark-false from local is `)
      document.documentElement.setAttribute("dark", "true");
    }
  }, [theme]);

  // useEffect(() => {
  //   localStorage.setItem("dark", darkmode);
  // }, [darkmode]);

  useEffect(() => {
    if (darkmode == true) {
      // alert(darkmode)
      document.documentElement.removeAttribute("dark", "true");
    } else {
      // alert(darkmode)
      
      document.documentElement.setAttribute("dark", "true");
      
    }
  }, [darkmode]);


  // useEffect(() => {
  //   const data = localStorage.getItem('dark')
  //   if(data){
  //     setdarkmode(data)
  //   }
  // }, [darkmode]);

  // useEffect( () => {

  //   const saveLocal = () => {
  //     localStorage.setItem('dark',darkmode)
  //   }
  //   saveLocal();
  // }, [darkmode]);
  //   const saveLocal =  () => {
  //      localStorage.setItem("dark", darkmode)
  //    }
  //  useEffect(() => {
  //    saveLocal()
  //  });

  //  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  //or

  //localTimeString function

  const [clock, setclock] = useState("h:m:s");
  const [newdate, setnewdate] = useState();

  const [showmodal, setshowmodal] = useState(false);

  return (
    <div className="App">
      <section className="main container">
        <Header darkmode={darkmode} setdarkmode={setdarkmode} />

        <Today
          clock={clock}
          setclock={setclock}
          newdate={newdate}
          setnewdate={setnewdate}
        />

        <Content showmodal={showmodal} setshowmodal={setshowmodal} />
      </section>
    </div>
  );
}

export default App;
