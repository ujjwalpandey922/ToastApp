import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CartContextPro from "./context/cartContextPro";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextPro>
        <App />
      </CartContextPro>
    </BrowserRouter>
  </React.StrictMode>
);
