import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";

const AppLayout = () => {
    return (
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
    );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    errorElement : <Error />,
    children : [
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ] ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
