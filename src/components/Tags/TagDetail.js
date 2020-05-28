import React from "react";
import { Link, graphql } from "gatsby";

import { BlogWrapper } from "../Blog";
import styled from "styled-components";

const TagDetailContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const TagsSection = styled.div``;

export default function TagDetail({ pageContext, data }) {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <BlogWrapper>
      <TagDetailContainer>
        <TagsSection>
          <h3>{tagHeader}</h3>
          <ul>
            {edges.map(({ node }) => {
              const { title, path } = node.frontmatter;
              return (
                <li key={path}>
                  <Link to={path}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </TagsSection>
        <Link to="/tags">All tags</Link>
      </TagDetailContainer>
    </BlogWrapper>
  );
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, type: { eq: "blog" } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            tags
            link
            path
          }
        }
      }
    }
  }
`;
