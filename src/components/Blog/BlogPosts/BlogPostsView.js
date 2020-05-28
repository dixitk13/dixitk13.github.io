import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { BlogHeader } from "../common";
import { device } from "../../../utils";
import { fontColor, background, boxShadow, fontHover } from "../../../styles";

const Blogs = styled.main``;

const SmallBlogItem = styled.article`
  font-size: 30px;
  padding: 20px;
  border-radius: 3px;
  /* background: ${background}; */
  /* box-shadow: ${boxShadow}; */
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateZ(-12px);
  }
  p {
    font-size: 18px;
  }
`;

const PostHeading = styled(BlogHeader)`
  margin: 20px 0 10px 0;
  display: flex;
  justify-content: space-between;

  a {
    margin: 0;
    padding: 0;
    font-weight: 900;
    font-size: 40px;
    color: ${fontColor};
    text-decoration: none;
    font-family: "Futura PT", -apple-system, sans-serif;
    &:hover {
      color: ${fontHover};
      cursor: pointer;
    }
  }
  p {
    margin: 0;
  }

  small {
    font-size: 18px;
  }

  @media ${device.mobile} {
    min-height: unset;
    a {
      font-weight: 900;
      font-size: 27px;
    }
  }
`;
export const BlogPostsView = ({ blogs }) => {
  if (!blogs) return null;

  return (
    <>
      <Blogs>
        {blogs &&
          blogs.map(({ node }) => {
            const { frontmatter, excerpt, id } = node;
            return (
              <SmallBlogItem key={`small-blog-item-${id}`}>
                <PostHeading as="header">
                  <Link to={`${frontmatter.path}`}>{frontmatter?.title}</Link>
                  <p>{frontmatter?.date}</p>
                </PostHeading>
                <p>{excerpt}</p>
              </SmallBlogItem>
            );
          })}
      </Blogs>
    </>
  );
};
