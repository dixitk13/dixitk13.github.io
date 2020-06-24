import styled from "styled-components";
import React from "react";

import { fontColor } from "../../styles";

export const StyledP = styled.p`
  color: ${fontColor};
`;

export const Paragraph = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};
