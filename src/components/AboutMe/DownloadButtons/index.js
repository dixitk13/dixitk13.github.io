import React, { Component } from "react";
import DownloadButtonsView from "./DownloadButtonsView";

class DownloadButtons extends Component {
  render() {
    return <DownloadButtonsView toggleOn={this.props.toggleOn} />;
  }
}

export default DownloadButtons;
