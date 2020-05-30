import React from "react";
import styled, { css } from "styled-components";
import { Icons } from "../../static/svg";

const Item = styled.li.attrs({
  role: "listitem",
  tabIndex: -1,
})`
  list-style: none;
  margin-bottom: unset;
  position: absolute;
  text-align: center;
  transition: all 0.3s linear;
  border-radius: 6px;
  ${(props) =>
    props.three
      ? `
      &:first-child {
        transform: translateX(20px);
      }
      &:last-child {
        transform: translateX(-20px);
      }
      `
      : `
      &:nth-child(2) {
        transform: translateX(60px);
      }
      &:nth-last-child(2) {
        transform: translateX(-60px);
      }
      &:last-child {
        transform: translateX(-40px);
      }
  `};
`;

const FanCardContainer = styled.ul.attrs({
  tabIndex: 0,
})`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 6px 0;
  &:hover,
  &:focus {
    ${({ three }) =>
      three
        ? css`
            ${Item}:first-child {
              transform: translateX(45px);
            }
            ${Item}:last-child {
              transform: translateX(-45px);
            }
          `
        : css`
            ${Item}:first-child {
              transform: translateX(95px);
            }
            ${Item}:nth-child (2) {
              transform: translateX(40px);
            }
            ${Item}:nth-last-child (2) {
              transform: translateX(-40px);
            }
            ${Item}:last-child {
              transform: translateX(-95px);
            }
          `}
  }
`;

const FannedCards = ({ images }) => {
  const three = images.length <= 3 || images.length === 4;
  const showLength = three ? 3 : 5;
  return (
    <FanCardContainer aria-label="Fanned Technology Card Preview" three={three}>
      {images.slice(0, showLength).map((image, i) => (
        <Item three={three} key={`fanned-image-${i}`}>
          <img alt={image} width="50px" height="50px" src={Icons[image]} />
        </Item>
      ))}
    </FanCardContainer>
  );
};

export default FannedCards;
