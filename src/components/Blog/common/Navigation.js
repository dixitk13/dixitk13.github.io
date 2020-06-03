import React from "react";
import styled, { css } from "styled-components";
import { flattenDeep } from "lodash";

import {
  fontColor,
  fontHover,
  entireBackground,
  entireBackgroundImage,
} from "../../../styles";
import { Link as GatsbyLink } from "gatsby";
import { rhythm, device } from "../../../utils";
import { offset } from "../../../common";

export const Nav = styled.nav.attrs({
  id: "web-nav",
})`
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
  padding: 0 20px;
`;

const NavUnorderedList = styled.ul`
  display: flex;
  min-width: 200px;

  margin: 0;
  list-style: none;
  @media ${device.mobile}, ${device.tablet} {
    width: unset;
  }

  li {
    padding: ${rhythm(0.5)} ${rhythm(0.75)} 0 0;
    font-size: 21px;
  }
  .active-nav-link {
    margin: 0;
    color: gray;
    text-decoration: none;
    text-decoration: none !important;
  }
`;

export const NavLink = styled(GatsbyLink)`
  margin: 0;
  color: ${fontColor};
  font-size: 21px;
  text-decoration: none;

  &:hover {
    color: ${fontHover};
  }
`;

export const Navigation = ({ background }) => {
  const items = [
    { title: "Home", to: "/" },
    { title: "Blog", to: "/blog" },
    { title: "Tags", to: "/tags" },
    { title: "About", to: "/about" },
  ];
  const activeClassNames = { className: "active-nav-link" };

  const active = (pathname, link) => {
    // base condition
    if (link === pathname || `${link}/` === pathname) return activeClassNames;

    // condition for tag paths true
    if (pathname.includes("/tags") && link === "/tags") {
      return activeClassNames;
    }

    // condition to make all blog paths true
    if (
      !pathname.includes("/tags") &&
      !flattenDeep(items.map((x) => [x.to, `${x.to}/`])).includes(pathname) &&
      link === "/blog"
    ) {
      return activeClassNames;
    }

    return {};
  };
  return (
    <Nav background={background}>
      <NavUnorderedList>
        {items.map((item, index) => (
          <li key={`nav-link-${item.to}-${index}`}>
            <NavLink
              to={item.to}
              title={item.title}
              getProps={({ location }) => active(location.pathname, item.to)}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </NavUnorderedList>
    </Nav>
  );
};
