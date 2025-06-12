import React from "react";
import { graphql } from "gatsby";

import { SEOComponent } from "../components/SEO";
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
    <SEOComponent title={title} />
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
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
