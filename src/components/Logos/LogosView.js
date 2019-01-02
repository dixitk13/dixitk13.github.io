import React from "react";
import styled from "styled-components";
import strava from "./strava.png";
import twitter from "./twitter.svg";
import quora from "./quora.svg";
import github from "./github.jpg";

const Mentions = styled.div`
  display: flex;
  height: 48px;
  margin-bottom: 1rem;
  flex-direction: row;
  justify-content: space-between;
`;

const MentionsLogo = styled.img`
  width: ${props => props.width || "48px"};
  transform: ${props => props.transform || ""};
  height: 48px;
  margin-bottom: 0;
`;

const Link = styled.a`
  &:hover,
  &:active {
    box-shadow: 0 0 0 0;
  }
`;

const Href = ({ href, title, imgsrc, ...rest }) => {
  return (
    <Link target="_blank" href={href}>
      {imgsrc ? (
        <MentionsLogo src={imgsrc} {...rest}>
          {title}
        </MentionsLogo>
      ) : (
        title
      )}
    </Link>
  );
};

export default () => {
  const mentions = [
    {
      href: "https://www.quora.com/profile/Dixit-Patel-4",
      imgsrc: quora,
      alt: "Quora",
      width: "75px"
    },
    {
      href: "http://strava.com/athletes/19109068/badge",
      imgsrc: strava,
      alt: "Strava",
      transform: "scale(0.85)"
    },
    {
      href: "https://twitter.com/dixitk13",
      imgsrc: twitter,
      alt: "Twitter",
      transform: "scale(0.85)"
    },
    {
      href: "https://github.com/dixitk13",
      imgsrc: github,
      alt: "Github",
      width: "65px"
    }
  ];

  return (
    <Mentions>
      {mentions.map((mention, i) => (
        <Href key={`mentions-${i}`} {...mention} />
      ))}
    </Mentions>
  );
};
