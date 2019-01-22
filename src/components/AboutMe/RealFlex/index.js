import React, { Component } from "react";
import RealFlexView from "./RealFlexView";
import { LayoutContext } from "../../Layout/LayoutContext";

class RealFlex extends Component {
  render() {
    return (
      <LayoutContext.Consumer>
        {({ x, y }) => <RealFlexView x={x} y={y} />}
      </LayoutContext.Consumer>
    );
  }
}

export default RealFlex;
