import React from "react";
import styled, { css } from "styled-components";

import {
  fontColor,
  fontHover,
  entireBackground,
  entireBackgroundImage,
} from "../../../styles";
import { Link } from "gatsby";
import { rhythm, device } from "../../../utils";
import { offset } from "../../../common";

export const Nav = styled.nav`
  color: ${fontColor};
  height: ${offset}px;
  ${(props) =>
    props.background &&
    css`
      background: ${entireBackgroundImage};
      background-color: ${entireBackground};
    `};

  display: flex;
  justify-content: center;
  margin-left: 20px;
  ul {
    display: flex;
    width: 200px;
    margin: 0;
    list-style: none;
    @media ${device.mobile} {
      width: unset;
    }
  }
  li {
    padding: ${rhythm(0.5)} ${rhythm(1)} 0 0;
  }
  a {
    margin: 0;
    font-size: 1.5rem;
    color: ${fontColor};
    text-decoration: none;
    &:hover {
      color: ${fontHover};
    }
  }
`;

export const Navigation = ({ background }) => {
  return (
    <Nav background={background}>
      <ul>
        <li>
          <Link to="/" title="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" title="Articles">
            Articles
          </Link>
        </li>
      </ul>
    </Nav>
  );
};
