import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";

import ProjectsView from "./ProjectsView";

const getAllProjects = graphql`
  query {
    projects: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          body
          excerpt(pruneLength: 120)
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            link
            tags
            images
          }
        }
      }
    }
  }
`;

const Projects = () => {
  const [cardNumber, setCardNumber] = useState(-1);

  const toggleOpen = (newCardNumber) =>
    setCardNumber(cardNumber === newCardNumber ? -1 : newCardNumber);

  return (
    <StaticQuery
      query={getAllProjects}
      render={(data) => (
        <ProjectsView
          cardNumber={cardNumber}
          toggleOpen={toggleOpen}
          data={data}
        />
      )}
    />
  );
};

export default Projects;
