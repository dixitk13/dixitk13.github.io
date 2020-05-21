import React from "react";
import styled from "styled-components";

import resume from "../../../../static/misc/Dixit_Keshavbhai_Patel_2019.pdf";
import Switch from "../../Switch";
import { SimpleButton } from "../../../common/SimpleButton";

// TODO: this download button looks a bit round in mobile
const DownloadButton = styled(SimpleButton)`
  text-align: center;

  &:hover {
    background: rgb(226, 227, 228);
    box-shadow: none;
    transition-delay: 0.2s;
    color: transparent;
  }
  &:before {
    opacity: 0;
    position: absolute;
    color: black;
    content: attr(data-hover);
    transform: translate(0, 0);
    transition: 0.4s, opacity 0.6s;
  }
  &:hover:before {
    opacity: 1;
    transform: translate(-6px, 0);
    transition-delay: 0.2s;
  }
`;

const ButtonGroup = styled.div.attrs({
  role: "group",
  "aria-label": "Resume and Theme Button",
})`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  justify-content: space-evenly;
`;

const DownloadButtonsView = ({ theme, toggleOn }) => (
  <ButtonGroup>
    <DownloadButton
      type="button"
      ariaLabel="Download Resume"
      onClick={() => window.open(resume)}
      data-hover="Download"
      // target="_blank"
      // href={resume}
      // as="a"
      // rel="noopener noreferrer"
    >
      Resume
    </DownloadButton>

    <Switch toggleOn={toggleOn}>{theme}</Switch>
  </ButtonGroup>
);

export default DownloadButtonsView;
