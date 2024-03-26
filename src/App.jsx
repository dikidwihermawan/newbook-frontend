import { useSelector } from "react-redux";
import Router from "./views/router";
import React from "react";
import Loading from "./components/Loading";

export default function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <div>
        <Router />
      </div>
    </React.Suspense>
  );
}
