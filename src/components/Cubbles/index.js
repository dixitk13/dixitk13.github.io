// import React from "react";
import styled from "styled-components";
import { device } from "../../utils/device";

const Cubbles = styled.div`
  background: rgba(0, 0, 0, 0.1);
  @media ${device.mobile} {
    display: none;
    height: 20px;
  }
  @media ${device.desktop} {
    width: 10vw;
  }
`;

export default Cubbles;
