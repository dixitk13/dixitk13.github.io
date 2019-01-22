import React from "react";
import styled from "styled-components";
import { device } from "../../../utils/device";

const RealFlexDiv = styled.div`
  @media ${device.desktop} {
    // flex-basis: ${props => (props.height ? props.height : 0)}px;
    flex: 0 1 auto;
    transition: height 0.5s ease-all;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const RealFlexView = ({ y }) => {
  const height = y; //y >= 400 ? 150 : y;
  return <RealFlexDiv height={height} />;
};
export default RealFlexView;
