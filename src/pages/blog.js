import React from "react";

import { BlogPosts, BlogWrapper } from "../components/Blog";
import { SEOComponent } from "../components/SEO";

const Blog = () => {
  return (
    <BlogWrapper>
      <SEOComponent />
      <BlogPosts />
    </BlogWrapper>
  );
};

export default Blog;
