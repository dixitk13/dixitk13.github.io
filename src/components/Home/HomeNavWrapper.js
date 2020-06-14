import styled from "styled-components";
import { entireBackground, entireBackgroundImage } from "../../styles";
import { device } from "../../utils";

export const HomeNavWrapper = styled.div`
  background-color: ${entireBackground};
  background: ${entireBackgroundImage};

  /* FIXME: there's an overlap here I think */
  @media ${device.smallLaptop},
    ${device.desktop},
    ${device.mobile},
    ${device.tablet} {
    height: unset;
  }
  @media ${device.screen4k} {
    height: 100%;
  }
`;
