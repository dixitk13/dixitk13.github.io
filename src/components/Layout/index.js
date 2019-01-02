import React from "react";
// import { Link } from "gatsby";
import styled from "styled-components";

import { rhythm } from "../../utils/typography";
import { device } from "../../utils/device";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${rhythm(1)};
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export default ({ children }) => <Container>{children}</Container>;
