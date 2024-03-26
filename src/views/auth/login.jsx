import axios from "axios";
import { useEffect, useState } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { authenticated } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const credentials = {
    username,
    password,
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("login", credentials);
      localStorage.setItem("tokenUser", response.data.token);
      dispatch(authenticated(response.data));
      redirect("/");
    } catch (e) {
      setErrors(e.response.data.errors);
    }
  };

  return (
    <>
      <div className="hidden xl:block">
        <div className="grid grid-cols-6 place-content-center min-h-screen bg-gray-100">
          <div className="col-start-2 col-span-4 border border-gray-300 rounded-lg w-full overflow-hidden shadow-xl">
            <div className="grid grid-cols-12 p-2 bg-gradient-to-r from-white to-blue-50">
              <div className="col-span-6">
                <img
                  src="../../public/bear.png"
                  className="rounded-lg"
                  alt="People who knows"
                />
              </div>
              <div className="col-span-6">
                <div className="px-10 h-full grid content-center items-center space-y-4">
                  <span className="text-center text-xl font-bold">
                    Hello Again!
                  </span>
                  <span className="text-center text-sm">
                    Welcome back you've been missed!
                  </span>
                  <form onSubmit={login} method="post">
                    <div className="py-2">
                      <input
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username"
                        className={
                          errors.username
                            ? "w-full text-xs px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg border border-red-300"
                            : "w-full text-xs px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg border border-gray-300"
                        }
                      />
                    </div>
                    {errors.username ? (
                      <div className="text-xs text-red-300">
                        {errors.username[0]}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="py-2">
                      <input
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className={
                          errors.password
                            ? "w-full text-xs px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg border border-red-300"
                            : "w-full text-xs px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg border border-gray-300"
                        }
                      />
                    </div>
                    {errors.password ? (
                      <div className="text-xs text-red-300">
                        {errors.password[0]}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="py-2 text-end">
                      <a href="#" className="text-xs text-blue-400">
                        Recovery Password
                      </a>
                    </div>
                    <div className="py-2">
                      <button
                        type="submit"
                        className="w-full text-xs rounded-lg text-white px-4 py-2 bg-gradient-to-b from-blue-200 to-blue-600"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="px-2 text-xs text-center">
                    Or sign in with
                  </div>
                  <div className="flex items-center text-center justify-between px-20">
                    <a
                      href="#"
                      className="border p-2 rounded-lg bg-gradient-to-b from-blue-600 to-blue-200 text-white"
                    >
                      <IconBrandFacebook
                        size={20}
                        stroke={1}
                        strokeLinejoin="miter"
                      />
                    </a>
                    <a
                      href="#"
                      className="border p-2 rounded-lg bg-gradient-to-b from-blue-600 to-blue-200 text-white"
                    >
                      <IconBrandTwitter
                        size={20}
                        stroke={1}
                        strokeLinejoin="miter"
                      />
                    </a>
                    <a
                      href="#"
                      className="border p-2 rounded-lg bg-gradient-to-b from-blue-600 to-blue-200 text-white"
                    >
                      <IconBrandInstagram
                        size={20}
                        stroke={1}
                        strokeLinejoin="miter"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden grid place-content-center min-h-screen">
        <div className="px-10 grid space-y-4">
          <span className="text-center text-xl font-bold">Hello Again!</span>
          <span className="text-center text-sm">
            Welcome back you've been missed!
          </span>
          <form onSubmit={login} method="post">
            <div className="py-2">
              <input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                className="w-full text-xs px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg border border-gray-300"
              />
            </div>
            <div className="py-2">
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full text-xs px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg border border-gray-300"
              />
            </div>
            <div className="py-2 text-end">
              <a href="#" className="text-xs text-blue-400">
                Recovery Password
              </a>
            </div>
            <div className="py-2">
              <button
                type="submit"
                className="w-full text-xs rounded-lg text-white px-4 py-2 bg-gradient-to-b from-blue-200 to-blue-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="px-2 text-xs text-center">Or sign in with</div>
          <div className="flex items-center text-center justify-between px-20">
            <a
              href="#"
              className="border p-2 rounded-lg bg-gradient-to-b from-blue-600 to-blue-200 text-white"
            >
              <IconBrandFacebook size={20} stroke={1} strokeLinejoin="miter" />
            </a>
            <a
              href="#"
              className="border p-2 rounded-lg bg-gradient-to-b from-blue-600 to-blue-200 text-white"
            >
              <IconBrandTwitter size={20} stroke={1} strokeLinejoin="miter" />
            </a>
            <a
              href="#"
              className="border p-2 rounded-lg bg-gradient-to-b from-blue-600 to-blue-200 text-white"
            >
              <IconBrandInstagram size={20} stroke={1} strokeLinejoin="miter" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
