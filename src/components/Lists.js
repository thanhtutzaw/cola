import React, { useState, useEffect } from "react";
import { GrAdd } from "react-icons/gr";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import Modal from "./Modal";
import Tools from "./Tools";
import { type } from "@testing-library/user-event/dist/type";
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
  const [showdeletemodal, setshowdeletemodal] = useState(false);
  const [currentCard, setcurrentCard] = useState(null);
  const [currentEditCard, setcurrentEditCard] = useState(null);
  const [currentDeleteCard, setcurrentDeleteCard] = useState(null);

  useEffect(() => {
    updateLocal();
  }, []);
  useEffect(() => {
    setLocal();
  }, [data]);
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let year;
  let month;
  let day;
  let todayDate = new Date();
  let dyear = todayDate.getFullYear();
  let dmonth = todayDate.getMonth() + 1;
  let dday = todayDate.getDate();
  let inputMonth, inputDay;
  leapChecker(dyear)
  function displayYear(date) {
    let inputDate = new Date(Date.parse(date));
    inputMonth = inputDate.getMonth() + 1;
    inputDay = inputDate.getDate();
    year = dyear - inputDate.getFullYear();
    // month = dmonth - inputDate.getMonth();
    if (dmonth >= inputMonth) {
      month = dmonth - inputMonth;
    } else {
      year--;
      month = 12 + dmonth - inputMonth;
      month = month < 10 ? '0' + month : month;
    }
    if (dday >= inputDay) {
      day = dday - inputDay;
      day = day < 10 ? '0' + day : day;
    } else {
      month--;
      let days = months[dmonth - 2];
      day = days + dday - inputDay;
      if (month < 0) {
        month = 11;
        year--;
      }
    }
    return (
      <div className="content row">
        <div className="year">
          <p>{year}</p>
          <p>years</p>
        </div>
        <div className="month">
          {/* <p>{displayMonth(item.date)}</p> */}
          <p>{month}</p>
          <p>months</p>
        </div>
        <div className="day">
          {/* <p>{displayDay(item.date)}</p> */}
          <p>{day}</p>
          <p>days</p>
        </div>
      </div>
    );

  }
  function leapChecker(year) {
    if (year % 4 == 0 ||
      (year % 100 == 0 &&
        year % 400 == 0)
    ) {
      months[1] = 29;
    }
    else {
      months[1] = 28;
    }
  }
  function displayDay(date) {
    let inputDate = new Date(Date.parse(date));
  }
  function zYear(year) {
    return year;
  }
  function zMonth(month) {
    return month;
  }
  function zDay(day) {
    return day;
  }
  let today = new Date().toLocaleDateString();
  const dateSubtract = () => {
  };

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
            {item.namedate !== "" ||
              // if !== null this condition will not work
              item.date !== "" ? (
              <div className="pointer-none">
                <Tools
                  onClick={() => { }}
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
                      <p className="date-name">{item.namedate}</p>
                      <p>{displayYear(item.date, item.id)}</p>
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
