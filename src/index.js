import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import logger from "./services/logService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

logger.init();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
