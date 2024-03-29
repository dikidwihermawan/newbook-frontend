import { useState } from "react";
import { Button } from "../Button";
import axios from "axios";
import { Slide, toast } from "react-toastify";

export const FormStatus = () => {
  const [body, setBody] = useState("");
  const uploadStatus = async (e) => {
    e.preventDefault();
    const identifier = {
      body,
    };
    try {
      const response = await axios.post("status/create", identifier);
      toast.success(response.data, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: 1,
        theme: "light",
        transition: Slide,
      });
      setBody("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={uploadStatus}>
        <div className="px-4 py-4 bg-white flex items-start md:space-x-2 rounded-lg shadow-lg">
          <img
            src="https://i.pravatar.cc/30"
            alt=""
            className="hidden md:block rounded-full"
          />
          <div className="w-full text-right">
            <textarea
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
              placeholder="What's happening ?"
              name="status"
              cols="30"
              rows="10"
              className="bg-gray-100 h-32 px-4 py-2 border border-gray-300 shadow-sm rounded-lg resize-none w-full md:h-32 text-xs focus: outline-none focus:ring focus:ring-blue-300"
            />
            <Button text="Upload" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};
