import React from "react";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
import styled from "styled-components";

import { fontHover, fontColor } from "../../styles";
import { rhythm } from "../../utils";

const TagsListContainer = styled.article`
  /* display: inline-flex; */
  /* width: 100%; */
  flex-wrap: wrap;
  ul {
    margin: 0;
    list-style: none;
    /* display: inline-flex; */
    flex-wrap: wrap;
    align-items: flex-start;
  }

  li {
    margin: ${rhythm(0.25)};
    padding: ${rhythm(0.25)};

    a {
      padding: ${rhythm(0.25)};
      border: 1px solid ${fontHover};
      color: ${fontColor};
      border-radius: 3px;
      margin: ${rhythm(0.5)};
      text-decoration: none;
      &:hover {
      }
    }
  }
`;

export const TagList = ({ group }) => {
  return (
    <TagsListContainer>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </TagsListContainer>
  );
};
