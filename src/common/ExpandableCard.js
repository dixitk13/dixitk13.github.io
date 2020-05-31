import styled, { css } from "styled-components";

import { device, rhythm } from "../utils";
import {
  background,
  expandedCardContent,
  borderColor,
  fontColor,
  boxShadow,
  fontHover,
  commonTransition,
} from "../styles";

// magic number
export const numberOfCards = 2;

/* Expander Card Classes */
export const Expander = styled.div.attrs(({ cardId, open }) => ({
  id: `projectcard__expander-${cardId}`,
  "aria-hidden": open ? "false" : "true",
  tabIndex: open ? 0 : -1,
  "aria-labelledby": `projectcard__title-${cardId}`,
}))`
  transition: ${commonTransition};
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px; /*${rhythm(0.25)};*/

  max-height: 0;
  min-height: 0;
  overflow: hidden;
  margin-top: 0;
  opacity: 0;
  border: 1px solid ${borderColor};
  background: ${expandedCardContent};

  ${(props) =>
    props.open
      ? `
        max-height: 1000px;
        min-height: 200px;
        width: calc(200% + 20px);
        overflow: visible;
        margin-top: 30px;
        opacity: 1;
        z-index: 10;
        padding: ${rhythm(1)} ${rhythm(1)} ${rhythm(0.5)} ${rhythm(1)};
        `
      : `display: none;`};

  @media ${device.mobile} {
    width: ${(props) => (props.open ? "100%" : "")};
  }
`;

export const ExpanderBody = styled.article.attrs({
  tabIndex: 0,
})`
  font-size: ${rhythm(0.65)}; // <- ya right
  align-self: start;
  margin-top: 20px; // duh
`;

export const ExpanderClose = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background: none;
  border: none;
`;

export const Cross = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  top: -2px;
  right: 11px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    top: 50%;
    height: 1px;
    background: ${fontColor};
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover:before,
  &:hover:after {
    color: ${fontHover};
  }
`;

export const Tags = styled.ul.attrs({
  tabIndex: 0,
})`
  list-style: none;
  display: flex;
  font-size: ${rhythm(0.5)};
  justify-content: center;
  margin: 21px 0 0 0;
  width: 100%;

  @media ${device.mobile} {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const Tag = styled.li.attrs({ tabIndex: 0 })`
  padding: 3px 6px;
  display: inline;
  margin: ${rhythm(0.25)};
  border-radius: 3px; /*${rhythm(0.25)};*/
  font-weight: ${rhythm(0.25)};
  color: ${fontColor};
  background: ${background};
  border: 0.5px solid ${fontColor};
  line-height: 13px;
  max-height: 21px;
  min-height: 21px;
  white-space: nowrap;
  @media ${device.desktop} {
    &:nth-of-type(n + 7) {
      display: none;
    }
  }

  @media ${device.mobile} {
    display: flex;
    flex-wrap: wrap;
    &:nth-of-type(n + 5) {
      display: none;
    }
  }
  &:first-child {
    margin-left: 0;
  }
`;

// Specific Card container classes
export const CardContainer = styled.article`
  width: 100%;
  padding: ${rhythm(0.25)} ${rhythm(0.5)};
  border-radius: 3px; /*${rhythm(0.25)};*/
  min-height: ${rhythm(4)};
  position: relative;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: start;

  transition: ${commonTransition};
  background: ${background};

  // just the triangle after the div
  &:after {
    transition: ${commonTransition};
    content: "";
    display: block;
    height: 0;
    width: 0;
    position: absolute;
    bottom: -30px;
    left: calc(50% - 15px);
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    opacity: ${(props) => (props.open ? "1" : "0")};
    border-bottom: ${(props) => (props.open ? "15" : "0")}px solid
      ${borderColor};
  }
`;

// TODO: some project titles are two liners even though there's space
export const HeaderContainer = styled.button.attrs(({ cardId, open }) => ({
  tabIndex: 0,
  id: `projectcard__title_${cardId}`,
  "aria-expanded": open ? "true" : "false",
  "aria-controls": `projectcard__expander-${cardId}`,
}))`
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 40px; // <- debatable CSS

  color: ${fontColor};
  margin: 10px 0;
  font-size: ${rhythm(0.85)};
  cursor: pointer;
  font-weight: 550;
  &:hover {
    color: ${fontHover};
  }
`;

export const ViewMore = styled(Tag)`
  margin-left: auto;
  font-size: ${rhythm(0.5)};
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 4px;
  &:hover {
    color: ${fontHover};
  }
`;

export const Body = styled.article.attrs({ tabIndex: 0 })`
  font-size: ${rhythm(0.65)};
  text-align: left;
  min-height: 85px;
`;

/* Normal Card Classes */
export const Card = styled.li.attrs(({ active, open }) => ({
  role: "listitem",
  tabIndex: active ? -1 : 0,
}))`
  list-style: none;
  border: none;
  display: inline-block;
  margin: 10px;
  width: calc((100% / ${numberOfCards}) - 20px);
  transition: ${commonTransition};
  border-radius: 3px; /*${rhythm(0.5)};*/
  box-shadow: ${boxShadow};

  background: ${background};
  color: ${fontColor};

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
      // transform: ${(props) => (props.open ? "" : "scale(0.99)")};
      transform: ${(props) => (props.open ? "" : "translateY(-2px)")};
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
  ${({ active, open }) =>
    active &&
    !open &&
    css`
      opacity: 0.5;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 2px;
      &:hover {
        transform: unset;
      }
    `};
  /** ^^ if some card is active this card isn't open then opacity 0.5 */
`;
