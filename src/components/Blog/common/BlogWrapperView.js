import styled from "styled-components";

import { device, rhythm } from "../../../utils";
import {
  entireBackground,
  entireBackgroundImage,
  fontColor,
} from "../../../styles";

// TODO: Might be worth to invert this selector vs screen media
export const BlogWrapperView = styled.div`
  // width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin: 0 auto;
  align-items: center;
  background-color: ${entireBackground};
  background: ${entireBackgroundImage};
  color: ${fontColor};
  padding: ${rhythm(0.75)};
  h1 {
    font-size: ${rhythm(2.5)};
    @media ${device.mobile} {
      font-size: ${rhythm(1.5)};
    }
  }
  main {
    width: 40vw;
    max-width: 40vw;

    @media ${device.screen4k} {
      height: 100vh;
    }
    @media ${device.desktop} {
      height: 100%;
    }
    @media ${device.mobile} {
      max-width: 100%;
      width: 100%;
    }
  }
`;
