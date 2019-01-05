import React from "react";
import styled from "styled-components";

import { device } from "../../utils/device";
import Project from "../Project";
import { rhythm } from "../../utils/typography";

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <ProjectsContainer>
      {/*<HeaderSection>*/}
      {/*<Header>Projects</Header>*/}
      {/*<SubHeader>A set of Cool Projects which I spawn when bored</SubHeader>*/}
      {/*</HeaderSection>*/}
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

// const HeaderSection = styled.div`
//   margin: ${rhythm(0.25)} 0;
//   text-align: center;
// `;
//
// const Header = styled.h1`
//   font-size: 24px;
//   cursor: pointer;
//   margin: ${rhythm(0.25)} 0;
// `;
//
// const SubHeader = styled.span`
//   font-size: 18px;
//   font-weight: 400;
//   color: rgb(92, 97, 102);
// `;

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
