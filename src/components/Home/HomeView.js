import React, { Component } from "react";

import Projects from "../Projects";
import AboutMe from "../AboutMe";
// import Cubbles from "../components/Cubbles";

import styled from "styled-components";

import { rhythm } from "../../utils/typography";
import { device } from "../../utils/device";
import {
  entireBackground,
  entireBackgroundImage,
  fontColor,
} from "../../styles";

export const HomeViewContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: ${entireBackground};
  background: ${entireBackgroundImage};
  color: ${fontColor};
  padding: ${rhythm(0.75)};

  @media ${device.screen4k} {
    height: 100vh;
  }
  @media ${device.desktop} {
    height: 100%;
  }
  @media ${device.mobile} {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export class HomeView extends Component {
  render() {
    return (
      <HomeViewContainer>
        <AboutMe />
        <Projects />
      </HomeViewContainer>
    );
  }
}
