import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import { BlogPostsViewContainer } from "../common/";

export default function BlogPostTemplate({ data }) {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;
  const { title, date } = frontmatter;
  return (
    <BlogPostsViewContainer>
      <Helmet title={title} />
      <article>
        <h1>{title}</h1>
        <small>{date}</small>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </BlogPostsViewContainer>
  );
}

export const query = graphql`
  query blogPostByPath($path: String!) {
    markdownRemark(frontmatter: { type: { eq: "blog" }, path: { eq: $path } }) {
      id
      frontmatter {
        title
        type
        date
      }
      html
    }
  }
`;
