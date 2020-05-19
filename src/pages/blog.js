import React from "react";
import { graphql } from "gatsby";

import { BlogPosts, BlogWrapper } from "../components/Blog";
import { SiteHelmet } from "../components/Layout";

const blog = ({ data }) => {
  return (
    <BlogWrapper>
      <SiteHelmet siteMetadata={data.site.siteMetadata} />
      <BlogPosts />
    </BlogWrapper>
  );
};

export const query = graphql`
  query querySiteMetaDataBlog {
    site {
      siteMetadata {
        title
        image
        twitterUsername
      }
    }
  }
`;

export default blog;
