import React from "react";
import styled from "styled-components";

import { device } from "../../utils/device";
import ProjectCard from "./ProjectCard";

export default ({ data, cardNumber, ...rest }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <MainContainer>
      <ProjectCardsContainer>
        {edges.map((edge, i) => {
          const { node } = edge;
          const { excerpt, frontmatter, html } = node;
          return (
            <ProjectCard
              key={`project-card-${i}`}
              id={i}
              index={i}
              open={cardNumber === i}
              active={cardNumber !== -1}
              html={html}
              body={excerpt}
              {...frontmatter}
              {...rest}
            />
          );
        })}
      </ProjectCardsContainer>
    </MainContainer>
  );
};

const ProjectCardsContainer = styled.ul.attrs({
  role: "list",
  "aria-label": "Projects",
})`
  margin: 0;
  @media ${device.desktop} {
    display: flex;
    flex-flow: row wrap;
    width: 40vw;
    height: 100%;
  }
  @media ${device.mobile} {
    width: 90vw;
    display: flex;
    padding: 0;
    flex-direction: column;
  }
`;

const MainContainer = styled.main`
  @media ${device.screen4k} {
    max-width: 40vw;
  }
`;
