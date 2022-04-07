import React from "react";
import Lists from "./Lists";

function Content() {
  return (
    <section className="content">
      <ul>
        
        <Lists text={"hey hye"} second={"second hey"} />
        <Lists />
        <Lists />
        <Lists />
        <Lists />
        
      </ul>
    </section>
  );
}

export default Content;
