import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import { ShoppingCartProvider } from "./Context/ShoopingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <RouterProvider router={router} />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
