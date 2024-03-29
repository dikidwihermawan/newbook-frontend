import React from "react";
import { FormStatus } from "./FormStatus";
import { Statusbar } from "./Statusbar";

function index() {
  return (
    <div className="space-y-4">
      <FormStatus />
      <Statusbar />
    </div>
  );
}

export default index;
