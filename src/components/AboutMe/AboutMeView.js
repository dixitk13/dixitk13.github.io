import React from "react";
import { rhythm } from "../../utils/typography";
import styled from "styled-components";

import dixitk13 from "../../../static/img/dixitk13.jpg";

import { device } from "../../utils/device";
import { background, boxShadow, fontColor, fontHover } from "../../styles";
import Logos from "./Logos";
import DownloadButtons from "./DownloadButtons";
import RealFlex from "./RealFlex";
import MadeWith from "./MadeWith";

import { polygons } from "../../common/animations";

const AboutMeFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutMeContainer = styled(AboutMeFlex)`
  //width: 20vw;
  width: 360px;
  padding: ${rhythm(0.25)};
  border-radius: ${rhythm(0.25)};
  background: ${background};
  box-shadow: ${boxShadow};
  z-index: 2;

  @media ${device.desktop} {
    margin: 0 10px ${rhythm(0.25)} 10px;
  }

  @media ${device.mobile} {
    height: unset;
    margin-right: unset;
    width: 100%;
    margin-bottom: 5px;
  }
`;

const Name = styled.h1`
  color: ${fontColor};
  font-size: ${rhythm(1.5)};
  margin: 0 0 ${rhythm(0.5)} 0;
  cursor: pointer;

  &:hover {
    //opacity: 0.66;
    color: ${fontHover};
  }
`;

const Image = styled.img`
  flex: 1 5 30%;
  min-height: 0;
  max-height: 350px;
  width: 350px;
  align-self: center;
  margin-bottom: 1rem;
  background-size: cover;
  clip-path: polygon(0, 0);
  animation: ${polygons} 60s infinite;
`;

const Quote = styled.blockquote`
  margin-left: unset;
  color: ${fontColor};
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

const AboutMeView = ({ on, toggleOn }) => {
  return (
    <AboutMeFlex>
      <RealFlex />
      <AboutMeContainer>
        <ToggleHeartContainer>
          <input
            id="toggle-heart"
            checked={on}
            onChange={toggleOn}
            type="checkbox"
          />
          <label htmlFor="toggle-heart">❤</label>
        </ToggleHeartContainer>
        <Name onClick={toggleOn}>Dixit Keshavbhai Patel</Name>
        <Image src={dixitk13} alt="Dixit" />
        <Quote>just another software engineer</Quote>
        <Logos />
        <DownloadButtons toggleOn={toggleOn} />
        <MadeWith />
      </AboutMeContainer>
    </AboutMeFlex>
  );
};

export default AboutMeView;
