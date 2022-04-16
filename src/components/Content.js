import React, { useState, useEffect } from "react";
import Lists from "./Lists";


function Content({ listId }) {  

    // var datas = JSON.parse(localStorage.getItem('data') || "[]");
    // var data ={
    //   nameDate : input,
    //   date : date
    // }
    // datas.push(data)
    // localStorage.setItem('data',JSON.stringify(datas))

    // setsubmitted(true)
    // console.log(input, date, modalId);
  //  setshowmodal((showmodal) => !showmodal);
  // };

  return (
    <section className="content">
      <ul>
        <Lists />
      </ul>
    </section>
  );
}

export default Content;
