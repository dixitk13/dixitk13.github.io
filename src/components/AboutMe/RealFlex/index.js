import React, { Component } from "react";
import RealFlexView from "./RealFlexView";
import { LayoutContext } from "../../Layout/LayoutContext";

class RealFlex extends Component {
  render() {
    return (
      <LayoutContext.Consumer>
        {({ y }) => <RealFlexView y={y} />}
      </LayoutContext.Consumer>
    );
  }
}

export default RealFlex;
