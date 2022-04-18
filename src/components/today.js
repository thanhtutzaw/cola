import React,{useEffect, useState} from "react";

function Today() {

  // const [clock, setclock] = useState();
  const [clock, setclock] = useState('');
  const [newdate, setnewdate] = useState();
  

  // let today = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  // const updateClock = () => {
  //   today = new Date().toLocaleTimeString();
  //   setclock(today);
  // };
  // setInterval(updateClock, 1000);
 useEffect(() => {
   const timerID = setInterval( ()=> 
   
     tick(),1000
   )
   return () => {
     clearInterval(timerID)
   };
 }, [clock]);
 const tick = () => {

  const d = new Date();
  const h = d.getHours()
  const m = d.getMinutes()
  const s = d.getSeconds()

  setclock(h+':'+m+':'+s)
 }

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
