import React from "react";
import styled from "styled-components";
import { device } from "../../../utils/device";

// Another set of Magic numbers
const heightOfMyView = 830;
const maxHeightPossible = 1750;

const RealFlexDiv = styled.div`
  @media ${device.desktop} and (min-height: ${heightOfMyView}px) {
    flex-basis: ${(props) => (props.height ? props.height : 0)}px;
    transition: height 0.5s ease-all;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const RealFlexView = ({ y }) => {
  const height = Math.min(maxHeightPossible - heightOfMyView, y);
  return <RealFlexDiv height={height} />;
};
export default RealFlexView;
