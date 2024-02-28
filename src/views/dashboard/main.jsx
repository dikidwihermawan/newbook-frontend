import { IconHome, IconSettings, IconUser } from "@tabler/icons-react";
import React from "react";
import Status from "../../components/status";
import RecentFollow from "../../components/recent-follow";
import Sidebar from "./sidebar";

function main() {
  return (
    <div className="grid grid-cols-12 gap-2 px-4 py-4">
      <div className="hidden md:block md:col-span-3 max-h-40 rounded-lg border border-gray-300 shadow-lg bg-white">
        <Sidebar />
      </div>
      <div className="col-span-12 md:col-span-6 md:px-4">
        <Status />
      </div>
      <div className="hidden md:block md:col-span-3 rounded-lg border border-gray-300 shadow-lg bg-white">
        <RecentFollow />
      </div>
    </div>
  );
}

export default main;
