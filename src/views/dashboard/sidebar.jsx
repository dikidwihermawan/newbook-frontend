import {
  IconHome,
  IconNotification,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import React from "react";

function sidebar(props) {
  return (
    <div>
      <button
        type="button"
        className="w-full flex items-center space-x-4 text-xs hover:text-white hover:bg-blue-600 px-4 py-2"
      >
        <IconHome size={20} stroke={1} strokeLinejoin="miter" />
        <span>Beranda</span>
      </button>
      <button
        type="button"
        className="w-full flex items-center space-x-4 text-xs hover:text-white hover:bg-blue-600 px-4 py-2"
      >
        <IconUser size={20} stroke={1} strokeLinejoin="miter" />
        <span>Profile</span>
      </button>
      <button
        type="button"
        className="w-full flex items-center space-x-4 text-xs hover:text-white hover:bg-blue-600 px-4 py-2"
      >
        <IconNotification size={20} stroke={1} strokeLinejoin="miter" />
        <span>Notification</span>
      </button>
      <button
        type="button"
        className="w-full flex items-center space-x-4 text-xs hover:text-white hover:bg-blue-600 px-4 py-2"
      >
        <IconSettings size={20} stroke={1} strokeLinejoin="miter" />
        <span>Setting</span>
      </button>
    </div>
  );
}

export default sidebar;
