import React, { useState,useEffect } from "react";
import Lists from "./Lists";
import Modal from "./Modal";

function Content({...i}) {
  
  // const isnull = true;
  // const  id = Math *10;
  // const [showmodal, setshowmodal] = useState({show:false, id:0});
  const [showmodal, setshowmodal] = useState(false);
  const [namedate, setnamedate] = useState();
  const [date, setdate] = useState('');

  // const [id, setid] = useState(
    
  //   // {id:1},
  //   // {id:2},
  //   // {id:3},
  //   // {id:4},
  // );

  // useEffect(() => {
    // setid(i[i])
  // }, [id]);
  
  // useEffect((listId) => {
  //   setid(listId)
  // console.log(id)

  // }, []);
  const [data, setdata] = useState({namedate:'mgmg',date:'1.2.4'});
    // "ddfdd"
  //   [
  //   { id: 1, nameDate: "mg mg", date: "1.2.3" },
  //   { id: 2, nameDate: "wewwqe", date: "1.2.3" },
  //   { id: 3, nameDate: "fef", date: "1.2.3" },
  //   { id: 4, nameDate: "h5h5", date: "1.2.3" },
  // ]
  //   [
  //   { nameDate: "asd", date: "sa" },
  //   { nameDate: "a", date: "adf" },
  //   { nameDate: "daf", date: "daf" },
  //   { nameDate: "dfds", date: "dfdsa" },
  // ]
  //   [
  //   { nameDate: "asd", date: "sa" },
  //   { nameDate: "a", date: "adf" },
  //   { nameDate: "daf", date: "daf" },
  //   { nameDate: "dfds", date: "dfdsa" },
  // ]
  

  const submitHandle = (id,key,e) => {
    
    // updateModal()
    // console.log(key)
    // setid(key)

    // [0,1,2,3].map( (i,index)=>{
    //       if(e.target.id == index){
    //         // console.log(e.target.id)
    //         // console.log(index)
    //       }
    //     })

    // var datas = JSON.parse(localStorage.getItem('data') || "[]");
    // var data ={
    //   nameDate : namedate,
    //   date : date
    // }
    // datas.push(data)
    // localStorage.setItem('data',JSON.stringify(datas))

  }
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
            <Modal data={data} setdata={setdata} {...i} namedate={namedate} setnamedate={setnamedate} submitHandle={submitHandle} showmodal={showmodal} setshowmodal={setshowmodal}/>
          )
          
          // (
          //   <p></p>
          // )
          
          
        } 


{
  [0,1,2,3].map( (i , listId) => (
    
    <Lists data={data} setnamedate={setnamedate} key={i} namedate={namedate} {...i} setshowmodal={setshowmodal}
  showmodal ={showmodal} ></Lists>  
  ))
  
}

{/* <Lists setshowmodal={setshowmodal}
showmodal ={showmodal} item={item} index={index} nameDate={item.nameDate} date={item.date}></Lists> */}
        {/* {data.map((item , index) =>(  */}
        
       
              
        

      
      </ul>
    </section>
  );
}

export default Content;
