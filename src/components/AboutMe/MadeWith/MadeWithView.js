import React from "react";
import styled from "styled-components";
import { IconDict } from "../../../../static/svg";
import { rhythm } from "../../../utils";
import { fontColor } from "../../../styles";
const items = [
  { name: "gatsby", url: "https://www.gatsbyjs.org/" },
  { name: "react", url: "https://reactjs.org/" },
  { name: "graphql", url: "http://graphql.org/" },
  {
    name: "styledcomponents",
    url: "https://styled-components.com",
    background: "#e0a90eba",
  },
  { name: "webpack", url: "https://webpack.js.org/" },
  { name: "babel", url: "https://babeljs.io/" },
  { name: "github", url: "https://www.github.com/" },
];

const Footer = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
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

const Icons = styled.ul.attrs({ role: "list" })`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 9px;
`;
const Icon = styled.li.attrs({
  role: "listitem",
})`
  list-style: none;
  margin-bottom: 3px;
`;

const Link = styled.a`
  padding: 10px;
`;

const IconImage = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 0;
  background: ${(props) => props.background || ""};
`;

const Title = styled.button`
  text-align: center;
  border: none;
  background: none;
  color: ${fontColor};
  font-size: ${rhythm(0.65)};
`;

const MadeWithView = () => {
  return (
    <Footer>
      <Title>Made with {<Heart />} using</Title>
      <Icons>
        {items.map((item) => (
          <Icon key={item.name}>
            <Link
              href={item.url}
              alt="Image"
              aria-label={`Technology Image ${item.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconImage
                alt={item.name}
                src={IconDict[item.name]}
                background={item.background}
              />
            </Link>
          </Icon>
        ))}
      </Icons>
    </Footer>
  );
};

export default MadeWithView;
