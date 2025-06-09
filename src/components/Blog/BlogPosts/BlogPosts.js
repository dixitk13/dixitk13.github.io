import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { BlogPostsView } from "./BlogPostsView";

export const getAllBlogs = graphql`
  query getAllBlogs {
    blogs: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          body
          excerpt(pruneLength: 150)
          frontmatter {
            path
            type
            date(formatString: "MMM DD, YYYY")
            title
          }
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
