import styled from "styled-components";

import { rhythm } from "../../utils/typography";
import { device } from "../../utils/device";
import {
  entireBackground,
  entireBackgroundImage,
  fontColor,
} from "../../styles";

export const ContainerView = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: ${entireBackground};
  background: ${entireBackgroundImage};
  color: ${fontColor};
  padding: ${rhythm(0.75)};
  transition: all 0.3s ease-all;
  @media ${device.screen4k} {
    height: 100vh;
  }
  @media ${device.desktop} {
    height: 100%;
  }
  @media ${device.mobile} {
    flex-direction: column;
    overflow-x: hidden;
  }
`;
