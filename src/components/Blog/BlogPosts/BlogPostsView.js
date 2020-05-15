import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Blockquote, CircularImage } from "../../../common";

import { fontColor, background, boxShadow, fontHover } from "../../../styles";
import { BlogPostsViewContainer } from "../common";
import dixitk13 from "../../../../static/img/dixitk13.jpg";

const Blogs = styled.article``;
const BlogAside = styled.aside`
  margin: 0;
`;

const SmallBlogItem = styled.article.attrs({
  tabIndex: 0,
})`
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
  p {
    font-size: 18px;
  }
`;

const BlogTitle = styled.header`
  font-size: 2.175rem; // ahem ahem
  margin: 5px auto;
`;

const Header = styled(BlogTitle)`
  margin: 20px 0;
  // position: relative;
  display: flex;
  justify-content: space-between;
  button {
    background: none;
    font-size: 1.4rem;
    border: none;
    margin: 0;
    padding: 0;
    color: ${fontColor};
    font-weight: 550;
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
      <BlogPostsViewContainer>
        <CircularImage src={dixitk13} />
        <BlogTitle>Dixit Keshavbhai Patel's Blog</BlogTitle>
        <BlogAside>
          <Blockquote>Just another Software Engineer</Blockquote>
        </BlogAside>
        <Blogs>
          {blogs &&
            blogs.map(({ node }) => {
              const { frontmatter, excerpt, id } = node;
              return (
                <SmallBlogItem key={`small-blog-item-${id}`}>
                  <Header as="header">
                    <button>
                      <Link to={`${frontmatter.path}`}>
                        {frontmatter?.title}
                      </Link>
                    </button>
                    <small>{frontmatter?.date}</small>
                  </Header>
                  <p>{excerpt}</p>
                </SmallBlogItem>
              );
            })}
        </Blogs>
      </BlogPostsViewContainer>
    </>
  );
};
