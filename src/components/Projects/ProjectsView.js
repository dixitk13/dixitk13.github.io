import React from "react";
import styled from "styled-components";

import Project from "../Project";

export default () => {
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
  overflow: scroll;
  height: 90vh;
`;
