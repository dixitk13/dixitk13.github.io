import React from "react";
import styled from "styled-components";

import { device } from "../../utils/device";
import Project from "../Project";

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  console.log("edges ", edges);

  const projects = Array(10)
    .fill(1)
    .map((x, i) => i);

  return (
    <ProjectsContainer>
      {projects.map((project, i) => <Project key={i} />)}
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  @media not screen and ${device.mobile} {
    overflow: scroll;
    height: 95vh;
  }
`;
