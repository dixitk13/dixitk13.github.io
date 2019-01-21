import React from "react";
import styled from "styled-components";
import { device } from "../../utils/device";

const Cubbles = styled.div`
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.desktop} {
    width: 10vw;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export default Cubbles;
