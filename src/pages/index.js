import React from "react";
import { graphql } from "gatsby";

import { Layout, SiteHelmet } from "../components/Layout";
import { HomeView } from "../components/Home";
import { Navigation } from "../components/Blog";

export default ({ data }) => {
  return (
    <Layout>
      <SiteHelmet siteMetadata={data.site.siteMetadata} />
      <Navigation background />
      <HomeView />
    </Layout>
  );
};
export const query = graphql`
  query querySiteMetaDataHome {
    site {
      siteMetadata {
        title
        image
        twitterUsername
      }
    }
  }
`;
