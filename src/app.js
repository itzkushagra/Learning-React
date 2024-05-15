import React from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/about.js";

const AppLayout = () => {
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
  },
  {
    path:"/about",
    element: <About />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);     
