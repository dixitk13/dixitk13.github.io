import React from "react";
import { graphql } from "gatsby";

import { Layout, SiteHelmet } from "../components/Layout";
import { HomeView } from "../components/Home";

export default ({ data }) => {
  return (
    <Layout>
      <SiteHelmet siteMetadata={data.site.siteMetadata} />
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
