import React from "react";

function Today({ clock,newdate,setclock, setnewdate }) {
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
