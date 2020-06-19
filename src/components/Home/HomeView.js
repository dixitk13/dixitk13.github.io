import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Projects from "../Projects";
import AboutMe from "../AboutMe";
// import Cubbles from "../components/Cubbles";

import { rhythm, device } from "../../utils";
import { fontColor } from "../../styles";

export const HomeViewContainer = styled.div`
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: ${fontColor};
  padding: 4px ${rhythm(0.75)} 0 ${rhythm(0.75)};
  overflow: hidden;

  /* @media ${device.desktop}, ${device.screen4k} {
    overflow: scroll;
  } */
  @media ${device.mobile}, ${device.tablet} {
    /* height: unset; */
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const HomeView = () => {
  const myRef = useRef(null);

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, myRef.current?.offsetTop - 4), 1000);
  }, []);

  return (
    <HomeViewContainer ref={myRef}>
      <AboutMe />
      <Projects />
    </HomeViewContainer>
  );
};
