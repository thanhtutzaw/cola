import React from "react";
import Lists from "./Lists";
import Modal from "./Modal";

function Content({setshowmodal,showmodal}) {
  const isnull = true;
const  id = Math *10;

  return (
    <section className="content">
      <ul className="li-parent">
        {showmodal && 
          (
            <Modal setshowmodal={setshowmodal} showmodal={showmodal}/>
          )
          
          
        }
        
        <div>
        <Lists id={id} text={"ol"}
        setshowmodal={setshowmodal}
        showmodal ={showmodal}
        />
        
        <Lists id={id} text={"ol"}
        setshowmodal={setshowmodal}
        showmodal ={showmodal}
        />
        </div>
        <div>
        <Lists id={id} text={"ol"}
        setshowmodal={setshowmodal}
        showmodal ={showmodal}
        />
        
        <Lists id={id} text={"ol"}
        setshowmodal={setshowmodal}
        showmodal ={showmodal}
        />
        </div>



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
