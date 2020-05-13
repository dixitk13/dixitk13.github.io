import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
// import Cubbles from "../components/Cubbles";

import favicon from "../../static/favicon.ico";

export default ({ data }) => (
  <Layout>
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: data.site.siteMetadata.title,
        },
        {
          name: "keywords",
          content: "gatsbyjs, reactjs, graphql, dixitk13",
        },
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <AboutMe />
    <Projects />
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
