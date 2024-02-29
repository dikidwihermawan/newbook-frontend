import React from "react";
import FormStatus from "./form";
import Comment from "./comment";

function index(props) {
  return (
    <div className="space-y-4">
      <FormStatus />
      <Comment />
    </div>
  );
}

export default index;
