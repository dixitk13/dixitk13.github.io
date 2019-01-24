import React from "react";
import styled from "styled-components";
import { IconDict } from "../../../../static/svg";

const Mentions = styled.div`
  display: flex;
  height: 48px;
  margin-bottom: 1rem;
  flex-direction: row;
  justify-content: space-around;
  flex: 0 1 auto;
`;

const MentionsLogo = styled.img`
  width: ${props => props.width || "48px"};
  height: 48px;
  margin-bottom: 0;
  transition: all 0.2s ease-in-out;
  transform: ${props => props.scale};
  &:hover {
    transform: ${props => props.transform};
  }
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
      imageName: "quora",
      alt: "Quora",
      width: "75px",
      transform: "scale(0.95)",
      scale: "scale(0.85)"
    },
    {
      href: "http://strava.com/athletes/19109068/badge",
      imageName: "strava",
      alt: "Strava",
      transform: "scale(0.75)",
      scale: "scale(0.65)"
    },
    {
      href: "https://twitter.com/dixitk13",
      imageName: "twitter",
      alt: "Twitter",
      transform: "scale(0.75)",
      scale: "scale(0.65)"
    },
    {
      href: "https://github.com/dixitk13",
      imageName: "github",
      alt: "Github",
      width: "65px",
      transform: "scale(0.75)",
      scale: "scale(0.85)"
    }
  ];

  return (
    <Mentions>
      {mentions.map((mention, i) => (
        <Href
          key={`mentions-${i}`}
          {...mention}
          imgsrc={IconDict[mention.imageName]}
        />
      ))}
    </Mentions>
  );
};
