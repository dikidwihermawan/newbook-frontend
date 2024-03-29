import { useSelector } from "react-redux";
import Router from "./views/router";
import React from "react";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const user = useSelector((state) => state.auth.user[0]);

  return !user ? (
    <Loading />
  ) : (
    <div>
      <ToastContainer />
      <Router />
    </div>
  );
}
