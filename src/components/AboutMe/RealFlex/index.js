import React from "react";
import RealFlexView from "./RealFlexView";
import { LayoutContext } from "../../Layout/LayoutContext";

const RealFlex = () => {
  return (
    <LayoutContext.Consumer>
      {({ y }) => <RealFlexView y={y} />}
    </LayoutContext.Consumer>
  );
};

export default RealFlex;
