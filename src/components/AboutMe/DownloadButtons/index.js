import React, { Component } from "react";
import { LayoutContext } from "../../Layout/LayoutContext";

import DownloadButtonsView from "./DownloadButtonsView";

class DownloadButtons extends Component {
  render() {
    return (
      <LayoutContext.Consumer>
        {({ theme }) => (
          <DownloadButtonsView theme={theme} toggleOn={this.props.toggleOn} />
        )}
      </LayoutContext.Consumer>
    );
  }
}

export default DownloadButtons;
