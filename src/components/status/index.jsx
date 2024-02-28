import React from "react";
import FormStatus from "./form";
import Comment from "./comment";

function index(props) {
  return (
    <div className="space-y-12">
      <FormStatus />
      <Comment />
    </div>
  );
}

export default index;
