import React, { useState,useEffect } from "react";
import Lists from "./Lists";
import Modal from "./Modal";

function Content() {
  // const isnull = true;
  // const  id = Math *10;
  const [showmodal, setshowmodal] = useState(false);

  const [data, setdata] = useState(
    // "ddfdd"
    [
    { id: 1, nameDate: "mg mg", date: "1.2.3" },
    { id: 2, nameDate: "wewwqe", date: "1.2.3" },
    { id: 3, nameDate: "fef", date: "1.2.3" },
    { id: 4, nameDate: "h5h5", date: "1.2.3" },
  ]
  );

  // useEffect(() => {
  //   setdata(

  //   )
  // }, []);

  // if(Object.keys(data).length !== 0){
  //   alert("data")
  // }else{
  //   alert("null")
  // }

  return (
    <section className="content">
      <ul>
         {showmodal && 
          (
            <Modal showmodal={showmodal} setshowmodal={setshowmodal}/>
          )
          
          
        } 

        
        {data.map((item) =>( 
        
          <Lists setshowmodal={setshowmodal}
          showmodal ={showmodal} item={item} id={item.id} nameDate={item.nameDate} date={item.date}></Lists>
          // if(data == null){
          //   console.log("null")
          // }
        
        
        ))}

        {/*         
        <Lists  text={"1"}
        setshowmodal={setshowmodal}
        showmodal ={showmodal}
        />
        
        <Lists  text={"2"}
        setshowmodal={setshowmodal}
        showmodal ={showmodal}
        />
        <Lists   text={"3"}
        setshowmodal={setshowmodal}
        showmodal ={showmodal}
        />
        
        <Lists  text={"4"}
        setshowmodal={setshowmodal}
        showmodal ={showmodal}
        /> */}

        {/* <Lists isnull={true} text={"mg mg"} />
        <Lists isnull={true}/>
        <Lists isnull={true}/>
        <Lists isnull={true}/>
        <Lists isnull={true}/> */}
      </ul>
    </section>
  );
}

export default Content;
