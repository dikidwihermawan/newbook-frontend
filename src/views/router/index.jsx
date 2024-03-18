import { Routes, Route } from "react-router-dom";
import Register from "../auth/register";
import Login from "../auth/login";
import Dashboard from "../dashboard";

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
