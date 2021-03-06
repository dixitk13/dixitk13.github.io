import React from "react";
import styled from "styled-components";
import { Icons } from "../../../../static/svg";
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

const Footer = styled.footer`
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

const Heart = styled.span.attrs({ "aria-label": "love " })`
  color: #d32f2f;
  &:after {
    content: "❤";
    aria-label: "love ";
  }
`;

const IconList = styled.ul.attrs({ role: "list" })`
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
  &:focus {
    outline: none;
  }
`;

const Title = styled.div`
  text-align: center;
  border: none;
  background: none;
  color: ${fontColor};
  font-size: ${rhythm(0.65)};
`;

const MadeWithView = () => {
  return (
    <Footer>
      <Title id="footer-title">Made with {<Heart />} using</Title>
      <IconList aria-labelledby="footer-title">
        {items.map((item) => (
          <Icon key={item.name}>
            <Link
              alt=""
              href={item.url}
              aria-label={item.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconImage
                alt={item.name}
                src={Icons[item.name]}
                background={item.background}
              />
            </Link>
          </Icon>
        ))}
      </IconList>
    </Footer>
  );
};

export default MadeWithView;
