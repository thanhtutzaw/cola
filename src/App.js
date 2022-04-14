import "./App.css";
import { useState } from "react";

import Header from "./components/header";
import Today from "./components/today";
import Content from "./components/Content";
function App() {
  //  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  //or

  //localTimeString function
  return (
    <div className="App">
      <section className="main container">
        <Header />

        <Today />

        <Content />
      </section>
    </div>
  );
}

export default App;
