import React from "react";
import { NavLink } from "react-router-dom";

function header() {
  return (
    <header className="grid items-center bg-gradient-to-r from-blue-400 to-blue-500 px-4 py-2 h-14 text-white">
      <div className="flex items-center justify-between">
        <div className="">
          <a href="/" className="font-recursive">
            Newbie ORG
          </a>
        </div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center text-sm text-white rounded-sm md:hidden lg:hidden focus:outline-none focus:bg-blue-500"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fillRule="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <div className="hidden md:visible md:flex items-center text-xs gap-4">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </div>
    </header>
  );
}

export default header;
