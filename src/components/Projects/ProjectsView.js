import React from "react";
import styled from "styled-components";

import { device } from "../../utils/device";
import ProjectCard from "./ProjectCard";
import { rhythm } from "../../utils/typography";

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <CardsContainer>
      {edges.map((edge, i) => {
        const { node } = edge;
        const { excerpt, frontmatter, html } = node;
        const { link, title, tags } = frontmatter;
        return (
          <ProjectCard
            key={i}
            html={html}
            title={title}
            link={link}
            tags={tags}
            body={excerpt}
          />
        );
      })}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: flex;
  padding: ${rhythm(0.25)};
  @media ${device.desktop} {
    width: 40vw;
    flex-direction: row;
    flex-wrap: wrap;
    height: 95vh;
    // padding: ${rhythm(0.5)} 0;
  }
  @media ${device.mobile} {
    width: 90vw;
    flex-direction: column;
  }
`;

// const CardsViewContainer = styled.div`
//   @media ${device.desktop} {
//     width: 40vw;
//     height: 95vh;
//     overflow: scroll;
//     padding: ${rhythm(0.5)} 0;
//   }
//   @media ${device.mobile} {
//     // overflow: scroll;
//     // height: 95vh;
//     width: 90vw;
//   }
//   &:first-child {
//     padding-top: 3px;
//   }
// `;

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
