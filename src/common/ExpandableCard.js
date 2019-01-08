import styled from "styled-components";
import { rhythm } from "../utils/typography";
import { device } from "../utils/device";

export const ExpandableCardContainer = styled.div`
  flex-basis: 45%;
  height: 150px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  z-index: 2;
  border-radius: ${rhythm(0.25)};
  min-height: ${rhythm(4)};
  border-top: ${rhythm(0.5)} solid transparent;
  // overflow: hidden;
  margin: 5px 0;
  transition: all 0.5s ease;
  padding: ${rhythm(0.25)} ${rhythm(0.5)};
  position: relative;
  &:hover {
    transform: ${props => (props.open ? "" : "scale(0.95)")};
  }
`;

export const HeaderContainer = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${props =>
    props.open
      ? `
      &:after {
        top: auto;
        border: solid transparent;
        content: " ";
        // content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-bottom-color: #ddd;
        border-width: 15px;
        left: 50%;
        top: 100%;
        margin: -20px 0 0 -15px;
       }
      `
      : ""};
`;

export const Header = styled.div`
  color: ${props =>
    props.open ? "rgba(0, 0, 0, 0.8);" : "rgba(0, 0, 0, 0.5)"};
  font-size: ${rhythm(0.75)};
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const OpenLink = styled.a`
  margin-left: auto;
  font-size: ${rhythm(0.75)};
  margin-top: -3px;
`;

export const ExpandedDiv = styled.div`
  display: flex;
  flex-direction: column;

  transition: height 350ms ease 0s;
  height: 0;
  ${props =>
    props.open
      ? `
         height: 500px;
         padding: 50px 30px;
        `
      : ""};
`;

export const ExpandedInner = styled.div`
  display: flex;
  justify-items: space-between;
`;

export const Close = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
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

export const Body = styled.div``;
