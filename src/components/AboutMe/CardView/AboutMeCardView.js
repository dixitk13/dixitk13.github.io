import React from "react";
import styled from "styled-components";

import dixitk13 from "../../../../static/img/dixitk13.jpg";

import RealFlex from "../RealFlex";
import Logos from "../Logos";
import MadeWith from "../MadeWith";
import DownloadButtons from "../DownloadButtons";
import { background, boxShadow, fontColor, fontHover } from "../../../styles";
import { polygons } from "../../../common/animations";
import { Blockquote } from "../../../common";
import { device, rhythm } from "../../../utils";

const AboutMeFlex = styled.aside.attrs({
  tabIndex: 0,
})`
  display: flex;
  flex-direction: column;
  @media ${device.screen4k} {
    max-width: 20vw;
  }
  @media ${device.mobile}, ${device.tablet} {
    width: 100%;
    align-items: center;
  }
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  min-width: 275px;
  padding: ${rhythm(0.25)};
  border-radius: 3px;
  background: ${background};
  box-shadow: ${boxShadow};
  z-index: 2;

  @media ${device.screen4k} {
    width: 10vw;
  }
  @media ${device.desktop} {
    margin: 0 10px ${rhythm(0.25)} 10px;
  }

  @media ${device.mobile}, ${device.tablet} {
    height: unset;
    margin-right: unset;
    width: 100%;
    margin-bottom: 5px;
  }
`;

const Name = styled.h1.attrs({
  tabIndex: 0,
})`
  color: ${fontColor};
  font-size: ${rhythm(1.5)};
  margin: ${rhythm(0.5)} 0;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  &:hover {
    color: ${fontHover};
  }
`;

const Image = styled.img.attrs({
  tabIndex: 0,
})`
  flex: 1 5 30%;
  min-height: 0;
  max-height: 350px;
  width: 310px;
  align-self: center;
  margin-bottom: 1rem;
  background-size: cover;
  clip-path: polygon(0, 0);
  animation: ${polygons} 60s infinite;
`;

const Quote = styled(Blockquote)`
  margin-left: unset;
  color: ${fontColor};
  font-size: ${rhythm(0.65)};
  border-left-color: ${fontColor};
  margin-bottom: 1rem;
`;

const ToggleHeartContainer = styled.span`
  display: flex;
  height: 0;
  width: 0;
  transform: rotate(45deg);
  margin-left: auto;
  @keyframes heart {
    0%,
    17.5% {
      font-size: 0;
    }
  }

  [for="toggle-heart"] {
    color: #aab8c2;
    font-size: 2em;
    cursor: pointer;
    visibility: hidden;
  }

  [id="toggle-heart"] {
    display: none;
    transition: 1s ease-all;
    &:checked + label {
      color: #e2264d;
      visibility: unset;
      will-change: font-size;
      animation: heart 1s cubic-bezier(0.17, 0.89, 0.32, 1.49);
    }
  }
`;

export const AboutMeCardView = ({ on, toggleOn }) => {
  return (
    <AboutMeFlex role="presentation">
      <RealFlex />
      <AboutMeContainer
        aria-labelledby="name-heading"
        aria-describedby="name-subheading"
      >
        <ToggleHeartContainer>
          <input
            id="toggle-heart"
            checked={on}
            onChange={toggleOn}
            type="checkbox"
            role="switch"
          />
          <label htmlFor="toggle-heart">❤</label>
        </ToggleHeartContainer>
        <Name id="name-heading" onClick={toggleOn}>
          Dixit Keshavbhai Patel
        </Name>
        <Image src={dixitk13} alt="" />
        <Quote id="name-subheading">just another software engineer</Quote>
        <Logos />
        <DownloadButtons toggleOn={toggleOn} />
        <MadeWith />
      </AboutMeContainer>
    </AboutMeFlex>
  );
};
