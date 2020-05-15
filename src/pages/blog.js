import React from "react";

import { BlogPosts } from "../components/Blog/BlogPosts";
import { SiteHelmet, Layout } from "../components/Layout";

const blog = ({ data }) => {
  return (
    <Layout>
      <SiteHelmet siteMetadata={data.site.siteMetadata} />
      <BlogPosts />
    </Layout>
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
