import React from "react";
import ReactDOM from "react-dom";

// React Element
const heading = React.createElement(
    "hi",
    {id:"heading"}, 
    "Hello World"
 );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);