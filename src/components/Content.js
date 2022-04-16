import React, { useState, useEffect } from "react";
import Lists from "./Lists";


function Content({ listId }) {

  
  // const [date, setdate] = useState('');
  // const [modalId, setmodalId] = useState();


  
  // const [submitted, setsubmitted] = useState(false);

  // const submitHandle = (id, key, e) => {

    // setdata(
    //   {modalId,input,date}

    //  )
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
  // const updateModal = (e) => {
  //   [0,1,2,3].map( (i,index)=>{
  //     if(e.targt.id == index){
  //       console.log(e.targt.id)
  //       console.log(index)
  //     }
  //   })
  // }
  // useEffect(() => {
  //   setdata(

  //   )
  // }, []);

  return (
    <section className="content">
      <ul>

        <Lists />

        
        

        {/* {[0, 1, 2, 3].map((i, listId) => (
          <Lists
          submitted={submitted}
            input={input}
            setinput={setinput}
            setdate={setdate}
            date={date}
            setmodalId={setmodalId}
            id={listId}
            data={data}
            setnamedate={setnamedate}
            key={i}
            namedate={namedate}
            setshowmodal={setshowmodal}
            showmodal={showmodal}
          ></Lists>
        ))} */}
      </ul>
    </section>
  );
}

export default Content;
