import React from "react";
import styled from "styled-components";

import { rhythm } from "../../utils/typography";
import { device } from "../../utils/device";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${rhythm(0.75)};
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export default ({ children }) => <Container>{children}</Container>;
