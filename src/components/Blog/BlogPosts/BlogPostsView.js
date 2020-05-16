import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Blockquote, CircularImage } from "../../../common";
import { device } from "../../../utils";
import { fontColor, background, boxShadow, fontHover } from "../../../styles";
import dixitk13 from "../../../../static/img/dixitk13.jpg";

const Blogs = styled.main``;
const BlogAside = styled.aside`
  margin: 0;
  width: 100%;
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

const BlogHeader = styled.header`
  font-size: 2.175rem; // ahem ahem
  margin: 5px auto;
`;

const Header = styled(BlogHeader)`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }

  button {
    background: none;
    font-size: 1.4rem;
    border: none;
    margin: 0;
    padding: 0;
    font-weight: 550;
    a {
      color: ${fontColor};
      text-decoration: none;
      &:hover {
        color: ${fontHover};
        cursor: pointer;
        filter: brightness(1.2);
      }
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
      <CircularImage src={dixitk13} />
      <BlogHeader>Dixit Keshavbhai Patel's Blog</BlogHeader>
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
                    <Link to={`${frontmatter.path}`}>{frontmatter?.title}</Link>
                  </button>
                  <small>{frontmatter?.date}</small>
                </Header>
                <p>{excerpt}</p>
              </SmallBlogItem>
            );
          })}
      </Blogs>
    </>
  );
};
