import { Routes, Route } from "react-router-dom";
import Register from "../auth/register";
import Login from "../auth/login";
import Dashboard from "../dashboard";
import Authenticated from "../middleware/authenticated";
import Guest from "../middleware/guest";

export default function Router() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Authenticated>
            <Dashboard />
          </Authenticated>
        }
      />
      <Route
        path="/login"
        element={
          <Guest>
            <Login />
          </Guest>
        }
      />
      <Route
        path="/register"
        element={
          <Guest>
            <Register />
          </Guest>
        }
      />
    </Routes>
  );
}
