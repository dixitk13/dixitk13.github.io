import styled from "styled-components";

import { rhythm } from "../../utils/typography";
import { device } from "../../utils/device";
import { entireBackground, fontColor } from "../../styles";

export const ContainerView = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${entireBackground};
  color: ${fontColor};
  padding: ${rhythm(0.75)};
  @media ${device.desktop} {
    height: 100%;
  }
  @media ${device.mobile} {
    flex-direction: column;
    overflow-x: hidden;
  }
`;
