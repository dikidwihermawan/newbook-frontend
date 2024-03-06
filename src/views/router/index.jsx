import { Routes, Route } from "react-router-dom";
import Login from "../auth";
import Dashboard from "../dashboard";

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
