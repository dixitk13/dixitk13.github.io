import React from "react";
import styled from "styled-components";

import gatsbyIcon from "../../../../static/svg/gatsby.svg";
import reactIcon from "../../../../static/svg/react.svg";
import graphqlIcon from "../../../../static/svg/graphql.svg";
import styledIcon from "../../../../static/svg/styled.png";
import webpackIcon from "../../../../static/svg/webpack.svg";
import babelIcon from "../../../../static/svg/babel.svg";
import githubIcon from "../../../../static/svg/github.svg";

const items = [
  { name: "gatsby", url: "https://www.gatsbyjs.org/", svg: gatsbyIcon },
  { name: "react", url: "https://reactjs.org/", svg: reactIcon },
  { name: "graphql", url: "http://graphql.org/", svg: graphqlIcon },
  {
    name: "styled-components",
    url: "https://styled-components.com",
    background: "#e0a90eba",
    svg: styledIcon
  },
  { name: "webpack", url: "https://webpack.js.org/", svg: webpackIcon },
  { name: "babel", url: "https://babeljs.io/", svg: babelIcon },
  { name: "github", url: "https://www.github.com/", svg: githubIcon }
];

const Footer = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  color: #666;
  margin-top: auto;
  a {
    transition: all 0.5s;
    &:hover {
      color: #555;
      z-index: 1;
    }
  }
`;

const Heart = styled.span`
  color: #d32f2f;
  &:after {
    content: "❤";
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Link = styled.a`
  padding: 10px;
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 0;
  background: ${props => props.background || ""};
`;

const Title = styled.div`
  text-align: center;
`;

const MadeWithView = () => {
  return (
    <Footer>
      <Title>Made with {<Heart />} using</Title>
      <Icons>
        {items.map(item => (
          <Link
            href={item.url}
            key={item.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={item.svg} background={item.background} />
          </Link>
        ))}
      </Icons>
    </Footer>
  );
};

export default MadeWithView;
