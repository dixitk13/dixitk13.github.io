import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { BlogPostsView } from "./BlogPostsView";

// TODO: add how long to read via timeToRead
export const getAllBlogs = graphql`
  query getAllBlogs {
    blogs: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            type
            date(formatString: "MMM DD, YYYY")
            title
          }
          excerpt(truncate: true)
        }
      }
      totalCount
    }
  }
`;
export const BlogPosts = () => {
  return (
    <StaticQuery
      query={getAllBlogs}
      render={({ blogs }) => {
        return <BlogPostsView blogs={blogs.edges} />;
      }}
    />
  );
};
