import React from "react";
import styled from "styled-components";

import { fontColor } from "../../../styles";
import { Emojis } from "../../../../static/svg/emojis";

const FloatingButton = styled.button`
  height: 50px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  border-radius: 50%;
  background: radial-gradient(white, lightblue);
  color: ${fontColor};
  transition: all 0.3s ease;
  font-size: 24px;
  z-index: 10;
  &:hover {
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

export const FloatingScrollToTop = () => {
  const onClick = () => {
    document
      .getElementById("web-header")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <FloatingButton onClick={onClick}>
      <EmojiImage>{Emojis["top"]}</EmojiImage>
    </FloatingButton>
  );
};
