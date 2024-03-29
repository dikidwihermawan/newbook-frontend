import React from "react";
import { Button } from "../Button.jsx";

function index() {
  return (
    <div className="rounded-lg shadow-lg bg-white px-4 py-4 space-y-4 antialiased tracking-tight">
      <h2>Recenty Follows</h2>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <img
            src="https://i.pravatar.cc/30"
            alt=""
            className="rounded-full border border-gray-300"
          />
        </div>
        <div className="col-span-3 space-y-1">
          <p className="text-xs font-semibold">Diki Dwi Hermawan</p>
          <p className="text-xs">@dikidh</p>
        </div>
        <div className="col-span-2 text-end">
          <Button text="Follow" type="submit" />
        </div>
      </div>
    </div>
  );
}

export default index;
