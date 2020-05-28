import React from "react";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { HomeView } from "../components/Home";
import { Navigation } from "../components/Blog";

export default () => {
  return (
    <Layout>
      <SEO />
      <Navigation background />
      <HomeView />
    </Layout>
  );
};
