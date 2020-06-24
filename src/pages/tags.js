import React from "react";
import { graphql } from "gatsby";

import { SEO } from "../components/SEO";
import { BlogWrapper } from "../components/Blog";
import { TagList } from "../components/Tags";

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <BlogWrapper>
    <SEO title={title} />
    <TagList group={group} />
  </BlogWrapper>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000, filter: { frontmatter: { type: { eq: "blog" } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
