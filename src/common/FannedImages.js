import React from "react";
import styled from "styled-components";
import { numberOfCards } from "./ExpandableCard";
const FanCard = styled.div`
  height: 120px;
  width: calc((100% / ${numberOfCards}) + 20px);
  margin: 6px;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  text-align: center;
  transition: all 0.3s linear;

  &:first-child {
    transform: translateX(20px);
  }
  &:last-child {
    transform: translateX(-20px);
  }
  &:hover:first-child {
    transform: translateX(45px);
  }
  &:hover:last-child {
    transform: translateX(-45px);
  }
`;

const FannedImages = ({ images }) => {
  return (
    <FanCard>
      <Img
        src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/florence.jpg"
        alt="Photograph of Florence, Italy"
      />
      <Img
        src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/roma.jpg"
        alt="Photograph of an ancient aqueduct, Italy"
      />
      <Img
        src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/bike.jpg"
        alt="Photograph of a bike on a Roman Street"
      />
    </FanCard>
  );
};

export default FannedImages;
