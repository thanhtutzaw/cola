import React,{useEffect, useState} from "react";
import Lists from "./Lists";
function Today() {
  const [clock, setclock] = useState('h:m:s');
  const [newdate, setnewdate] = useState();
  let date = new Date().toLocaleDateString();
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
   <Lists newdate={"hello"} />
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
