import React from "react";
import styled from "styled-components";

import { rhythm } from "../../utils/typography";
import { device } from "../../utils/device";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: ${rhythm(0.75)};
  @media ${device.desktop} {
    // height: 100vh;
    height: 100%;
  }
  @media ${device.mobile} {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export default ({ children }) => <Container>{children}</Container>;
