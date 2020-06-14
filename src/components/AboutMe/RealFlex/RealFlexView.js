import React from "react";
import styled from "styled-components";

import { device } from "../../../utils/device";

// Another set of Magic numbers
const heightOfMyView = 740;
const maxHeightPossible = 1750;

const RealFlexDiv = styled.div`
  @media ${device.desktop}, ${device.smallLaptop} {
    transition: height 0.5s ease-all;
    height: ${(props) => props.myHeight || 0}px;
  }

  @media ${device.mobile} {
    display: none;
    height: 0;
  }
`;

const RealFlexView = ({ y }) => {
  const height = Math.min(maxHeightPossible - heightOfMyView, y);
  return <RealFlexDiv myHeight={height} />;
};
export default RealFlexView;
