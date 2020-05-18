import React from "react";
import { Layout, LayoutContext } from "../../Layout";
import { BlogWrapperView, BlogHeaderView } from "./BlogWrapperView";
import Switch from "../../Switch";

export const BlogWrapper = (props) => {
  return (
    <Layout>
      <BlogWrapperView>
        <LayoutContext.Consumer>
          {({ theme }) => (
            <BlogHeaderView>
              <Switch>{theme}</Switch>
            </BlogHeaderView>
          )}
        </LayoutContext.Consumer>
        {props.children}
      </BlogWrapperView>
    </Layout>
  );
};
