import React from "react";
import ReactDOM from "react-dom";

const elem = <span>React Element</span>;
// React Element

const title = (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX
  </h1>
);

const data = 1000;

const HeadingComp = ()=>(
  <div id= "container">
    {title} 
    <h1 className="heading">Bas badhiya bhai</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp />);     
