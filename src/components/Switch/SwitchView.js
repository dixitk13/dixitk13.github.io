import React from "react";
import styled from "styled-components";
import { fontColor } from "../../styles";

// TODO: fix with provider prop
const SwitchViewContainer = styled.span``;

export const SwitchView = ({ selected, children, handleClick, toggleOn }) => {
  const handleClicks = () => {
    handleClick();
    toggleOn();
  };
  return (
    <SwitchViewContainer selected={selected} onClick={handleClicks}>
      {children}
    </SwitchViewContainer>
  );
};
