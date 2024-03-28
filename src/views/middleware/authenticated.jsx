import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Authenticated = ({ children }) => {
  const redirect = useNavigate();
  const userAuth = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!userAuth[0].active) {
      redirect("/login");
    }
  }, [userAuth[0].active]);

  return children;
};

export default Authenticated;
