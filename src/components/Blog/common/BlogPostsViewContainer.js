import styled from "styled-components";

import { device, rhythm } from "../../../utils";

import {
  entireBackground,
  entireBackgroundImage,
  fontColor,
} from "../../../styles";

export const BlogPostsViewContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin: 0 auto;
  background-color: ${entireBackground};
  background: ${entireBackgroundImage};
  color: ${fontColor};

  @media ${device.screen4k} {
    padding: ${rhythm(0.75)} 30vw;
  }
  @media ${device.desktop} {
    padding: ${rhythm(0.75)} 30vw;
  }
  @media ${device.mobile} {
    padding: ${rhythm(0.75)} 5vw;
  }
`;
