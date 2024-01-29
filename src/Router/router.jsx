import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Couture from "../pages/Couture/Couture";
import Customize from "../pages/Customize/Customize";
import Bag from "../pages/Bag/Bag";
import Payment from "../pages/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/couture",
        element: <Couture />,
      },
      {
        path: "/customize/:id/:encodedImageUrl",
        element: <Customize />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);
export default router;
