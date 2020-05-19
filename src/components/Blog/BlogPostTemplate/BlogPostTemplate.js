import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";

import { BlogWrapper } from "../common";
import { rhythm } from "../../../utils";
import { fontColor } from "../../../styles";

export default function BlogPostTemplate({ data }) {
  const { markdownRemark: post } = data;
  const { frontmatter, html, timeToRead } = post;
  const { title, date } = frontmatter;
  return (
    <BlogWrapper>
      <Helmet title={title} />
      <BlogMainArticle>
        <BlogHeader>
          <BlogTitle>{title}</BlogTitle>
          <p>
            Last updated: {date} • {timeToRead} min read
          </p>
        </BlogHeader>
        <BlogBody dangerouslySetInnerHTML={{ __html: html }} />
      </BlogMainArticle>
    </BlogWrapper>
  );
}

const BlogMainArticle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  width: 100%;
`;

const BlogHeader = styled.div.attrs({
  tabIndex: 0,
})`
  padding: ${rhythm(1)} 0 0 0;
  width: 100%;
  text-align: center;

  p {
    opacity: 0.8;
    font-size: ${rhythm(0.75)};
    &:after {
      content: "";
      margin: ${rhythm(1)} auto;
      display: block;
      width: 200px;
      height: 2px;
      border-radius: 50%;
      background-color: ${fontColor};
      opacity: 0.4;
    }
  }
`;

const BlogTitle = styled.h1`
  color: ${fontColor};
  font-weight: 700;
`;

const BlogBody = styled.article`
  font-size: ${rhythm(0.75)};
  width: 100%;
  a {
    color: ${fontColor};
  }
  code {
    font-size: ${rhythm(0.75)};
  }
  pre {
    background: #282c34;
    border-radius: 6px;
    color: #abb2bf;
    overflow: auto;
    padding: 14px 18px;
    line-height: 1.6;
  }
`;

export const query = graphql`
  query blogPostByPath($path: String!) {
    markdownRemark(frontmatter: { type: { eq: "blog" }, path: { eq: $path } }) {
      id
      frontmatter {
        title
        type
        date(formatString: "MMM DD, YYYY")
      }
      timeToRead
      html
    }
  }
`;
