import styled from "styled-components";
import { rhythm } from "../utils/typography";
import { device } from "../utils/device";

export const ExpandableCardContainer = styled.div`
  flex-basis: 45%;
  height: 150px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  z-index: 2;
  border-radius: ${rhythm(0.25)};
  min-height: ${rhythm(4)};
  border-top: ${rhythm(0.5)} solid transparent;
  overflow: hidden;
  margin: 5px 0;
  padding: ${rhythm(0.25)} ${rhythm(0.5)};
  position: relative;

  @media not screen and ${device.mobile} {
    &:first-child {
      margin-top: 0;
    }
    margin: ${rhythm(0.25)};
  }
`;
