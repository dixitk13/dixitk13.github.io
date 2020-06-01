import React from "react";

import { BlogPosts, BlogWrapper } from "../components/Blog";
import { SEO } from "../components/SEO";

const Blog = () => {
  return (
    <BlogWrapper>
      <SEO />
      <BlogPosts />
    </BlogWrapper>
  );
};

export default Blog;
