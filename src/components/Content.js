import React from "react";
import Lists from "./Lists";
import Modal from "./Modal";

function Content({setshowmodal,showmodal}) {
  // const isnull = true;
const  id = Math *10;

  return (
    <section className="content">
      <ul>
        {showmodal && 
          (
            <Modal text={"1"} setshowmodal={setshowmodal} showmodal={showmodal}/>
          )
          
          
        }
        
        
        <Lists id={id} text={"1"}
        setshowmodal={setshowmodal}
        showmodal ={showmodal}
        />
        
        <Lists  id={id} text={"2"}
        setshowmodal={setshowmodal}
        showmodal ={showmodal}
        />
        <Lists  id={id} text={"3"}
        setshowmodal={setshowmodal}
        showmodal ={showmodal}
        />
        
        <Lists id={id} text={"4"}
        setshowmodal={setshowmodal}
        showmodal ={showmodal}
        />
        
        



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
