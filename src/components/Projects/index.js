import React, { Component } from "react";
import ProjectsView from "./ProjectsView";
import { StaticQuery, graphql } from "gatsby";
const getAllProjects = graphql`
  query {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          html
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

class Projects extends Component {
  state = {
    cardNumber: -1,
  };

  toggleOpen = (newCardNumber) =>
    this.setState(({ cardNumber }) => ({
      cardNumber: cardNumber === newCardNumber ? -1 : newCardNumber,
    }));

  render() {
    return (
      <StaticQuery
        query={getAllProjects}
        render={(data) => (
          <ProjectsView
            cardNumber={this.state.cardNumber}
            toggleOpen={this.toggleOpen}
            data={data}
          />
        )}
      />
    );
  }
}

export default Projects;
