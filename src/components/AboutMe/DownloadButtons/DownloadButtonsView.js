import React from "react";
import styled from "styled-components";
import { rhythm } from "../../../utils/typography";

import resume from "../../../../static/misc/Dixit_Keshavbhai_Patel_2019.pdf";
import Switch from "../../Switch";
import { fontColor } from "../../../styles";

const DownloadLink = styled.a`
  text-align: center;
  &:hover {
    box-shadow: none;
  }
`;

const SimpleButton = styled.button`
  text-decoration: none;
  padding: 0;
  height: 21px;
  width: 90px;
  cursor: pointer;
  color: ${fontColor};
  margin: ${rhythm(0.25)};
  font-size: ${rhythm(0.5)};
  text-align: center;
  background: rgb(236, 237, 238, 0.7);
  border: 1px solid #cdd4db;
  border-radius: 3px;
  outline: none;
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const DownloadButton = styled(SimpleButton)`
  &:hover {
    background: rgb(226, 227, 228);
    transition-delay: 0.2s;
  }
  &:before {
    opacity: 0;
    position: absolute;
    content: attr(data-hover);
    transform: translate(-150%, 0);
    transition: 0.4s, opacity 0.6s;
  }
  &:hover:before {
    opacity: 1;
    transform: translate(25%, 0);
    transition-delay: 0.2s;
  }

  span {
    width: 100%;
    transition: 0.6s;
    transition-delay: 0.2s;
    display: inline-block;
    &:hover,
    &:focus {
      opacity: 0;
      transform: scale(0.3);
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  justify-content: space-evenly;
`;

const DownloadButtonsView = ({ theme, toggleOn }) => (
  <Buttons>
    <DownloadLink download target="_blank" href={resume}>
      <DownloadButton
        type="button"
        data-hover="Download"
        data-active="Starting..."
      >
        <span>Resume</span>
      </DownloadButton>
    </DownloadLink>

    <Switch toggleOn={toggleOn}>
      <SimpleButton>
        <span>{theme}</span>
      </SimpleButton>
    </Switch>
  </Buttons>
);

export default DownloadButtonsView;
