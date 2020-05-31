import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { BlogHeader, BlogMain } from "../common";
import { device } from "../../../utils";
import { fontColor, fontHover } from "../../../styles";

// const Blogs = styled.main``;

const BlogItemArticle = styled.article`
  font-size: 30px;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
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
    <BlogMain>
      {blogs &&
        blogs.map(({ node }, index) => {
          const { frontmatter, excerpt, id } = node;
          return (
            <BlogItem
              id={id}
              key={`blog-item-${index}`}
              date={frontmatter.date}
              excerpt={excerpt}
              title={frontmatter.title}
              path={frontmatter.path}
            />
          );
        })}
    </BlogMain>
  );
};

export const BlogItem = ({ id, path, title, date, excerpt }) => {
  return (
    <BlogItemArticle key={`small-blog-item-${id}`}>
      <PostHeading as="header">
        <Link to={`${path}`}>{title}</Link>
        <p>{date}</p>
      </PostHeading>
      <p>{excerpt}</p>
    </BlogItemArticle>
  );
};
