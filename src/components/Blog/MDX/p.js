import styled from "styled-components";
import React from "react";

export const StyledP = styled.p`
  color: red;
`;

export const Paragraph = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};
