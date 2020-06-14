import React from "react";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { HomeView, HomeNavWrapper } from "../components/Home";
import { Navigation } from "../components/Blog";

export default () => {
  return (
    <Layout>
      <HomeNavWrapper>
        <SEO />
        <Navigation background />
        <HomeView />
      </HomeNavWrapper>
    </Layout>
  );
};
