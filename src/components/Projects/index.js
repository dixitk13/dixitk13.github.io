import React, { useState } from "react";
import ProjectsView from "./ProjectsView";
import { StaticQuery, graphql } from "gatsby";
const getAllProjects = graphql`
  query {
    projects: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          body
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            link
            tags
            images
          }
          excerpt(truncate: false)
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
