import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";

import { BlogPostsView } from "./BlogPostsView";

// TODO: add how long to read via timeToRead
const getAllBlogs = graphql`
  query {
    blogs: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            type
            date
            title
          }
          excerpt(truncate: true)
        }
      }
      totalCount
    }
  }
`;

export class BlogPosts extends Component {
  render() {
    return (
      <StaticQuery
        query={getAllBlogs}
        render={({ blogs }) => {
          return <BlogPostsView blogs={blogs.edges} />;
        }}
      />
    );
  }
}
