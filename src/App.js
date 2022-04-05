import "./App.css";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
function App() {
  const [darkmode, setdarkmode] = useState(false);
  const darkmodetoggle = () => {
    setdarkmode( (darkmode)=> !darkmode)
  }
  let today = new Date().toLocaleTimeString();

  let date = new Date().toLocaleDateString();

  //  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  //or

  //localTimeString function

  const [clock, setclock] = useState();
  const updateClock = () => {
    //set clock here
    today = new Date().toLocaleTimeString();
    setclock(today);
  };
  setInterval(updateClock, 1000);

  const [newdate, setnewdate] = useState();
  const updateDate = () => {
    date = new Date().toLocaleDateString();
    setnewdate(date);
  };
  setInterval(updateDate, 1000);
  return (
    <div className="App">
      <section className="main container">
        <header className="row">
          <h1 className="logo">Cola</h1>

          {darkmode ? (
            <MdLightMode onClick={darkmodetoggle} className="button light-icon" />
          ) : (
            <MdDarkMode onClick={darkmodetoggle} className="button dark-icon"></MdDarkMode>
          )}
        </header>

        <section className="today-section">
          <div className="today-card">
            <div className="row">
              <h2>Today</h2>
              <p>{date}</p>
            </div>
            <p className="today-clock">{clock}</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
