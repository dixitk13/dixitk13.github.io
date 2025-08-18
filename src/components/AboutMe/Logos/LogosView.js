import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";

import { Icons } from "../../../../static/svg";
import { device } from "../../../utils";
import { fontColor, fontHover } from "../../../styles";

const Mentions = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  /**
   * enableLayout will enable row for mobile, col for desktop 
   * else, its always row
   */
  ${({ enableLayout }) =>
    enableLayout &&
    css`
      flex-direction: column;
      @media ${device.mobile} {
        flex-direction: row;
      }
    `}

  min-height: 48px;
  margin-bottom: 1rem;
  flex: 0 1 auto;
`;

const MentionsLogo = styled.img`
  width: ${(props) => props.width || "48px"};
  height: 48px;
  margin-bottom: 0;
`;

const Link = styled.a`
  text-decoration: none;
  transform: ${(props) => props.scale};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: ${(props) => props.transform};
  }
  &:hover,
  &:active {
    box-shadow: 0 0 0 0;
  }
`;

const TitleLogo = styled.span`
  color: ${fontColor};
  font-weight: 500;
  font-size: 16px;
  &:hover {
    color: ${fontHover};
  }
`;

const Href = ({ href, title, imgsrc, scale, transform, alt, ...rest }) => {
  return (
    <Link
      transform={transform}
      scale={scale}
      rel="noopener noreferrer"
      target="_blank"
      href={href}
    >
      {imgsrc ? (
        <MentionsLogo src={imgsrc} alt={`Click to open ${alt}`} {...rest}>
          {title}
        </MentionsLogo>
      ) : (
        <TitleLogo>{title}</TitleLogo>
      )}
    </Link>
  );
};

const LogosView = ({ extraMentions = [], enableLayout }) => {
  let mentions = [
    {
      href: "https://www.quora.com/profile/Dixit-Patel-4",
      imageName: "quora",
      alt: "Quora",
      width: "75px",
      transform: "scale(0.95)",
      scale: "scale(0.85)",
    },
    {
      href: "https://www.strava.com/athletes/19109068",
      imageName: "strava",
      alt: "Strava",
      transform: "scale(0.75)",
      scale: "scale(0.65)",
    },
    {
      href: "https://twitter.com/dixitk13",
      imageName: "twitter",
      alt: "Twitter",
      transform: "scale(0.75)",
      scale: "scale(0.65)",
    },
    {
      href: "https://github.com/dixitk13",
      imageName: "github",
      alt: "Github",
      width: "48px",
      transform: "scale(0.75)",
      scale: "scale(0.85)",
    },
    {
      href: "https://linkedin.com/in/dixitk13",
      imageName: "linkedin",
      alt: "linkedin",
      width: "48px",
      transform: "scale(0.75)",
      scale: "scale(0.85)",
    },
  ];
  if (extraMentions) mentions = [...mentions, ...extraMentions];

  return (
    <Mentions
      enableLayout={enableLayout}
      aria-label="Contact me"
      role="navigation"
    >
      {mentions.map((mention, i) => (
        <Href
          key={`mentions-${i}`}
          {...mention}
          imgsrc={Icons[mention.imageName]}
        />
      ))}
    </Mentions>
  );
};

LogosView.propTypes = {
  extraMentions: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      imageName: PropTypes.string,
      title: PropTypes.string,
      iconText: PropTypes.string,
      alt: PropTypes.string.isRequired,
      transform: PropTypes.string.isRequired,
      scale: PropTypes.string.isRequired,
    })
  ),
  enableLayout: PropTypes.bool,
};

export default LogosView;
