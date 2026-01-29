import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { fontColor } from "../../../styles";
import { Emojis } from "../../../../static/svg/emojis";
import { getPercentScrolled } from "../../Layout";

const FloatingButton = styled.button`
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  border-radius: 50%;
  background: radial-gradient(#dae0ec, #cfd7e6);
  color: ${fontColor};
  transition: all 0.3s ease;
  font-size: 24px;
  z-index: 10;
  opacity: 0.3;
  ${({ enable }) =>
    enable &&
    css`
      opacity: 0.7;
    `}
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: translateY(-3px);
  }
`;

const EmojiImage = styled.div.attrs({
  role: "img",
  "aria-label": "scroll to top",
})`
  position: absolute;
  bottom: 6px;
  right: 12px;
`;

// FIXME: Doesn't work before/after v5 upgrade
export const FloatingScrollToTop = () => {
  const [enable, setEnable] = useState(false);
  // gatsby wants to add in useEffect a document check

  /*eslint-disable */
  useEffect(() => {
    if (document) setEnable(getPercentScrolled() > 20);
  });
  /*eslint-enable */

  const onClick = () => {
    document.getElementById("web-header")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <FloatingButton enable={enable ? `${enable}` : ""} onClick={onClick}>
      <EmojiImage>{Emojis["top"]}</EmojiImage>
    </FloatingButton>
  );
};
