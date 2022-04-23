import React, { useState, useEffect } from "react";
import { GrAdd } from "react-icons/gr";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

import Modal from "./Modal";
import Tools from "./Tools";

const dataArray = [
  { id: 1, namedate: "", date: "" },
  { id: 2, namedate: "", date: "" },
  { id: 3, namedate: "", date: "" },
  { id: 4, namedate: "", date: "" },
];
function Lists(props) {
  const [opentools, setopentools] = useState(false);

  const [dataStored, setdataStored] = useState([]);
  const [data, setdata] = useState(dataArray);
  const [showmodal, setshowmodal] = useState(false);
  const [showeditmodal, setshoweditmodal] = useState(false);
  // const [showdeletemodal, setshowdeletemodal] = useState(false);
  const [showdeletemodal, setshowdeletemodal] = useState(false);

  const [currentCard, setcurrentCard] = useState(null);
  const [currentEditCard, setcurrentEditCard] = useState(null);
  const [currentDeleteCard, setcurrentDeleteCard] = useState(null);

  // if(localStorage.getItem('data')?.length){
  //   console.log(data)
  // }
  useEffect(() => {
    // localStorage.setItem("data", JSON.stringify(data));
    updateLocal();
  }, []);

  useEffect(() => {
    setLocal();
  }, [data]);
  // if(localStorage.getItem('data').length){

  //   updateLocal()
  // }
  // else{
  // }

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem('data'))
  // }, []);
  // const updateLocal = () => {

  //     const newdata = JSON.parse(localStorage.getItem("data")) || [];
  //   setdata(newdata);
  // };

  
  let today = new Date().toLocaleDateString();
  const dateSubtract = () => {
    // let today = new Date();
    // let myPastDate = new Date(today)
    // let getToday = myPastDate();

    // return today;
    
    // const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    // const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    // const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

    // return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
  // let year = today.getFullYear()
  // let month = today.getMonth()
  // let day = today.getDay()
  // let getToday = year+'-'+month+'-'+day
    // setnewdate(date);

  const setLocal = () => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  const updateLocal = () => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify([]));
    } else {
      let newdata = JSON.parse(localStorage.getItem("data"));
      setdata(newdata);
    }
  };
  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(data))
  // }, [data]);
  // if (data?.length) localStorage.setItem("data", JSON.stringify(data));

  // let newdata = JSON.parse(localStorage.getItem("data"));

  // useEffect(() => {
  //   setdata(newdata);
  // }, []);

  // const stored = JSON.parse(localStorage.getItem('data'))

  if (data) {
    return (
      <>
        {showmodal && (
          <Modal
            data={data}
            setdata={setdata}
            showmodal={showmodal}
            setshowmodal={setshowmodal}
            currentCard={currentCard}
          />
        )}

        {showeditmodal && (
          <EditModal
            data={data}
            setdata={setdata}
            currentEditCard={currentEditCard}
            showeditmodal={showeditmodal}
            setshoweditmodal={setshoweditmodal}
          />
        )}
        {showdeletemodal && (
          <DeleteModal
            data={data}
            setdata={setdata}
            currentDeleteCard={currentDeleteCard}
            showdeletemodal={showdeletemodal}
            setshowdeletemodal={setshowdeletemodal}
          />
        )}

        {data.map((item) => (
          <div className={`content-card`} key={item.id}>
            {/* <div className={`content-card ${opentools ? 'content-card-nav-active' : ''}`} key={item.id}> */}
            {item.namedate !== "" ||
            // if !== null this condition will not work
            item.date !== "" ? (
              <div className="pointer-none">
                <Tools
                  onClick={() => {}}
                  showdeletemodal={showdeletemodal}
                  setshowdeletemodal={setshowdeletemodal}
                  setshoweditmodal={setshoweditmodal}
                  setcurrentEditCard={setcurrentEditCard}
                  setcurrentDeleteCard={setcurrentDeleteCard}
                  id={item.id}
                />

                <li
                  className="cursor-default"
                  onClick={(e) => {
                    setcurrentCard(item.id);
                  }}
                >
                  <div className="content-children">
                    <div className="content-row">
                      {/* <p className="date-name">{localStorage.getItem('data').namedate}</p>
                    <p>{localStorage.getItem('data').date}</p> */}
                      <p className="date-name">{item.namedate}</p>
                      {/* <p>{item.date}</p> */}
                      <div className="content row">
                        <div className="year">
                          <p>2</p>
                          <p>years</p>
                        </div>
                        <div className="month">
                          <p>2</p>
                          <p>months</p>
                        </div>
                        <div className="day">
                          <p>2</p>
                          <p>days</p>
                        </div>
                      </div>
                      
{}
                      
                      <p></p>
                    </div>
                  </div>
                </li>
              </div>
            ) : (
              <div>
                <li
                  className="hover-list"
                  onClick={(e) => {
                    //  localStorage.setItem("data", JSON.stringify(data));

                    setshowmodal((showmodal) => !showmodal);
                    setcurrentCard(item.id);
                  }}
                >
                  <div className="content-children">
                    <div className="add-btn-row">
                      <GrAdd className="add-btn" />
                    </div>
                  </div>
                </li>
              </div>
            )}
          </div>
        ))}
      </>
    );
  }
}

export default Lists;
