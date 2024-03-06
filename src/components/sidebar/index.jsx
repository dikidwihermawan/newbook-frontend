import {
  IconHome,
  IconNotification,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import React from "react";
import { NavLink } from "react-router-dom";

function sidebar(props) {
  return (
    <ul className="rounded-lg shadow-lg bg-white overflow-hidden divide-y divide-gray-100">
      <li className="hover:text-white hover:bg-blue-600 px-4 py-2">
        <NavLink to="/">
          <button
            type="button"
            className="w-full flex items-center space-x-4 text-xs"
          >
            <IconHome size={20} stroke={1} strokeLinejoin="miter" />
            <span>Beranda</span>
          </button>
        </NavLink>
      </li>
      <li className="hover:text-white hover:bg-blue-600 px-4 py-2">
        <NavLink to="/profile">
          <button
            type="button"
            className="w-full flex items-center space-x-4 text-xs"
          >
            <IconUser size={20} stroke={1} strokeLinejoin="miter" />
            <span>Profile</span>
          </button>
        </NavLink>
      </li>
      <li className="hover:text-white hover:bg-blue-600 px-4 py-2">
        <NavLink to="/notification">
          <button
            type="button"
            className="w-full flex items-center space-x-4 text-xs"
          >
            <IconNotification size={20} stroke={1} strokeLinejoin="miter" />
            <span>Notification</span>
          </button>
        </NavLink>
      </li>
      <li className="hover:text-white hover:bg-blue-600 px-4 py-2">
        <NavLink to="/setting">
          <button
            type="button"
            className="w-full flex items-center space-x-4 text-xs"
          >
            <IconSettings size={20} stroke={1} strokeLinejoin="miter" />
            <span>Setting</span>
          </button>
        </NavLink>
      </li>
    </ul>
  );
}

export default sidebar;
