import React, { useState, useEffect } from "react";
import Lists from "./Lists";


function Content({ listId }) {  
  return (
    <section className="content">
      <ul>
        <Lists />
      </ul>
    </section>
  );
}

export default Content;
