import React,{useEffect, useState} from "react";

function Today() {

  // const [clock, setclock] = useState();
  const [clock, setclock] = useState("h:m:s");
  const [newdate, setnewdate] = useState();
  

  let today = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  const updateClock = () => {
    //set clock here
    today = new Date().toLocaleTimeString();
    setclock(today);
  };
  setInterval(updateClock, 1000);
 

  const updateDate = () => {
    date = new Date().toLocaleDateString();
    setnewdate(date);
  };
  setInterval(updateDate, 1000);

  return (
    <section className="today-section">
      <div className="today-card">
        <div className="row">
          <h2>Today</h2>
          <p>{date}</p>
        </div>
        <p className="today-clock">{clock}</p>
      </div>
    </section>
  );
}

export default Today;
