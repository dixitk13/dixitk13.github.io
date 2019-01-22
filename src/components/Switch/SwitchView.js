import React from "react";
import styled from "styled-components";
const SwitchViewContainer = styled.span`
  button {
    ${props =>
      props.selected === 0
        ? `
        color: rgb(0, 0, 0);
        `
        : props.selected === 1
          ? `
          color: rgb(255,255,255); background: black;
          `
          : `color: red;`};
  }
`;

export const SwitchView = ({
  selected,
  children,
  styles,
  handleClick,
  toggleOn
}) => {
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
