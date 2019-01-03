import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

export default ({ data }) => (
  <Layout>
    <title> {data.site.siteMetadata.title}</title>
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
