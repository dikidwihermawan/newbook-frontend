import React from "react";

function index(props) {
  return (
    <div className="rounded-lg border border-gray-300 shadow-lg bg-white px-4 py-4 space-y-4 antialiased tracking-tight">
      <h2>Recenty Follows</h2>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <img
            src="https://i.pravatar.cc/30"
            alt=""
            srcset=""
            className="rounded-full border border-gray-300"
          />
        </div>
        <div className="col-span-3">
          <span className="text-xs font-semibold inline-block">
            Diki Dwi Hermawan
          </span>
          <span className="text-xs inline-block">@dikidh</span>
        </div>
        <div className="col-span-2 text-end">
          <button
            type="button"
            className="bg-gradient-to-r from-blue-400 to-blue-500 hover:bg-gray-600 text-white rounded-full px-4 py-2 text-xs "
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
