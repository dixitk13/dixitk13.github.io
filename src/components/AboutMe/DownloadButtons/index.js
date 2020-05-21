import React from "react";

import { LayoutContext } from "../../Layout/LayoutContext";
import DownloadButtonsView from "./DownloadButtonsView";

const DownloadButtons = (props) => {
  return (
    <LayoutContext.Consumer>
      {({ theme }) => (
        <DownloadButtonsView theme={theme} toggleOn={props.toggleOn} />
      )}
    </LayoutContext.Consumer>
  );
};

export default DownloadButtons;
