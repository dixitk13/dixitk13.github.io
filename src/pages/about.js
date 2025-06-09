import React from "react";

import { BlogWrapper } from "../components/Blog";
import { SEOComponent } from "../components/SEO";

import AboutMe from "../components/AboutMe";

const About = () => {
  return (
    <BlogWrapper>
      <SEOComponent />
      <AboutMe flat />
    </BlogWrapper>
  );
};

export default About;
