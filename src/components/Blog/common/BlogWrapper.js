import React from "react";
import { Layout } from "../../Layout";
import { BlogWrapperView } from "./BlogWrapperView";

export const BlogWrapper = (props) => {
  return (
    <Layout>
      <BlogWrapperView>{props.children}</BlogWrapperView>
    </Layout>
  );
};
