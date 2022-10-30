import React from "react";
import { name, city } from "../data/data.js";
const headerStyle = {
  color: 'firebrick'
}
function Home() {
  // update the JSX being returned!
  return (
    <div id ="home">
      <h1 style = {headerStyle}>{name} is a Web Developer from {city}</h1>
    
    </div>

  )
}

export default Home;



// ✕ the h1 has a an inline style attribute with a color of 'firebrick' (4 ms)


