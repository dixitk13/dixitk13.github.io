import React from "react";

import { BlogWrapper } from "../components/Blog";
import { SEO } from "../components/SEO";

import AboutMe from "../components/AboutMe";

const About = () => {
  return (
    <BlogWrapper>
      <SEO />
      <AboutMe flat />
    </BlogWrapper>
  );
};

export default About;
