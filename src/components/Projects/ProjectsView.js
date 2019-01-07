import React from "react";
import styled from "styled-components";

import { device } from "../../utils/device";
import Project from "./Project";
import { rhythm } from "../../utils/typography";

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <ProjectsContainer>
      <ProjectsViewContainer>
        {edges.map((edge, i) => {
          const { node } = edge;
          const { excerpt, frontmatter, html } = node;
          const { link, title, tags } = frontmatter;
          return (
            <Project
              key={i}
              html={html}
              title={title}
              link={link}
              tags={tags}
              body={excerpt}
            />
          );
        })}
      </ProjectsViewContainer>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectsViewContainer = styled.div`
  @media ${device.desktop} {
    width: 40vw;
    height: 95vh;
    overflow: scroll;
    padding: ${rhythm(0.5)} 0;
  }
  @media ${device.mobile} {
    // overflow: scroll;
    // height: 95vh;
    width: 90vw;
  }
  &:first-child {
    padding-top: 3px;
  }
`;
