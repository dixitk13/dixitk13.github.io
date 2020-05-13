import React from "react";
import styled from "styled-components";
import { SimpleButton } from "../../common/SimpleButton";

const SwitchViewContainer = styled(SimpleButton).attrs({
  "aria-label": "Change Theme",
})``;

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
