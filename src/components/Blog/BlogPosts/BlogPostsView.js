import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { BlogHeading } from "../common";
import { device } from "../../../utils";
import { fontColor, background, boxShadow, fontHover } from "../../../styles";

const Blogs = styled.main``;

const SmallBlogItem = styled.article`
  font-size: 30px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 3px;
  background: ${background};
  box-shadow: ${boxShadow};
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

const PostHeading = styled(BlogHeading)`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }

  a {
    margin: 0;
    padding: 0;
    font-weight: 550;
    font-size: 1.4rem;
    color: ${fontColor};
    text-decoration: none;
    &:hover {
      color: ${fontHover};
      cursor: pointer;
      filter: brightness(1.2);
    }
  }

  small {
    font-size: 18px;
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
