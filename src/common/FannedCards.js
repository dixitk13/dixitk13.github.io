import React from "react";
import styled from "styled-components";
import { FannedImages } from "../../static/fannedImages";

const Img = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  text-align: center;
  transition: all 0.3s linear;
  border-radius: 6px;
  ${props =>
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

const FanCardContainer = styled.div`
  height: 80px;
`;

const FanCard = styled.div`
  height: 60px;
  width: 80%;
  position: relative;
  margin: 6px 0;
  &:hover,
  &:focus {
  
  ${props =>
    props.three
      ? `
      ${Img}:first-child {
          transform: translateX(45px);
        }
        ${Img}:last-child {
          transform: translateX(-45px);
        }
      `
      : `
        ${Img}:first-child {
          transform: translateX(85px);
        }
        ${Img}:nth-child(2) {
          transform: translateX(40px);
        }
        ${Img}:nth-last-child(2) {
          transform: translateX(-40px);
        }
        ${Img}:last-child {
          transform: translateX(-85px);
        }
        `}
`;

const FannedCards = ({ images }) => {
  const three = images.length <= 3 || images.length === 4;
  const showLength = three ? 3 : 5;
  return (
    <FanCardContainer>
      <FanCard three={three}>
        {images
          .slice(0, showLength)
          .map((image, i) => (
            <Img
              three={three}
              key={`fanned-image-${i}`}
              src={FannedImages[image]}
            />
          ))}
      </FanCard>
    </FanCardContainer>
  );
};

export default FannedCards;
