import React, { Component } from "react";
import ProjectsView from "./ProjectsView";
import { StaticQuery, graphql } from "gatsby";

class Projects extends Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => <ProjectsView data={data} />}
      />
    );
  }
}

const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            link
            tags
          }
          excerpt(truncate: false)
        }
      }
    }
  }
`;

export default Projects;
