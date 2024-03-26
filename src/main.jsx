import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import axios from "axios";

import { PersistGate } from "redux-persist/integration/react";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("tokenUser")}`;
  return config;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
