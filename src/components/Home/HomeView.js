import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Projects from "../Projects";
import AboutMe from "../AboutMe";
// import Cubbles from "../components/Cubbles";

import { rhythm, device } from "../../utils";
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
  padding: 0 ${rhythm(0.75)};

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

const scrollToRef = (offsetTop) => window.scrollTo(0, offsetTop);
export const HomeView = () => {
  const myRef = useRef(null);
  useEffect(() => {
    console.log(">>: HomeView -> offsetTop", myRef.current?.offsetTop);
    scrollToRef(myRef.current?.offsetTop);
  }, []);

  return (
    <HomeViewContainer ref={myRef}>
      <AboutMe />
      <Projects />
    </HomeViewContainer>
  );
};
