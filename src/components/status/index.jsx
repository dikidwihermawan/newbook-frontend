import React from "react";

function index(props) {
  return (
    <div className="bg-white px-4 py-4 rounded-lg shadow-lg">
      <div className="flex items-start md:space-x-4">
        <img
          src="https://i.pravatar.cc/30"
          alt=""
          srcset=""
          className="hidden md:block rounded-full"
        />
        <div className="w-full text-right">
          <textarea
            placeholder="What's happening ?"
            name="form-status"
            id="form-status"
            cols="30"
            rows="10"
            className="bg-gray-100 h-32 px-4 py-2 border border-gray-300 shadow-sm rounded-lg resize-none w-full md:h-32 text-xs focus: outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="px-4 py-2 mt-2 rounded text-white text-sm bg-blue-600 hover:bg-blue-400"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
