import React from "react";
import styled from "styled-components";
import strava from "./strava.png";
import twitter from "./twitter.svg";
import quora from "./quora.svg";

const Mentions = styled.div`
  display: flex;
  height: 48px;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MentionsLogo = styled.img`
  width: ${props => props.width || "48px"};
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
  return (
    <Mentions>
      <Href
        href="https://www.quora.com/profile/Dixit-Patel-4"
        imgsrc={quora}
        alt="quora"
        width="75px"
      />
      <Href
        href="http://strava.com/athletes/19109068/badge"
        imgsrc={strava}
        alt="strava"
      />
      <Href
        href="https://twitter.com/dixitk13"
        imgsrc={twitter}
        alt="twitter"
      />
    </Mentions>
  );
};
