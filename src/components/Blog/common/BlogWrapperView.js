import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { device, rhythm } from "../../../utils";
import {
  entireBackground,
  entireBackgroundImage,
  fontColor,
} from "../../../styles";
import dixitk13 from "../../../../static/img/dixitk13.jpg";
import { CircularImage } from "../../../common";
import { Navigation } from "./Navigation";

// TODO: Might be worth to invert this selector vs screen media
export const BlogWrapperView = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin: 0 auto;
  align-items: center;
  background-color: ${entireBackground};
  background: ${entireBackgroundImage};
  color: ${fontColor};
  padding: ${rhythm(0.75)};
  h1 {
    font-size: ${rhythm(2.5)};
    @media ${device.mobile} {
      font-size: ${rhythm(1.5)};
    }
  }
  // first direct header class
  > header,
  main {
    width: 40vw;
    max-width: 40vw;
    @media ${device.mobile} {
      max-width: 100%;
      width: 100%;
    }
  }
  main {
    @media ${device.screen4k} {
      height: 100vh;
    }
    @media ${device.desktop} {
      height: 100%;
    }
  }
`;
export const BlogHeading = styled.header`
  font-size: 1.8rem;
  margin: 20px 5px 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogName = styled.div`
  display: flex;
  flex-direction: column;
  a,
  h1 {
    margin: 0;
    font-size: 2rem;
    color: ${fontColor};
    text-decoration: none;
  }
  span {
    font-size: 1.2rem;
    opacity: 0.8;
  }
`;

const FloatingThemeButton = styled.span`
  top: 10px;
  right: 10px;
  position: absolute;
`;

export const BlogHeaderView = (props) => {
  return (
    <>
      <BlogHeading>
        <CircularImage src={dixitk13} />
        <BlogName>
          <Link as="h1" to="/">
            Dixit
          </Link>
          <span>Software Engineer</span>
        </BlogName>
      </BlogHeading>
      <Navigation />
      <FloatingThemeButton>{props && props.children}</FloatingThemeButton>
    </>
  );
};
