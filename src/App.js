import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/header";
import Today from "./components/today";
import Content from "./components/Content";
function App() {
  const [darkmode, setdarkmode] = useState(
    // darkmode
    localStorage.getItem("dark") === "true"
    //  ()=> localStorage.getItem('dark')
  );

  useEffect(() => {
    localStorage.setItem("dark", darkmode);
  }, [darkmode]);
  useEffect(() => {
    if (darkmode == true) {
      console.log("false");
      document.documentElement.removeAttribute("dark", "true");
    } else {
      console.log("true");
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
