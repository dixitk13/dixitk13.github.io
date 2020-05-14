import React from "react";
import styled from "styled-components";

import { device } from "../../utils/device";
import { rhythm } from "../../utils/typography";
import { Blockquote, CircularImage } from "../../common";
import { Dump } from "../Dump";
import {
  entireBackground,
  entireBackgroundImage,
  fontColor,
  background,
  boxShadow,
  fontHover,
} from "../../styles";
import dixitk13 from "../../../static/img/dixitk13.jpg";

const BlogPostsViewContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin: 0 auto;
  background-color: ${entireBackground};
  background: ${entireBackgroundImage};
  color: ${fontColor};

  @media ${device.screen4k} {
    padding: ${rhythm(0.75)} 30vw;
  }
  @media ${device.desktop} {
    padding: ${rhythm(0.75)} 30vw;
  }
  @media ${device.mobile} {
    padding: ${rhythm(0.75)} 5vw;
  }
`;

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
      <Dump data={blogs} />
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
                <SmallBlogItem>
                  <Header as="header">
                    <button>
                      <a to={id}>{frontmatter?.title}</a>
                    </button>
                    <small>{frontmatter?.date}</small>
                  </Header>
                  <p tabIndex={0}>{excerpt}</p>
                </SmallBlogItem>
              );
            })}
        </Blogs>
      </BlogPostsViewContainer>
    </>
  );
};
