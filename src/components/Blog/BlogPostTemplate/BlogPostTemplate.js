import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";

import { BlogWrapper, BlogMain } from "../common";
import { mdxComponents } from "../../../common";
import { rhythm } from "../../../utils";
import { fontColor } from "../../../styles";
import { SEOComponent } from "../../SEO";

export default function BlogPostTemplate({ data, children, pageContext }) {
  if (!pageContext) return null;

  const { frontmatter, excerpt, timeToReadInWords } = pageContext ?? {};
  const { title, date } = frontmatter ?? {};
  return (
    <BlogWrapper>
      <SEOComponent title={title} description={excerpt || "nothin"} article />
      <BlogMain>
        <BlogHeader>
          <BlogTitle>{title}</BlogTitle>
          <p>
            Last updated: {date} •{" "}
            {timeToReadInWords && <span>{timeToReadInWords}</span>}
          </p>
        </BlogHeader>
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </BlogMain>
    </BlogWrapper>
  );
}

const BlogHeader = styled.div.attrs({
  tabIndex: 0,
})`
  padding: ${rhythm(1)} 0 0 0;
  width: 100%;
  text-align: center;

  p {
    opacity: 0.8;
    font-size: ${rhythm(0.75)};
    &:after {
      content: "";
      margin: ${rhythm(1)} auto;
      display: block;
      width: 200px;
      height: 2px;
      border-radius: 50%;
      background-color: ${fontColor};
      opacity: 0.4;
    }
  }
`;

const BlogTitle = styled.h1`
  color: ${fontColor};
  font-weight: 900;
  font-size: 40px;
  font-family:
    "Futura PT",
    -apple-system,
    sans-serif;
`;

// const BlogBody = styled.article.attrs({
//   tabIndex: 0,
// })`
//   font-size: ${rhythm(0.75)};
//   width: 100%;
//   p {
//     /* display: flex; */
//     img {
//       margin: 0 auto;
//     }
//   }
//   a {
//     color: ${fontColor};
//   }
//   code {
//     font-size: ${rhythm(0.75)};
//   }
//   pre {
//     background: #282c34;
//     border-radius: 6px;
//     color: #abb2bf;
//     overflow: auto;
//     padding: 14px 18px;
//     line-height: 1.6;
//   }
// `;

export const query = graphql`
  query blogPostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      timeToReadInWords
      frontmatter {
        title
        type
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;
