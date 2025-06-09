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

  @media ${device.mobile}, ${device.tablet} {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const HomeView = () => {
  const myRef = useRef(null);
  const timeout = useRef(0);

  // todo: stop scrolling if user has started scrolling
  useEffect(() => {
    timeout.current = setTimeout(() => {
      window.scrollTo(0, myRef.current?.offsetTop - 4);
    }, 1000);
    return () => timeout.current && clearTimeout(timeout.current);
  }, []);

  return (
    <HomeViewContainer ref={myRef}>
      <AboutMe />
      <Projects />
    </HomeViewContainer>
  );
};
