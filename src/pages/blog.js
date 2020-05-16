import React from "react";
import { graphql } from "gatsby";

// TODO: fix import for Blog folder
import { BlogPosts } from "../components/Blog/BlogPosts";
import { SiteHelmet } from "../components/Layout";
import { BlogWrapper } from "../components/Blog/common";

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
