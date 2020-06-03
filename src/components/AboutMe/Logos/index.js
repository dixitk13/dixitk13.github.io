import React from "react";
import LogosView from "./LogosView";

const Logos = ({ enableLayout, extraMentions }) => {
  return (
    <LogosView extraMentions={extraMentions} enableLayout={enableLayout} />
  );
};

export default Logos;
