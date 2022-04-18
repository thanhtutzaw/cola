import React, { useState, useEffect } from "react";
import { GrAdd } from "react-icons/gr";

import Modal from "./Modal";
import Tools from "./Tools";

const dataArray = [
  { id: 1, namedate: "", date: "" },
  { id: 2, namedate: "", date: "" },
  { id: 3, namedate: "", date: "" },
  { id: 4, namedate: "", date: "" },
];
function Lists(props) {

  const [dataStored, setdataStored] = useState([]);
  const [data, setdata] = useState(dataArray);
  const [showmodal, setshowmodal] = useState(false);
  const [currentCard, setcurrentCard] = useState(null);
  useEffect(() => {
    updateLocal();
  }, []);

  useEffect(() => {
    if (data?.length) localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  // const stored = JSON.parse(localStorage.getItem('data'))

  const updateLocal = () => {
    // if (localStorage.getItem('data') === null) {
    //   localStorage.setItem('data', JSON.stringify([]) );
    // } else {
    // const newdata = JSON.parse(localStorage.getItem('data'));
    // if(newdata) setdataStored(newdata)

    const newdata = JSON.parse(localStorage.getItem("data"));
    setdata(newdata);
    // }
  };

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

      {data.map((item) => (
        <div className={`content-card`} key={item.id}>
        {/* <div className={`content-card ${opentools ? 'content-card-nav-active' : ''}`} key={item.id}> */}
          {item.namedate !== "" ||
          // if !== null this condition will not work
          item.date !== "" ? (
            <div className="pointer-none">
              <Tools/>

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
                    <p>{item.date}</p>
                  </div>
                </div>
              </li>
            </div>
          ) : (
            <div>
              <li
                className="hover-list"
                onClick={(e) => {
                  setshowmodal((showmodal) => !showmodal);
                  setcurrentCard(item.id);
                }}
              >
                <div className="content-children">
                  <div>
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

export default Lists;
