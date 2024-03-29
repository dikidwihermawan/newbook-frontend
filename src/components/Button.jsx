// @flow
import React from "react";

export const Button = (props) => {
  const { text, type = "button" } = props;

  return (
    <button
      type={type}
      className="px-4 py-2 mt-2 rounded-full text-white text-xs bg-gradient-to-r from-blue-400 to-blue-500"
    >
      {text}
    </button>
  );
};
