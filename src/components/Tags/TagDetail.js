import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { BlogWrapper, BlogItem, NavLink, BlogMain } from "../Blog";
import { TagListItem } from "../Tags";
import { rhythm } from "../../utils";
import { Emojis } from "../../../static/svg/emojis";

const TagDetailMainContainer = styled(BlogMain)`
  justify-content: flex-start;
  align-items: center;
  margin: ${rhythm(2)} 0 0 0;
`;

const AllTagsLink = styled(NavLink)`
  margin-top: auto;
  span {
    margin-left: 6px;
  }
`;

export default function TagDetail({ pageContext, data }) {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;

  return (
    <BlogWrapper>
      <TagDetailMainContainer>
        <TagListItem minimal count={totalCount} tagValue={tag} />
        {edges.map(({ node }, index) => {
          const { frontmatter, excerpt } = node;
          const { title, path, date, id } = frontmatter;
          return (
            <BlogItem
              key={`tag-blog-item-${index}`}
              id={id}
              path={path}
              date={date}
              excerpt={excerpt}
              title={title}
            />
          );
        })}
        <AllTagsLink to="/tags">
          {Emojis["back"]}
          <span>All tags</span>
        </AllTagsLink>
      </TagDetailMainContainer>
    </BlogWrapper>
  );
}

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, type: { eq: "blog" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            link
            path
            date(formatString: "MMM DD, YYYY")
          }
          excerpt(truncate: true)
        }
      }
    }
  }
`;
