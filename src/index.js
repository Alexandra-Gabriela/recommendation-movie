import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "tw-elements";
import { BrowserRouter } from "react-router-dom";

document.documentElement.classList.add('dark');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
