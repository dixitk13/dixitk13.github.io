import styled from "styled-components";
import { rhythm } from "../utils/typography";
import { device } from "../utils/device";

// magic number
export const numberOfCards = 2;

/* Expander Card Classes */
export const Expander = styled.div`
  transition: all 0.2s ease-in-out;
  // background-color: rgba(206, 212, 218, 0.51);
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: ${rhythm(0.25)};

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
        padding: ${rhythm(1)};
        background: rgba(206, 212, 218, 0.7);
        border: 1px solid #ced4da;
        `
      : ""};

  @media ${device.mobile} {
    width: ${props => (props.open ? "100%" : "")};
  }
`;

export const ExpanderBody = styled.div`
  font-size: ${rhythm(0.65)};
  align-self: start;
`;

export const ExpanderClose = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 20px;
  right: 20px;
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    top: 50%;
    height: 1px;
    background: #888;
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover:before,
  &:hover:after {
    background: #333;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-self: end;
  font-size: ${rhythm(0.5)};
  justify-content: center;
`;

export const Tag = styled.div`
  padding: 3px 6px;
  margin: ${rhythm(0.25)};
  border-radius: ${rhythm(0.25)};
  font-weight: ${rhythm(0.25)};
  color: rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.1);
  max-height: 25px;
  white-space: nowrap;
  @media ${device.desktop} {
    &:nth-child(n + 7) {
      opacity: 0;
    }
  }

  @media ${device.mobile} {
    &:nth-child(n + 5) {
      opacity: 0;
    }
  }
  &:first-child {
    margin-left: 0;
  }
`;

/* Normal Card Classes */
export const Card = styled.div`
  margin: 10px;
  width: calc((100% / ${numberOfCards}) - 20px);
  transition: all 0.5s ease-in-out;
  border-radius: ${rhythm(0.5)};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  background-color: ${props =>
    props.open ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)"};

  @media ${device.desktop} {
    // top-cards shouldn't have any margin
    &:nth-child(-n + ${numberOfCards}) {
      margin-top: 0;
    }

    // odd cards have no left margin for the expander
    &:nth-of-type(odd) ${Expander} {
      margin-left: 0;
    }

    // even cards have a special margin for the expanded for obvious CSS reasons
    &:nth-of-type(even) ${Expander} {
      margin-left: calc(-100% - 20px);
    }

    // only on desktop
    &:hover {
      transform: ${props => (props.open ? "" : "scale(0.95)")};
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

  // if some card is active this card isn't open then opacity 0.5
  ${props =>
    props.active && !props.open
      ? `
        opacity: 0.5;
        transform: scale(1);
        box-shadow: rgba(0,0,0,0.08) 0px 2px 2px;
        
        `
      : ""};
`;

export const CardContainer = styled.div`
  width: 100%;
  padding: ${rhythm(0.25)} ${rhythm(0.5)};
  border-radius: ${rhythm(0.25)};
  min-height: ${rhythm(4)};
  position: relative;
  cursor: pointer;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: start;

  transition: all 0.2s ease-in-out;
  background-color: ${props =>
    props.open ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)"};

  // just the triangle after the div
  &:after {
    transition: all 0.3s ease-in-out;
    content: "";
    display: block;
    height: 0;
    width: 0;
    position: absolute;
    bottom: -30px;
    left: calc(50% - 15px);
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    opacity: ${props => (props.open ? "1" : "0")};
    border-bottom: ${props => (props.open ? "15" : "0")}px solid #ced4da;
  }
`;

export const HeaderContainer = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 60px;
`;

export const Title = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-size: ${rhythm(0.75)};
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const OpenLink = styled.div`
  margin-left: auto;
  font-size: ${rhythm(0.75)};
  margin-top: -3px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  padding: 3px;
  &:hover {
    background: rgb(236, 237, 238);
    border-radius: 3px;
  }
`;

export const Body = styled.div`
  font-size: ${rhythm(0.5)};
  text-align: left;
  min-height: 85px;
`;
