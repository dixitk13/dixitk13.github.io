import styled from "styled-components";
import { fontColor, fontHover } from "../../styles";

export const Anchor = styled.a`
  color: ${fontColor};
  text-decoration: none;
  &:hover {
    color: ${fontHover};
  }
`;
