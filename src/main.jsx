import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
