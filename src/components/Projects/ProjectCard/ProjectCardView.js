import React, { Fragment } from "react";
import styled from "styled-components";
// import * as Card from "../../../common/Card";
// import * as ECard from "../../../common/ExpandableCard";
import { rhythm } from "../../../utils/typography";
import { device } from "../../../utils/device";

export default ({
  id,
  title,
  link,
  tags,
  body,
  html,
  toggleOpen,
  open,
  active
}) => {
  return (
    <Card active={active} open={open} onClick={() => toggleOpen(id)}>
      <CardInner open={open}>
        Inside card
        {/*<ECard.HeaderContainer open={open}>*/}
        {/*<ECard.Header open={open} onClick={() => toggleOpen(id)}>*/}
        {/*{title}*/}
        {/*</ECard.Header>*/}
        {/*<ECard.OpenLink href={link}>↗</ECard.OpenLink>*/}
        {/*</ECard.HeaderContainer>*/}
        {/*<ECard.ExpandedDiv open={open}>*/}
        {/*{open && (*/}
        {/*<Fragment>*/}
        {/*<ECard.ExpandedInner>*/}
        {/*<div>Some header</div>*/}
        {/*<ECard.Close />*/}
        {/*</ECard.ExpandedInner>*/}
        {/*<ECard.Body>expanded version</ECard.Body>*/}
        {/*</Fragment>*/}
        {/*)}*/}
        {/*</ECard.ExpandedDiv>*/}
        {/*<Card.Description open={!open}>{body}</Card.Description>*/}
        {/*<Card.Tags>*/}
        {/*{tags.map((tag, i) => (*/}
        {/*<Card.Tag key={`card-tag-${i}-${tag}`}>{tag}</Card.Tag>*/}
        {/*))}*/}
        {/*</Card.Tags>*/}
      </CardInner>
      <Expander open={open} />
    </Card>
  );
};

// magic number
const numberOfCards = 2;

const Expander = styled.div`
  transition: all 0.2s ease-in-out;
  background-color: slate;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: light-gray;
  font-size: 1.5em;

  max-height: 0;
  min-height: 0;
  overflow: hidden;
  margin-top: 0;
  opacity: 0;
  ${props =>
    props.open
      ? `
        max-height: 1000px;
        min-height: 200px;
        width: calc(200% + 20px);
        overflow: visible;
        margin-top: 30px;
        opacity: 1;
        z-index: 10;
        border: 1px solid green;
        `
      : ""};

  @media ${device.mobile} {
    width: ${props => (props.open ? "100%" : "")};
  }
`;

const Card = styled.div`
  margin: 10px;
  width: calc((100% / ${numberOfCards}) - 20px);
  transition: all 0.5s ease-in-out;
  border-radius: ${rhythm(0.25)};

  @media ${device.desktop} {
    &:nth-child(-n + ${numberOfCards}) {
      margin-top: 0;
    }
    &:nth-of-type(odd) ${Expander} {
      margin-left: 0;
    }
    &:nth-of-type(even) ${Expander} {
      margin-left: calc(-100% - 20px);
    }
  }

  @media ${device.mobile} {
    width: 100%;
    margin: 10px 0;
    min-height: ${rhythm(4)};
    &:first-child {
      margin-top: 20px;
    }
  }

  &:hover {
    transform: ${props => (props.open ? "" : "scale(0.95)")};
  }

  ${props =>
    props.active
      ? `
        opacity: 0.5;
        transform: scale(1);
        `
      : ""};
`;

const CardInner = styled.div`
  width: 100%;
  padding: 30px;
  position: relative;
  cursor: pointer;

  color: light-gray;
  font-size: 1.5em;
  text-transform: uppercase;
  text-align: center;

  transition: all 0.2s ease-in-out;

  &:after {
    transition: all 0.3s ease-in-out;
    content: "";
    opacity: 0;
    ${props =>
      props.open
        ? `
          opacity: 1;
          display: block;
          height: 0;
          width: 0;
          position: absolute;
          bottom: -30px;
          left: calc(50% - 15px);
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-bottom: 15px solid #333a45;
          `
        : ""};
  }

  background-color: ${props => (props.open ? "red" : "gray")};
`;
