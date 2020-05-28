import React from "react";
import styled, { css } from "styled-components";
import { useLocation } from "@reach/router";

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
  padding-left: 20px;

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
  const { pathname } = useLocation();

  const items = [
    { title: "Home", to: "/" },
    { title: "Blog", to: "/blog" },
    { title: "Tags", to: "/tags" },
  ];
  return (
    <Nav background={background}>
      <ul>
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              title={item.title}
              partiallyActive={item.to === pathname}
              activeStyle={{ color: "gray" }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </Nav>
  );
};
