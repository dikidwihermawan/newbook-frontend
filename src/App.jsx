import { useSelector } from "react-redux";
import Router from "./views/router";
import React, { useEffect } from "react";
import Loading from "./components/Loading";

export default function App() {
  const user = useSelector((state) => state.auth.user[0]);

  useEffect(() => {
    console.log(user);
  }, []);

  return !user ? (
    <Loading />
  ) : (
    <div>
      <Router />
    </div>
  );
}
