import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import Modal from "./Modal";

const dataArray = [
  { id: 1, namedate: "", date: "" },
  { id: 2, namedate: "", date: "" },
  { id: 3, namedate: "", date: "" },
  { id: 4, namedate: "", date: "" },
];
function Lists(props) {
  const [data, setdata] = useState(dataArray);
  const [showmodal, setshowmodal] = useState(false);
  const [currentCard, setcurrentCard] = useState(null);

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
        <div className="content-card">
          {item.namedate !== "" ||
          // if !== null this condition will not work
          item.date !== "" ? (
            <div>
              <li
                onClick={(e) => {
                  setcurrentCard(item.id);
                }}
              >
                <div className="content-children">
                  <div>
                    <p>name ={item.namedate}</p>
                    <p>date ={item.date}</p>
                  </div>
                </div>
              </li>
            </div>
          ) : (
            <div>
              <li
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
