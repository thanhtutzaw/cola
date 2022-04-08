import "./App.css";
import { useState } from "react";

import Header from "./components/header";
import Today from "./components/today";
import Content from "./components/Content";
function App() {
  const [darkmode, setdarkmode] = useState(false);

  
  

  //  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  //or

  //localTimeString function

  const [clock, setclock] = useState("h:m:s");
  const [newdate, setnewdate] = useState();
  
  const [showmodal, setshowmodal] = useState(false)

  return (
    <div className="App">
      <section className="main container">
        <Header darkmode={darkmode} setdarkmode={setdarkmode}/>

        <Today clock={clock} setclock={setclock} newdate={newdate} setnewdate={setnewdate} />

        <Content showmodal={showmodal} setshowmodal={setshowmodal} />
      </section>
    </div>
  );
}

export default App;
