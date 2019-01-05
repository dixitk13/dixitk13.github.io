import React from "react";
import { rhythm } from "../../utils/typography";
import styled from "styled-components";

import dixitk13 from "../../../static/img/dixitk13.jpg";

import { device } from "../../utils/device";
import Logos from "../Logos";
import DownloadButtons from "../DownloadButtons";
import MadeWithView from "./MadeWithView";

const AboutMeContainer = styled.div`
  height: 95vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  padding: ${rhythm(0.5)};
  border-radius: ${rhythm(0.5)};
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  z-index: 2;
  margin-right: 10px;
  @media ${device.mobile} {
    height: unset;
    margin-right: unset;
    width: 100%;
  }
`;

const Name = styled.h1`
  color: rgba(0, 0, 0, 0.75);
  font-size: ${rhythm(1.5)};
  margin: 0 0 ${rhythm(0.5)} 0;
  cursor: pointer;

  &:hover {
    font-size: ${rhythm(1.51)};
    color: rgba(0, 0, 0, 0.66);
  }
`;

const Quote = styled.blockquote`
  margin-left: unset;
  margin-bottom: 1rem;
`;

const ToggleHeartContainer = styled.span`
  position: relative;
  top: -25px;
  display: flex;
  left: 40px;
  height: 0;
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
    &:checked + label {
      color: #e2264d;
      visibility: unset;
      will-change: font-size;
      animation: heart 1s cubic-bezier(0.17, 0.89, 0.32, 1.49);
    }
    &:unchecked + label {
      transition: 1s ease-all;
    }
  }
`;

const AboutMeView = ({ on, toggleOn }) => {
  return (
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
      <img src={dixitk13} alt="Dixit" />
      <Quote>just another software engineer</Quote>
      <Logos />
      <DownloadButtons />
      <MadeWithView />
    </AboutMeContainer>
  );
};

export default AboutMeView;
