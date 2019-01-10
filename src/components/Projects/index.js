import React, { Component } from "react";
import ProjectsView from "./ProjectsView";
import { StaticQuery, graphql } from "gatsby";

class Projects extends Component {
  state = {
    cardNumber: -1
  };

  toggleOpen = newCardNumber =>
    this.setState(({ cardNumber }) => ({
      cardNumber: cardNumber === newCardNumber ? -1 : newCardNumber
    }));

  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
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

const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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

export default Projects;
