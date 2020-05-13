import styled from "styled-components";
import { rhythm } from "../utils/typography";
import { fontColor } from "../styles";

export const SimpleButton = styled.button.attrs(({ ariaLabel }) => ({
  "aria-label": ariaLabel,
}))`
  text-decoration: none;
  padding: 0;
  height: 21px;
  width: 90px;
  cursor: pointer;
  color: ${fontColor};
  margin: ${rhythm(0.25)};
  font-size: ${rhythm(0.5)};
  text-align: center;
  background: rgb(236, 237, 238, 0.7);
  border: 1px solid #cdd4db;
  border-radius: 3px;
  outline: none;
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;
