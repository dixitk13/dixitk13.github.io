import React from "react";

import { Layout } from "../components/Layout";
import { SEOComponent } from "../components/SEO";
import { HomeView, HomeNavWrapper } from "../components/Home";
import { Navigation } from "../components/Blog";

const Home = () => {
  return (
    <Layout>
      <HomeNavWrapper>
        <SEOComponent />
        <Navigation background />
        <HomeView />
      </HomeNavWrapper>
    </Layout>
  );
};

export default Home;
